import React, { useEffect, useRef } from 'react';

export function MessageList({ messages = []}) {
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
        <div className="flex flex-col space-y-4 mt-6 px-6 text-2xl max-h-[calc(100vh-300px)] overflow-y-auto">
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`flex ${
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                >
                    <div
                        className={`max-w-[95%] rounded-lg p-4 ${
                            message.role === 'user'
                                ? 'bg-[#F5EADC] text-black'
                                : 'bg-transparent text-black'
                        }`}
                    >
                        <p className="whitespace-pre-wrap tracking-normal leading-normal">
                            {message.content}
                        </p>
                    </div>
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
}