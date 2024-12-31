import React from 'react';


export const DiscoverCard= ({ title, imageSrc, onClick, fullWidth , imageRight}) => {
    return (
        <div
            onClick={onClick}
            className={`relative bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden group ${fullWidth ? 'col-span-full' : ''}`}
        >
            <img
                src={imageSrc}
                alt={title}
                className={`w-full ${fullWidth ? 'h-72' : 'h-40'} object-cover ${imageRight ? 'w-36 h-36 m-3 rounded-2xl z-10 relative' : ''}`}
            />
            <div className={`absolute inset-0 ${imageRight ? 'bg-[#FAF3EA]' : 'bg-gradient-to-t from-black/60 to-transparent'}`}>
                <div className="absolute bottom-4 left-4">
                    <h3 className={`text-xl font-medium ${imageRight ? 'text-black' : 'text-white'}`}>{title}</h3>
                </div>
            </div>
        </div>
    );
};

