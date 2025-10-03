'use state'
import React, { useState } from "react";
import {
    Button,
    ButtonGroup,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@heroui/react";



export const ChevronDownIcon = () => {
    return (
        <svg fill="none" height="14" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z"
                fill="currentColor"
            />
        </svg>
    );
};


export default function DropdownComponent() {
    const [selectedOption, setSelectedOption] = useState(new Set([""]));



    const labelsMap = {
        expert1: "Шибаев М.А.",
        expert2: "Сорокина Е.Ю.",
        expert3: "Подмогильная В.С.",
    };



    // Convert the Set to an Array and get the first value.
    const selectedOptionValue = Array.from(selectedOption)[0];

    return (
        <ButtonGroup variant="solid">
            < Button style={{ lineHeight: '1.8em' }} className="grid grid-cols-1 w-60 min-w-30 h-15 text-left ">
                <p className="text-[0.8rem] m-0 p-0 text-gray-700">Выбор биолога:</p>
                <p className="text-l">{labelsMap[selectedOptionValue]}</p>
            </Button>
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <Button isIconOnly className="h-15" >
                        <ChevronDownIcon />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    disallowEmptySelection
                    aria-label="Merge options"
                    className="max-w-[300px]"
                    selectedKeys={selectedOption}
                    selectionMode="single"
                    onSelectionChange={setSelectedOption}
                >
                    <DropdownItem key='expert1' >
                        {labelsMap["expert1"]}
                    </DropdownItem>
                    <DropdownItem key="expert2" >
                        {labelsMap["expert2"]}
                    </DropdownItem>
                    <DropdownItem key="expert3" >
                        {labelsMap["expert3"]}
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </ButtonGroup >
    );
}