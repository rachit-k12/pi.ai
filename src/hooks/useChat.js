import { useState, useCallback, useEffect } from 'react';
import { sendChatMessage } from '../api/chatApi';
import { getStoredChats, storeChats } from '../utils/storage';

export function useChat(topic) {
    const [chats, setChats] = useState([]);
    const [currentChatIndex, setCurrentChatIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Initialize or find existing chat for the current topic
    useEffect(() => {
        const storedChats = getStoredChats();
        if (storedChats && storedChats.length > 0) {
            setChats(storedChats);
            // Find chat with current topic or create new one
            const existingChatIndex = storedChats.findIndex(chat => chat.topic === topic);
            if (existingChatIndex >= 0) {
                setCurrentChatIndex(existingChatIndex);
            } else {
                initializeNewChat(topic);
            }
        } else {
            initializeNewChat(topic);
        }
    }, [topic]); // Re-run when topic changes

    const initializeNewChat = async (chatTopic) => {
        setIsLoading(true);
        setError(null);
        try {
            const { response } = await sendChatMessage({
                messages: [],
                topic: chatTopic
            });

            const newChat = {
                id: Date.now(),
                topic: chatTopic,
                messages: [{ role: 'assistant', content: response }],
                createdAt: new Date().toISOString()
            };

            setChats(prevChats => {
                const updatedChats = [...prevChats, newChat];
                storeChats(updatedChats);
                return updatedChats;
            });

            setCurrentChatIndex(prevChats => prevChats.length || 0);

        } catch (error) {
            setError(error instanceof Error ? error.message : 'An error occurred');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const sendMessage = useCallback(async (content) => {
        setIsLoading(true);
        setError(null);

        const currentChat = chats[currentChatIndex] || { messages: [], topic };
        const newMessage = { role: 'user', content };
        const currentMessages = [...currentChat.messages, newMessage];

        try {
            const { response } = await sendChatMessage({
                messages: currentMessages,
                topic: currentChat.topic
            });

            const assistantMessage = { role: 'assistant', content: response };
            const updatedMessages = [...currentMessages, assistantMessage];

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
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }, [chats, currentChatIndex, topic]);

    // Get current chat or return empty chat if none exists
    const currentChat = chats[currentChatIndex] || { messages: [], topic };

    return {
        messages: currentChat.messages,
        sendMessage,
        currentTopic: currentChat.topic,
        isLoading,
        error,
        chats,
        currentChatIndex
    };
}