import React, { useState } from "react";
import { PiLogo } from "./ui/PiLogo";
import { Button } from "./ui/Button";

export function Share() {
    const [copied, setCopied] = useState(false);
    const piLink = "https://pi.ai/";

    const handleCopy = () => {
        navigator.clipboard.writeText(piLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col justify-center items-center mx-auto px-4 md:px-6 pt-20 md:pt-32 text-center">
            <PiLogo className="mx-auto w-24 md:w-32 mb-6" />
            <h1 className="text-4xl md:text-7xl font-semibold text-primary-500 mb-4 md:mb-6">
                Spread the word
            </h1>
            <p className="text-lg md:text-xl font-sans text-primary-500 mb-8">
                Share a link to Pi with a friend...
            </p>
            <Button onClick={handleCopy}>
                {copied ? "Copied" : "Copy Link"}
            </Button>
        </div>
    );
}