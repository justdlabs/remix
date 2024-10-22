import { Outlet } from "@remix-run/react"
import { IconBrandJustd } from "justd-icons"
import { Link } from "ui"

export default function Layout() {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-lg pt-12 mx-auto w-full">
        <Link
          href="/"
          className="mx-auto size-10 bg-secondary rounded grid place-content-center mb-6"
          aria-label="Go to home"
        >
          <IconBrandJustd className="size-5" />
        </Link>
        <Outlet />
      </div>
    </div>
  )
}
