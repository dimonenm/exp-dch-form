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
    <NavbarItem className='justify-center' key={item.href}>
        <Link
        color='foregound'
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
    <Navbar>
        <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
        </NavbarItem>
        <NavbarItem>
            <Button as={Link} color='primary' radius='sm' href='#' >
        Войти     
            </Button>
        </NavbarItem>
        </NavbarContent>
    </Navbar>
    <Navbar isBordered>
        <NavbarContent className='hidden sm:flex gap-4'>
        {getNavItems()}
        </NavbarContent>
        <NavbarContent className='hidden sm:flex gap-4'>
        {getNavItems()}
        </NavbarContent>
    </Navbar>
    </>
)
}
