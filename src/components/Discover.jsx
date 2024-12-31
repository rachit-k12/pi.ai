import React from 'react';
import { useTopic } from "../context/TopicContext.jsx";
import { DiscoverCard } from './DiscoverCard';
import { DiscoverHistory} from "./DiscoverHistory.jsx";

export function Discover(){
    const { setTopic } = useTopic();

    const discoverItems = [
        {
            title: "How to deal with criticism",
            imageSrc: "https://pi.ai/_next/image?url=https%3A%2F%2Fpi.ai%2Fpublic%2Fmedia%2Fdiscover%2Fimages%2Foffice.webp&w=384&q=100",
            onClick: () => setTopic("How to deal with criticism")
        },
        {
            title: "Random fact generator",
            imageSrc: "https://pi.ai/_next/image?url=https%3A%2F%2Fpi.ai%2Fpublic%2Fmedia%2Fdiscover%2Fimages%2FrP8hfhnVGGiQ2BrMErxY8.png&w=256&q=100",
            onClick: () => setTopic("Random fact generator")
        },
        {
            title: "Write me a poem, Pi",
            imageSrc: "https://pi.ai/_next/image?url=https%3A%2F%2Fpi.ai%2Fpublic%2Fmedia%2Fdiscover%2Fimages%2Fqoo9HDCEMc99xQfxNwy6Y.png&w=256&q=100",
            onClick: () => setTopic("Write me a poem, Pi"),
            fullWidth: true,
            imageRight: true
        },
        {
            title: "Just vent",
            imageSrc: "https://pi.ai/_next/image?url=https%3A%2F%2Fpi.ai%2Fpublic%2Fmedia%2Fdiscover%2Fimages%2Fventing.jpg&w=640&q=100",
            onClick: () => setTopic("Just vent"),
            fullWidth: true
        }
    ];

        const getGreeting = () => {
            const hour = new Date().getHours();
            if (hour < 12) return 'Good morning';
            if (hour < 17) return 'Good afternoon';
            return 'Good evening';
        };


    return (
        <div className="p-6 space-y-6 bg-[#f7efe3]">
            <h2 className="text-4xl text-[#0e4435]">{getGreeting}</h2>

            <DiscoverHistory />

            <div className="grid gap-4 md:grid-cols-2">
                {discoverItems.map((item, index) => (
                    <DiscoverCard
                        key={index}
                        title={item.title}
                        imageSrc={item.imageSrc}
                        onClick={item.onClick}
                        fullWidth={item.fullWidth}
                        imageRight={item.imageRight}
                    />
                ))}
            </div>
        </div>
    );
}



