import React from 'react';

export const DiscoverCard = ({ title, imageSrc, onClick, fullWidth, imageRight }) => {
    if (imageRight) {
        return (
            <div
                onClick={onClick}
                className={`flex items-end justify-between gap-2 overflow-hidden rounded-3xl border-2 border-white p-2 cursor-pointer relative bg-white md:rounded-3xl shadow-sm hover:shadow-md transition-shadow group ${fullWidth ? 'col-span-full' : ''}`}
            >
                <h3 className="text-lg md:text-md font-medium text-black">{title}</h3>
                <div className="relative h-[180px] w-[400px] overflow-hidden rounded-3xl">
                    <img
                        src={imageSrc}
                        alt={`Card header for ${title}`}
                        loading="lazy"
                        decoding="async"
                        className="object-cover"
                        style={{ position: 'absolute', height: '100%', width: '100%' }}
                    />
                </div>
            </div>
        );
    }

    return (
        <div
            onClick={onClick}
            className={`relative bg-white rounded-2xl md:rounded-3xl shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden group ${fullWidth ? 'col-span-full' : ''}`}
        >
            <img
                src={imageSrc}
                alt={title}
                className={`w-full ${fullWidth ? 'h-48 md:h-72' : 'h-32 md:h-40'} object-cover`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4">
                    <h3 className="text-lg md:text-md font-medium text-white">{title}</h3>
                </div>
            </div>
        </div>
    );
};
