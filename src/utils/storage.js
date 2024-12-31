const CHATS_STORAGE_KEY = 'chatHistory';

export const getStoredChats = () => {
    const stored = localStorage.getItem(CHATS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
};

export const storeChats = (chats) => {
    localStorage.setItem(CHATS_STORAGE_KEY, JSON.stringify(chats));
};

export const clearChatHistory = () => {
    localStorage.removeItem(CHATS_STORAGE_KEY);
};