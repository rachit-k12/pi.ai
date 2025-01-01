import React, { useState, useEffect } from "react";
import { PiLogo } from "./ui/PiLogo";
import { Button } from "./ui/Button";

export function Account() {
    const [copied, setCopied] = useState(false);
    const [name, setName] = useState(localStorage.getItem("name") || "User");
    const [isEditing, setIsEditing] = useState(false);
    const [inputName, setInputName] = useState("");
    const [isSending, setIsSending] = useState(false); // For button loading state

    useEffect(() => {
        localStorage.setItem("name", name);
    }, [name]);

    const handleCopy = () => {
        navigator.clipboard.writeText(piLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleEditName = () => {
        setIsEditing(true);
        setInputName(name);
    };

    const handleSubmit = () => {
        if (inputName.trim()) {
            setIsSending(true);
            setTimeout(() => {
                setName(inputName.trim());
                setIsEditing(false);
                setIsSending(false);
            }, 500); // Simulate a delay for UX
        }
    };

    return (
        <div className="flex flex-col justify-center items-center mx-auto px-4 md:px-6 pt-20 md:pt-32 text-center">
            <PiLogo className="mx-auto w-24 md:w-32 mb-6" />
            <h1 className="text-4xl md:text-6xl font-semibold text-primary-500 mb-4 md:mb-6">
                Welcome to your account, {name}!
            </h1>
            <p className="text-lg md:text-xl font-sans text-primary-500 mb-8">
                Here, you can manage your profile and preferences with ease.
            </p>
            {isEditing ? (
                <div className="mt-10 w-full">
                    <div className="flex items-center mx-auto md:w-[35vw] max-w-[600px] bg-white rounded-full shadow-lg overflow-hidden hover:border hover:border-[#c9b597] px-2">
                        <input
                            type="text"
                            placeholder="Your first name"
                            className="flex-grow px-5 font-normal py-3 text-[24px] h-auto text-black placeholder-[#c9b597] focus:outline-none placeholder:tracking-wide placeholder:text-[24px]"
                            value={inputName}
                            onChange={(e) => setInputName(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                        />
                        <button
                            className={`flex items-center justify-center w-10 h-10 rounded-full
                              ${inputName.trim() && !isSending ? "bg-green-600" : "bg-[#FAF3EA]"} 
                              ${inputName.trim() && !isSending ? "text-white" : "text-[#6B6255]"}
                              hover:${inputName.trim() && !isSending ? "bg-[#8d6d42]" : ""} 
                              disabled:opacity-50`}
                            aria-label="Send"
                            onClick={handleSubmit}
                            disabled={!inputName.trim() || isSending}
                        >
                            {isSending ? (
                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16" width="12" height="16" fill="currentColor">
                                    <path fillRule="evenodd" d="M.852 7.648a1.2 1.2 0 0 1 0-1.696l4.8-4.8a1.2 1.2 0 0 1 1.696 0l4.8 4.8a1.2 1.2 0 1 1-1.697 1.696L7.7 4.897V14a1.2 1.2 0 0 1-2.4 0V4.897L2.548 7.648a1.2 1.2 0 0 1-1.696 0Z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            ) : (
                <Button onClick={handleEditName}>Change Name</Button>
            )}
        </div>
    );
}
