import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { ProfileIcons } from './ProfileIcons';



export function ProfileLink({ to, icon, label, external }) {
    return (
        <Link
            to={to}
            className="flex items-center justify-between text-primary-500 text-base md:text-lg group"
        >
            <div className="flex items-center gap-2 md:gap-3">
                <ProfileIcons icon={icon} className="w-5 h-5 md:w-6 md:h-6" />
                <span>{label}</span>
            </div>
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-secondary-500 group-hover:text-primary-500 transition-colors" />
        </Link>
    );
}