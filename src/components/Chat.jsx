import React, { useState } from "react";
import { useChat } from "../hooks/useChat";
import { MessageList } from "./MessageList";

export function Chat({ topic }) {
    const [prompt, setPrompt] = useState("");
    const { messages, isLoading, error, sendMessage } = useChat(topic);

    const handlePrompt = async () => {
        if (!prompt.trim() || isLoading) return;
        const message = prompt;
        setPrompt("");
        await sendMessage(message);
    };

    return (
        <div className="flex flex-col h-full bg-secondary">
            <h1 className="font-bold text-xl md:text-2xl lg:text-3xl leading-tight w-full  my-3 md:my-5 text-center font-sans">
                {topic || "Your Pi Here"}
            </h1>
            <div className="flex-1 overflow-y-auto">
                <MessageList messages={messages} scroll={true} />
                {error && (
                    <div className="text-red-500 text-center p-2">
                        {error}
                    </div>
                )}
            </div>

            <div className="pb-4 md:pb-6 mx-auto w-full max-w-3xl px-2 md:px-4">
                <div className="flex items-center mx-auto w-full bg-white rounded-full shadow-lg overflow-hidden border-1 hover:border-1 hover:border-[#c9b597] px-2">
                    <input
                        type="text"
                        placeholder="Talk with Pi"
                        className="flex-grow px-3 md:px-5 font-normal py-2 md:py-3 text-lg md:text-2xl h-auto text-black placeholder-secondary-500 focus:outline-none"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handlePrompt()}
                    />
                    <button
                        className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full
                            ${prompt.trim() && !isLoading ? 'bg-accent-green' : 'bg-secondary-200'} 
                            ${prompt.trim() && !isLoading ? 'text-white' : 'text-secondary-500'}
                            hover:${prompt.trim() && !isLoading ? 'bg-primary-400' : ''} 
                            disabled:opacity-50`}
                        aria-label="Send"
                        onClick={handlePrompt}
                        disabled={!prompt.trim() || isLoading}
                    >
                        {isLoading ? (
                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16" width="12" height="16"
                                 fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M.852 7.648a1.2 1.2 0 0 1 0-1.696l4.8-4.8a1.2 1.2 0 0 1 1.696 0l4.8 4.8a1.2 1.2 0 1 1-1.697 1.696L7.7 4.897V14a1.2 1.2 0 0 1-2.4 0V4.897L2.548 7.648a1.2 1.2 0 0 1-1.696 0Z"
                                      clipRule="evenodd"/>
                            </svg>
                        )}
                    </button>
                </div>
                <div
                    className="mx-auto text-center text-secondary-500 font-sans text-[10px] md:text-[12px] font-[500] mt-2 md:mt-4">
                    By using Pi, you agree to our{" "}
                    <a href="https://pi.ai/policy#terms" target="_blank" rel="noopener noreferrer"
                       className="text-accent-green underline">
                        Terms
                    </a>{" "}
                    and{" "}
                    <a href="https://pi.ai/policy#privacy" target="_blank" rel="noopener noreferrer"
                       className="text-accent-green underline">
                        Privacy Policy
                    </a>
                    .
                </div>
            </div>
        </div>
    );
}