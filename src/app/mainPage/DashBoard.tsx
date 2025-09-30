'use client'

import { Button } from "@heroui/react";
import DropdownComponent from "../components/UI/DropdownComponent";
import TabMenu from "../components/UI/TabMenu";


export function Dashboard() {
    return (
        <>
            <div className='grid max-h-max p-10 2xl:grid-rows-2 '>
                <div className='grid grid-cols-1 gap-10 justify-self-end px-10 2xl:grid-cols-4 2xl:max-w-3/4 '>
                    <DropdownComponent />
                    <DropdownComponent />
                    <DropdownComponent />
                    <Button color="primary" variant="bordered">
                        Bordered
                    </Button>
                </div>
                <div className='grid absolute w-screen 2xl:block '>
                <TabMenu />
                </div>
            </div>
        </>
    );
}