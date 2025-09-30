'use client'

import { Button } from "@heroui/react";
import DropdownComponent from "../components/UI/DropdownComponent";
import TabMenu from "../components/UI/TabMenu";


export function Dashboard2() {
    return (
        <>
            <div className='grid grid-cols-1 gap-5 p-10 grid-rows-[1fr 2fr] '>
                <div className='grid grid-cols-4 grid-rows-1 gap-x-10 justify-self-end px-10 items-center '>
                    <DropdownComponent />
                    <DropdownComponent />
                    <DropdownComponent />
                    <Button className='max-w-40 bg-[#CCE2FC] text-blue-500 font-bold' color="primary">
                        Добавить запись
                    </Button>
                </div>
                <div className='grid grid-cols-1 h-40 w-screen '>
                    <TabMenu />
                </div>
            </div>
        </>
    );
}