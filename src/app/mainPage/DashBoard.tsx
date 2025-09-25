'use client'

import { Avatar } from "@heroui/react";
import TabMenu from "../components/UI/TabMenu";
import UserAvatar from "../components/UI/UserAvatar";


export function Dashboard() {
    return (
        <>
            <div className='p-8'>
                <TabMenu />
                <UserAvatar />
            </div>
        </>
    );
}