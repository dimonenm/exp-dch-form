"use client";

import { Button, Form, Input } from "@heroui/react";
import { useState } from "react";

export function Auth() {
    const [action, setAction] = useState(1);

    return (
        <div className="flex justify-center items-center py-20 h-screen  ">
            <div className="flex flex-col justify-center items-center min-w-96 border-1 border-solid border-[#EDEDED] rounded-lg p-10 shadow-xl">
                <div className="mt-10 text-center text-xl font-medium  text-gray-900 mb-5 justify-start">
                    Авторизация
                </div>
                <Form
                    className="w-full max-w-xs flex flex-col gap-4"
                    onReset={() => setAction(2)}
                    onSubmit={(e) => {
                        e.preventDefault();
                        const data = Object.fromEntries(new FormData(e.currentTarget));

                        setAction(3);
                    }}
                >
                    <Input
                        isRequired
                        errorMessage="Please enter a valid username"
                        // label="Username"
                        labelPlacement="outside"
                        name="username"
                        placeholder="Enter your username"
                        type="text"
                    />

                    <Input
                        isRequired
                        errorMessage="Please enter a valid password"
                        // label="Email"
                        labelPlacement="outside"
                        name="password"
                        placeholder="Enter your password"
                        type="password"
                    />
                    <div className="flex gap-2">
                        <Button color="primary" type="submit">
                            Войти
                        </Button>
                    </div>
                    {action && (
                        <div className="text-small text-default-500">
                            Action: <code>{action}</code>
                        </div>
                    )}
                </Form>
            </div>
        </div>
    );
}
