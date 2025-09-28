'use client'

import DropdownComponent from "../components/UI/DropdownComponent";
import TabMenu from "../components/UI/TabMenu";


export function Dashboard() {
    return (
        <>
            <div className='grid grid-rows-2 max-h-max p-10'>
                <div className='grid grid-cols-3 max-w-2/3 gap-10 justify-self-end px-10'>
                    <DropdownComponent />
                    <DropdownComponent />
                    <DropdownComponent />
                </div>
                <div className='block absolute w-screen'>
                <TabMenu />
                </div>
            </div>
        </>
    );
}