'use client'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from '@heroui/react'
import Link from 'next/link'


export default function Header() {


return (
    <>
    <Navbar isBordered>
        <NavbarBrand>
        <p className="font-bold text-md text-blue-600">Форма о фактах происшествий</p>
        </NavbarBrand>
        <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
        </NavbarItem>
        <NavbarItem>
            <Button as={Link} color='primary' size='md' radius='sm' href='/auth' >
        Войти     
            </Button>
        </NavbarItem>
        </NavbarContent>
    </Navbar>
    </>
)
}
