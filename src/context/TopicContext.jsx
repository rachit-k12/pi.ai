import React, { createContext, useContext, useState } from 'react';
const TopicContext = createContext(undefined);


export function TopicProvider({ children }) {
    const [topic, setTopic] = useState('');

    const value = {
        topic,
        setTopic,
    };

    return (
        <TopicContext.Provider value={value}>
            {children}
        </TopicContext.Provider>
    );
}

export function useTopic() {
    const context = useContext(TopicContext);
    if (context === undefined) {
        throw new Error('useTopic must be used within a TopicProvider');
    }
    return context;
}