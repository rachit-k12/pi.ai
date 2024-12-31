import React from 'react';

export function NewChatButton({ onClick, isLoading }) {
    return (
        <button
            onClick={onClick}
            disabled={isLoading}
            className="flex items-center gap-2 px-4 py-2 bg-[#038247] text-white rounded-lg hover:bg-[#026d3b] transition-colors disabled:opacity-50"
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10 4V16M4 10H16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
            {isLoading ? 'Starting New Chat...' : 'New Chat'}
        </button>
    );
}