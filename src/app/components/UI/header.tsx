'use client'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from '@heroui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Список' },
  { href: '/add', label: 'Создать пункт' },
  { href: '/preferences', label: 'Настройки' },
]

export default function Header() {
  const pathname = usePathname()
  return (
    <Navbar>
      <NavbarBrand>
        <p className='font-bold text-inherit'>Форма</p>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        {navItems.map(item => {
        const isActive = pathname === item.href
          return (
            <NavbarItem>
              <Link
                color='foreground'
                href={item.href}
              className={`px-3 py-1 ${isActive ? 'text-blue-500': 'text-foreground'} font-bold`}
              >{item.label}</Link>
            </NavbarItem>
          )
        })}
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
