import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from "@remix-run/react";
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from "remix-themes";
import { Toast } from "ui";
import { RouterProvider } from "~/components/router-provider";
import AppLayout from "~/layouts/app-layout";
import GuestLayout from "~/layouts/guest-layout";
import stylesheet from "~/tailwind.css?url";

import { themeSessionResolver } from "./sessions.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return { theme: getTheme() };
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesheet }];

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();

  return (
    <RouterProvider>
      <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
        <App />
      </ThemeProvider>
    </RouterProvider>
  );
}

function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();
  const location = useLocation();

  const guestRoutes = ["/login", "/signup", "/forgot-password"];
  const isGuestRoute = guestRoutes.includes(location.pathname);

  return (
    <html lang="en" data-theme={theme ?? ""} className={theme ?? ""}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body className="font-sans antialiased min-h-svh bg-tertiary">
        <Toast />
        {isGuestRoute ? <GuestLayout /> : <AppLayout />}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
