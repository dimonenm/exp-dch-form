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

export default function HeaderMenu() {
  const pathname = usePathname()

  const getNavItems = () => {
  return siteConfig.navItems.map(item => {
    const isActive = pathname === item.href
    return (
      <NavbarItem className='justify-center' key={item.href}>
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
    <>
      {/* <Navbar>
        <NavbarContent justify='end'>
          <NavbarItem>
            <Button as={Link} color='primary' href='#'>
              Войти
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar> */}
      <Navbar isBordered>
        <NavbarBrand>
        <p className="font-bold text-md text-blue-600">Форма о фактах происшествий</p>
        </NavbarBrand>
        <NavbarContent justify='center' className='hidden sm:flex gap-4'>
          {getNavItems()}
        </NavbarContent>
       
      </Navbar>
    </>
  )
}