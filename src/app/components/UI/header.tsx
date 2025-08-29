'use client'
import { siteConfig } from '@/app/config/site.config'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from '@heroui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const getNavItems = () => {
  return siteConfig.navItems.map(item => {
    const isActive = pathname === item.href
    return (
      <NavbarItem className='flex-wrap' key={item.href}>
        <Link
          color='foreground'
          href={item.href}
          className={`px-3 py-1 ${
            isActive ? 'text-blue-500' : 'text-foreground'
          } font-bold`}
        >
          {item.label}
        </Link>
      </NavbarItem>
    )
  })
}

  return (
    <Navbar className='h-auto flex-wrap'>
      {/* <NavbarBrand>
        <p className='font-bold text-inherit'>Форма</p>
      </NavbarBrand> */}
      <NavbarContent
        className='hidden sm:flex gap-4 flex-wrap'
        justify='center'
      >
        {getNavItems()}
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='#'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='primary' href='#' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
