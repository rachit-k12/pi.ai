import React from 'react';
import FlowerSvg from './Flower.jsx';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();

    return (


        <div className='w-[100vw] h-[100vh] bg-[#FAF3EA] flex justify-center items-center p-4'>
            <div className='w-full md:w-1/2 h-full flex justify-center items-center flex-col'>
                <div className='w-3/4 h-[40%] md:h-[60%] flex justify-center items-center flex-col mb-6'>
                    <FlowerSvg className='w-3/4 md:w-1/2 h-auto'/>
                </div>
                <div className='flex justify-center items-center flex-col mb-9 text-center'>
                    <p className='text-[#0D3C26] text-2xl md:text-4xl tracking-tighter font-normal mb-1'>The first <span
                        className='italic'>emotionally</span></p>
                    <p className='text-[#0D3C26] text-2xl md:text-4xl tracking-tighter font-normal'><span
                        className='italic'>intelligent </span>AI.</p>
                </div>

                <button onClick={() => {
                    const storedMessages = localStorage.getItem('chatMessages');
                    if (storedMessages) {
                        navigate("/talk")
                    } else {

                        navigate("/onboarding")
                    }
                }}
                        className='bg-[#0D3C26] w-[350px] h-auto py-4 text-white text-lg md:text-xl font-medium mb-1 rounded-full font-sans my-5 mt-52'>Next
                </button>
            </div>
        </div>
    )
}

export default Welcome;