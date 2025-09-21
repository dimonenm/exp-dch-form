import { Metadata } from "next"
import { Main } from "./Main"


export const metadata: Metadata = {
    title: 'Main Page',
    description: 'main page',
}

export default function MainPage() {
    return (
        <>
            <Main/>
            
        </>
    )
}