import React, { useEffect, useRef } from 'react';

export function MessageList({ messages = [] }) {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    if (!messages || messages.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-col space-y-4 mt-4 md:mt-6 px-7 md:px-24 text-lg md:text-2xl max-h-[calc(100vh-150px)] overflow-y-auto scrollbar-hide">
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
                        <p className="whitespace-pre-wrap tracking-normal leading-normal text-base md:text-2xl">
                            {message.content}
                        </p>
                    </div>
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
}