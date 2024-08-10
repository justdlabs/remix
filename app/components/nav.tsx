'use client'

import React, { useEffect } from 'react'

import { ThemeSwitcher } from '@/components/theme-switcher'
import { Link, useLocation } from '@remix-run/react'
import { LayoutGroup, motion } from 'framer-motion'
import { IconBrandGithub, IconBrandJustd } from 'justd-icons'
import { ListBox, ListBoxItem, ListBoxItemProps } from 'react-aria-components'
import { tv } from 'tailwind-variants'
import {
  Button,
  buttonStyles,
  Container,
  Sheet,
  SheetBody,
  SheetContent,
  SheetHeader,
  SheetTitle,
  useMediaQuery
} from 'ui'

const navigations = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'About',
    url: '/about'
  },
  {
    name: 'Contact',
    url: '/contact'
  },
  {
    name: 'Login',
    url: '/login'
  }
]

export function Nav() {
  const isMobile = useMediaQuery('(max-width: 640px)')
  return (
    <main>
      <nav className="sm:py-1 py-2.5 border-b bg-background">
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex gap-x-8 items-center">
              <Link aria-label="Home" to="/">
                <IconBrandJustd className="size-5" />
              </Link>
              {!isMobile && (
                <span className="sm:inline hidden">
                  <NavContent />
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 justify-end">
              <ThemeSwitcher />
              <Link
                className={buttonStyles({ appearance: 'outline', size: 'square-petite' })}
                to="https://github.com/justdlabs/remix"
                aria-label="Github Repo"
              >
                <IconBrandGithub />
              </Link>
              <Link
                className={buttonStyles({ appearance: 'outline', size: 'square-petite' })}
                to="https://getjustd.com"
                aria-label="Github"
              >
                <IconBrandJustd />
              </Link>
              {isMobile && <NavResponsive />}
            </div>
          </div>
        </Container>
      </nav>
    </main>
  )
}

const navStyles = tv({
  base: 'text-sm relative py-0 sm:py-4 inline-flex focus:outline-none focus-visible:text-fg font-medium',
  variants: {
    isCurrent: {
      true: 'text-fg',
      false: 'text-muted-fg'
    }
  }
})

function NavResponsive() {
  const [isOpen, setOpen] = React.useState(false)
  const pathname = useLocation()
  useEffect(() => {
    setOpen(false)
  }, [pathname.pathname])
  return (
    <Sheet onOpenChange={setOpen} isOpen={isOpen}>
      <Button size="small" appearance="outline">
        Menu
      </Button>
      <SheetContent>
        <SheetHeader className="text-left p-4 border-b">
          <SheetTitle className="text-sm flex items-center gap-2">
            <IconBrandJustd />
            Starter Kit
          </SheetTitle>
        </SheetHeader>
        <SheetBody className="-mx-2 pt-4">
          <NavContent />
        </SheetBody>
      </SheetContent>
    </Sheet>
  )
}

function NavContent() {
  const isMobile = useMediaQuery('(max-width: 640px)')
  const id = React.useId()
  return (
    <LayoutGroup id={id}>
      <ListBox
        orientation={isMobile ? 'vertical' : 'horizontal'}
        layout={isMobile ? 'stack' : 'grid'}
        className="flex relative sm:flex-row flex-col sm:items-center gap-3 sm:gap-6"
        items={navigations}
        aria-label="Navigation"
      >
        {(item) => (
          <NavLink
            target={['Components', 'Colors', 'Icons'].includes(item.name) ? '_blank' : undefined}
            href={item.url}
            id={item.url}
            textValue={item.name}
          >
            {item.name}
          </NavLink>
        )}
      </ListBox>
    </LayoutGroup>
  )
}

interface LinkProps extends ListBoxItemProps {
  isCurrent?: boolean
  className?: string
  children: React.ReactNode
}

function NavLink({ children, className, ...props }: LinkProps) {
  const isCurrent = useLocation().pathname === props.href
  return (
    <ListBoxItem className={navStyles({ isCurrent, className })} {...props}>
      {children}
      {isCurrent && <CurrentIndicator />}
    </ListBoxItem>
  )
}

function CurrentIndicator() {
  return (
    <motion.span
      className="h-full inset-y-0 sm:inset-auto sm:h-0.5 w-0.5 sm:w-full rounded-full bg-fg -left-4 sm:bottom-[-5px] sm:inset-x block absolute"
      layoutId="current"
    />
  )
}
