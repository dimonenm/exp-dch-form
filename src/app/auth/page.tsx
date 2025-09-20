import { Metadata } from 'next'
import { Auth } from './Auth'
import AuthHeader from './AuthHeader'

export const metadata: Metadata = {
    title: 'Auth',
  description: 'auth page',
}

export default function AuthPage() {
    return (
    <>
    {/* <AuthHeader/> */}
    <Auth />
    </>
  )
}