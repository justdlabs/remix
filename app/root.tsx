import { AppNavbar } from "@/app-navbar"
import { Footer } from "@/components/footer"
import { RouteProvider } from "@/components/route-provider"
import stylesheet from "@/tailwind.css?url"
import { LinksFunction, LoaderFunctionArgs } from "@remix-run/node"
import { Links, LiveReload, Meta, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react"
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from "remix-themes"
import { Toast } from "ui"

import { themeSessionResolver } from "./sessions.server"

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request)
  return {
    theme: getTheme()
  }
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: stylesheet }]

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>()
  return (
    <RouteProvider>
      <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
        <App />
      </ThemeProvider>
    </RouteProvider>
  )
}

function App() {
  const data = useLoaderData<typeof loader>()
  const [theme] = useTheme()
  return (
    <html lang="en" data-theme={theme ?? ""} className={theme ?? ""}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body className="antialiased min-h-svh bg-tertiary font-sans">
        <Toast />
        <AppNavbar />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}
