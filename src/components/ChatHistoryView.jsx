import React from 'react';
import { MessageList } from './MessageList';

export function ChatHistoryView({ chat }) {
    return (
        <>
            <div className="mt-6">
                <h1 className= "w-full text-center font-serif text-2xl  font-bold ">
                    {chat.topic || 'Chat'} - {new Date(chat.createdAt).toDateString()}
                </h1>
                <MessageList messages={chat.messages} enableScroll={false}/>
            </div>
            <hr></hr>
        </>


    );
}