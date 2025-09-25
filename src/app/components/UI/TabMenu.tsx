
import { Tabs, Tab, Card, CardBody } from "@heroui/react";

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
        <div className="flex w-full flex-col">
            <Tabs aria-label="Dynamic tabs" color='primary' radius='full' size='sm' items={tabs}>
                {(item) => (
                    <Tab key={item.id} title={item.label}>
                        <Card className='mt-8'>
                            <CardBody>{item.content}</CardBody>
                        </Card>
                    </Tab>
                )}
            </Tabs>
        </div>
    );
}
