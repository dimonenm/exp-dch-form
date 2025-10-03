import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
} from "@heroui/react";


export default function TableCard() {

    const rows = [
        {
            key: "1",
            name: "1",
            role: "Кража из а/м",
            status: "1234 от 11.09.2025",
        },
        {
            key: "2",
            name: "Zoey Lang",
            role: "Technical Lead",
            status: "Paused",
        },
        {
            key: "3",
            name: "Jane Fisher",
            role: "Senior Developer",
            status: "Active",
        },

    ];

    const columns = [
        {
            key: "name",
            label: "№ по сводке",
        },
        {
            key: "role",
            label: "Вид преступления",
        },
        {
            key: "status",
            label: "КУСП",
        },
    ];

    return (
        <Table
            aria-label="Example static collection table"
            defaultSelectedKeys={["2", "3"]}
            isStriped={true}
        // removeWrapper
        >
            <TableHeader>
                <TableColumn>NAME</TableColumn>
                <TableColumn>ROLE</TableColumn>
                <TableColumn>STATUS</TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key="1">
                    <TableCell>Tony Reichert</TableCell>
                    <TableCell>CEO</TableCell>
                    <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="2">
                    <TableCell>Zoey Lang</TableCell>
                    <TableCell>Technical Lead</TableCell>
                    <TableCell>Paused</TableCell>
                </TableRow>
                <TableRow key="3">
                    <TableCell>Jane Fisher</TableCell>
                    <TableCell>Senior Developer</TableCell>
                    <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="4">
                    <TableCell>William Howard</TableCell>
                    <TableCell>Community Manager</TableCell>
                    <TableCell>Vacation</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}