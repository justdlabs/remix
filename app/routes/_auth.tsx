import { Outlet } from '@remix-run/react'
import { IconBrandJustd } from 'justd-icons'
import { Link } from 'ui'

export default function Layout() {
  return (
    <div className="flex items-center bg-muted/20 justify-center min-h-svh">
      <div className="max-w-lg mx-auto w-full">
        <Link
          href="/"
          className="mx-auto size-10 bg-secondary rounded grid place-content-center mb-6"
        >
          <IconBrandJustd className="size-5" />
        </Link>
        <Outlet />
      </div>
    </div>
  )
}
