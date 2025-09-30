import { Metadata } from "next"
import { Dashboard } from "./DashBoard"
import { Dashboard2 } from "./Dashboard2"



export const metadata: Metadata = {
    title: 'Main Page',
    description: 'main page',
}

export default function MainPage() {
    return (
        <>
            {/* <Dashboard />    */}
            <Dashboard2 />
        </>
    )
}