import { useState, useCallback, useEffect } from 'react';
import { useName } from '../context/NameContext';
import { sendChatMessage } from '../api/chatApi';
import { getStoredChats, storeChats } from '../utils/storage';

export function useChat(initialTopic) {
    const [chats, setChats] = useState([]);
    const [currentChatIndex, setCurrentChatIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { name } = useName();

    const currentChat = chats[currentChatIndex] || { messages: [], topic: null };

    useEffect(() => {
        const storedChats = getStoredChats();
        if (storedChats && storedChats.length > 0) {
            setChats(storedChats);
        } else {
            initializeNewChat();
        }
    }, []);

    useEffect(() => {
        if (initialTopic && (!currentChat.topic || currentChat.topic !== initialTopic)) {
            initializeNewChat(initialTopic);
        }
    }, [initialTopic]);

    const initializeNewChat = useCallback(async (topic) => {
        setIsLoading(true);
        try {
            const { response } = await sendChatMessage([], topic);
            const newChat = {
                id: Date.now(),
                topic,
                messages: [{ role: 'assistant', content: response }],
                createdAt: new Date().toISOString()
            };

            setChats(prevChats => {
                const updatedChats = [...prevChats, newChat];
                storeChats(updatedChats);
                return updatedChats;
            });
            setCurrentChatIndex(prevIndex => prevIndex + 1);
        } catch (error) {
            setError(error instanceof Error ? error.message : 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    }, []);


    const sendMessage = useCallback(async (content) => {
        setIsLoading(true);
        setError(null);

        const newMessage = { role: 'user', content };
        const currentMessages = currentChat.messages;

        try {
            const { response } = await sendChatMessage(
                [...currentMessages, newMessage],
                currentChat.topic
            );

            const updatedMessages = [
                ...currentMessages,
                newMessage,
                { role: 'assistant', content: response }
            ];

            setChats(prevChats => {
                const updatedChats = prevChats.map((chat, index) =>
                    index === currentChatIndex
                        ? { ...chat, messages: updatedMessages }
                        : chat
                );
                storeChats(updatedChats);
                return updatedChats;
            });
        } catch (error) {
            setError(error instanceof Error ? error.message : 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    }, [currentChat, currentChatIndex]);



    return {
        messages: currentChat.messages,
        isLoading,
        error,
        sendMessage,
        currentTopic: currentChat.topic,
        initializeNewChat,
        chats,
        currentChatIndex
    };
}