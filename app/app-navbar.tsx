import React from "react"

import { ThemeSwitcher } from "@/components/theme-switcher"
import { Outlet } from "@remix-run/react"
import { IconBrandGithub, IconBrandJustd, IconColors, IconCube } from "justd-icons"
import { buttonStyles, Link, Navbar, navbarItemStyles, Separator } from "ui"

const navigations = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "About",
    url: "/about"
  },
  {
    name: "Contact",
    url: "/contact"
  }
]

export function AppNavbar() {
  return (
    <Navbar>
      <Navbar.Nav>
        <Navbar.Logo href="/">
          <IconBrandJustd />
        </Navbar.Logo>
        <Navbar.Section>
          {navigations.map((item) => (
            <Navbar.Item key={item.url} href={item.url}>
              {item.name}
            </Navbar.Item>
          ))}
          <a className={navbarItemStyles()} target="_blank" href="https://getjustd.com/components">
            <IconCube />
            Components
          </a>
          <a className={navbarItemStyles()} target="_blank" href="https://getjustd.com/icons">
            <IconBrandJustd />
            Icons
          </a>
          <a className={navbarItemStyles()} target="_blank" href="https://getjustd.com/themes">
            <IconColors />
            Themes
          </a>
        </Navbar.Section>
        <Navbar.Section className="ml-auto gap-x-1 lg:flex hidden">
          <ThemeSwitcher />
          <Link
            className={buttonStyles({ appearance: "outline", size: "square-petite" })}
            href="https://github.com/justdlabs/remix"
            target="_blank"
            aria-label="Go to Github Repo"
          >
            <IconBrandGithub />
          </Link>
          <Link
            className={buttonStyles({ appearance: "outline", size: "square-petite" })}
            href="https://getjustd.com"
            target="_blank"
            aria-label="Go to Justd"
          >
            <IconBrandJustd />
          </Link>
          <Link className={buttonStyles({ appearance: "outline", size: "small" })} href="/login">
            Login
          </Link>
        </Navbar.Section>
      </Navbar.Nav>

      <Navbar.Compact>
        <Navbar.Flex>
          <Navbar.Trigger className="-ml-2" />
          <Separator orientation="vertical" className="h-6" />
          <Navbar.Logo href="/">
            <IconBrandJustd />
          </Navbar.Logo>
        </Navbar.Flex>
        <Navbar.Flex className="gap-x-1">
          <ThemeSwitcher />
          <Link
            className={buttonStyles({ appearance: "outline", size: "square-petite" })}
            href="https://github.com/justdlabs/remix"
            target="_blank"
            aria-label="Go to Github Repo"
          >
            <IconBrandGithub />
          </Link>
          <Link
            className={buttonStyles({ appearance: "outline", size: "square-petite" })}
            href="https://getjustd.com"
            target="_blank"
            aria-label="Go to Justd"
          >
            <IconBrandJustd />
          </Link>
          <Link className={buttonStyles({ appearance: "outline", size: "small" })} href="/login">
            Login
          </Link>
        </Navbar.Flex>
      </Navbar.Compact>
      <Outlet />
    </Navbar>
  )
}
