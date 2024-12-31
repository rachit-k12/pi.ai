const API_URL = 'http://localhost:3000';

export const sendChatMessage = async (messages, topic) => {
    const response = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            messages,
            topic,
            isInitialMessage: messages.length === 0 // Tell backend if this is the first message
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to send message');
    }

    return response.json();
};