import React from 'react';
import { MessageList } from './MessageList';

export function ChatHistoryView({ chat }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-serif font-bold text-center mb-4">
                {chat.topic || 'Chat'} - {new Date(chat.createdAt).toLocaleDateString()}
            </h2>
            <hr className="my-6 border-gray-200"/>
            <MessageList messages={chat.messages} scroll={false}/>
        </div>
    );
}