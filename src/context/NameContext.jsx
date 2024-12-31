import React, { createContext, useContext, useState } from 'react';
const NameContext = createContext(undefined);


export function NameProvider({ children }) {
    const [name, setName] = useState('');

    const value = {
        name,
        setName,
    };

    return (
        <NameContext.Provider value={value}>
            {children}
        </NameContext.Provider>
    );
}

export function useName() {
    const context = useContext(NameContext);
    if (context === undefined) {
        throw new Error('useName must be used within a NameProvider');
    }
    return context;
}