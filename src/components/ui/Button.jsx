import React from 'react';

export function Button({
                           children,
                           variant = 'primary',
                           size = 'md',
                           className = '',
                           ...props
                       }) {
    const baseStyles = "flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-colors";

    const variants = {
        primary: "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700",
        secondary: "bg-secondary-200 text-primary-500 hover:bg-secondary-300 active:bg-secondary-400"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}