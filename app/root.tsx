import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  Meta, Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation
} from "@remix-run/react"
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from "remix-themes";
import { Toast } from "ui";
import stylesheet from "~/tailwind.css?url";
import { themeSessionResolver } from "./sessions.server";
import GuestLayout from "~/layouts/guest-layout"
import AppLayout from "~/layouts/app-layout"

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return { theme: getTheme() };
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();

  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <RootLayout theme={data.theme} />
    </ThemeProvider>
  );
}

function RootLayout({ theme }: { theme: string | null }) {
  const [currentTheme] = useTheme();
  const location = useLocation();

  const guestRoutes = ["/login", "/signup", "/forgot-password"];
  const isGuestRoute = guestRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <html
      lang="en"
      data-theme={currentTheme ?? theme ?? ""}
      className={currentTheme ?? theme ?? ""}
    >
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <Meta />
      <PreventFlashOnWrongTheme ssrTheme={Boolean(theme)} />
      <Links />
    </head>
    <body className="font-sans antialiased min-h-svh bg-tertiary">
    <Toast />
    {isGuestRoute ? <GuestLayout><Outlet /></GuestLayout> : <AppLayout><Outlet /></AppLayout>}
    <ScrollRestoration />
    <Scripts />
    </body>
    </html>
  );
}
