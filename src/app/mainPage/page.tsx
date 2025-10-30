import { Metadata } from "next"
import { Dashboard } from "./DashBoard"

export const metadata: Metadata = {
    title: 'Main Page',
    description: 'main page',
}

export default function MainPage() {
    return (
        <>
            <Dashboard />
        </>
    )
}