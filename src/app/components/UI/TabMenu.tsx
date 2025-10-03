
import { Tabs, Tab, Card, CardBody, Input } from "@heroui/react";
import TableCard from "../TableCard";

export default function TabMenu() {
    const tabs = [
        {
            id: "1",
            label: "ОМП со специалистом",

            content:
                "Content",
        },
        {
            id: "2",
            label: "ОМП без специалиста",
            content:
                "Content 2",
        },
        {
            id: "3",
            label: "Факты не привлечения",
            content:
                "Content 3",
        },
    ];

    return (
        <>
            <Tabs aria-label="Dynamic tabs" color='primary' radius='full' size='sm' items={tabs}>
                {(item) => (
                    <Tab key={item.id} title={item.label}>
                        <Card className='mt-8 w-[95%]'>
                            <CardBody className='grid grid-cols-[1fr_1fr_2fr] gap-4'>
                                <TableCard />
                                <TableCard />
                                <TableCard />
                            </CardBody>
                        </Card>
                        <Card className='mt-8 w-[95%]'>
                            <CardBody className='grid grid-cols-3 gap-4'>
                                {/* {item.content} */}
                                <Input />
                                <Input />
                                <Input />
                            </CardBody>
                        </Card>
                        <Card className='mt-8 w-[95%]'>
                            <CardBody className='grid grid-cols-3 gap-4'>
                                {/* {item.content} */}
                                <Input />
                                <Input />
                                <Input />
                            </CardBody>
                        </Card>
                    </Tab>
                )}
            </Tabs>
        </>
    );
}
