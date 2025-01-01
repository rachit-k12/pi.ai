import React, { useEffect, useRef } from 'react';
import {Button} from "./ui/Button.jsx";

export function MessageList({ messages = [] }) {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    if (!messages || messages.length === 0) {
        return (
            <h1 className="w-full h-full flex flex-col justify-center items-center">
            <Button
                onClick = {() => location.reload()}>Click Here to chat with Pi. </Button></h1>
        );
    }

    return (
        <div
            className="flex flex-col space-y-4 mt-4 md:mt-6 px-7 md:px-24 text-lg md:text-2xl max-h-[calc(100vh-150px)] overflow-y-auto scrollbar-hide">
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`flex ${
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                >
                    <div
                        className={`max-w-[95%] rounded-lg p-3 md:p-4 ${
                            message.role === 'user'
                                ? 'bg-secondary-300 text-primary-500'
                                : 'bg-transparent text-primary-500'
                        }`}
                    >
                        <p className=" tracking-wide leading-loose text-base md:text-2xl font-serif">
                            {message.content}
                        </p>
                    </div>
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
}