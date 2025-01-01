import {useNavigate} from "react-router-dom";
import {PiLogo} from "./ui/PiLogo.jsx";
import React from "react";

export function TextToSpeech(){
    const navigate = useNavigate();
    return(
        <div className="flex flex-col justify-center items-center mx-auto px-4 md:px-6 pt-20 md:pt-32 text-center">
            <PiLogo className="mx-auto w-24 md:w-32 mb-6"/>
            <h1 className="text-4xl md:text-7xl font-semibold text-primary-500 mb-4 md:mb-6">Under Progress</h1><p
            className="text-xl font-sans text-center text-[#0D3C26]">See you Soon.</p>
            <button onClick={() => navigate('/talk')}
                    className="flex items-center justify-center whitespace-nowrap  h-12 rounded-lg px-8 text-white bg-[#0D3C26] hover:bg-emerald-950  mx-auto mt-14"
                    type="button">Try Pi
            </button>
        </div>
    )
}