'use client'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from '@heroui/react'


export default function AuthHeader() {


return (
    <>
    <Navbar isBordered>
        <NavbarBrand>
        <p className="font-bold text-md text-blue-600">Форма о фактах происшествий</p>
        </NavbarBrand>
    </Navbar>
    </>
)
}