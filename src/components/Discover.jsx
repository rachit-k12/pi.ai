import React from 'react';
import { useTopic } from "../context/TopicContext.jsx";
import { DiscoverCard } from './DiscoverCard';
import { DiscoverHistory } from "./DiscoverHistory.jsx";

export function Discover() {
    const { setTopic } = useTopic();
    const name = localStorage.getItem("name");
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
            title: "5 steps to gratitude",
            imageSrc: "https://pi.ai/_next/image?url=https%3A%2F%2Fpi.ai%2Fpublic%2Fmedia%2Fdiscover%2Fimages%2FaE8bDtNb4B86kb9y5T92P.png&w=1920&q=100",
            onClick: () => setTopic("5 steps to gratitude"),
            imageRight:true,
            fullWidth: true
        },
        {
            title: "Just vent",
            imageSrc: "https://pi.ai/_next/image?url=https%3A%2F%2Fpi.ai%2Fpublic%2Fmedia%2Fdiscover%2Fimages%2Fventing.jpg&w=640&q=100",
            onClick: () => setTopic("Just vent"),
            fullWidth: true
        },
        {
            title: "Write me a poem, Pi",
            imageSrc: "https://pi.ai/_next/image?url=https%3A%2F%2Fpi.ai%2Fpublic%2Fmedia%2Fdiscover%2Fimages%2Fqoo9HDCEMc99xQfxNwy6Y.png&w=256&q=100",
            onClick: () => setTopic("Write me a poem, Pi"),
        },
        {
            title: "Build a first-aid kit",
            imageSrc: "https://pi.ai/_next/image?url=https%3A%2F%2Fpi.ai%2Fpublic%2Fmedia%2Fdiscover%2Fimages%2FoR8BE84c3vFQ9FP8oBznY.png&w=3840&q=100",
            onClick: () => setTopic("Build a first-aid kit"),
        },
        {
            title: "Better time management",
            imageSrc: "https://pi.ai/_next/image?url=https%3A%2F%2Fpi.ai%2Fpublic%2Fmedia%2Fdiscover%2Fimages%2Fclock.webp&w=1920&q=100",
            onClick: () => setTopic("Better time management"),
            imageRight:true,
            fullWidth: true
        },
        {
            title: "Five fascinating facts...",
            imageSrc: "https://pi.ai/_next/image?url=https%3A%2F%2Fpi.ai%2Fpublic%2Fmedia%2Fdiscover%2Fimages%2Fstars.webp&w=1920&q=100",
            onClick: () => setTopic("Five fascinating facts..."),
            fullWidth: true
        },
        {
            title: "Role play your next job interview with Pi",
            imageSrc: "https://pi.ai/_next/image?url=https%3A%2F%2Fpi.ai%2Fpublic%2Fmedia%2Fdiscover%2Fimages%2FhZD4Bn1HNhocpBcFF4NZy.png&w=1920&q=100",
            onClick: () => setTopic("Role play your next job interview with Pi"),
        },
        {
            title: "Write the perfect email",
            imageSrc: "https://pi.ai/_next/image?url=https%3A%2F%2Fpi.ai%2Fpublic%2Fmedia%2Fdiscover%2Fimages%2Fsheet.webp&w=1920&q=100",
            onClick: () => setTopic("Write the perfect email"),
        },
    ];

    const getGreeting = () => {
        const hour = new Date().getHours();
        console.log(hour,name);
        if (hour < 12 && hour > 4) return `Good morning, ${name ? name :"User"}`;
        if (hour < 17 && hour >= 12) return `Good afternoon, ${name ? name :"User"}`;
        return `Good evening, ${name ? name :"User"}`;
    };

    return (
        <div className="p-4 md:p-6 space-y-4 md:space-y-6">
            <h2 className="text-2xl text-primary-500">{getGreeting()}</h2>

            <DiscoverHistory />

            <div className="grid gap-3 md:gap-4 md:grid-cols-2">
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