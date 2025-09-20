import type { Metadata } from 'next'
import AuthHeader from './AuthHeader'

export const metadata: Metadata = {
    title: 'Auth',
    description: 'login',
}

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
    <>
    <AuthHeader />
        {children}
    </>

    )
}
