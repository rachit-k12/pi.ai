import React from 'react';
import { User, History, Volume2, Smile, Share, Shield, FileText } from 'lucide-react';


export function ProfileIcons({ icon, className }) {
    const icons = {
        user: User,
        history: History,
        voice: Volume2,
        smile: Smile,
        share: Share,
        shield: Shield,
        file: FileText,
    };

    const Icon = icons[icon] || User;
    return <Icon className={className} />;
}