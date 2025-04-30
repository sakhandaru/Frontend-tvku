// /app/tv-programs/ProgramCard.tsx
import React from 'react';

interface Props {
    title: string;
    image: string;
    description: string;
    onHover: () => void;
}

export default function ProgramCard({ title, image, description, onHover }: Props) {
    return (
        <div
            className="min-w-[250px] h-[140px] rounded-xl bg-cover bg-center relative cursor-pointer overflow-hidden transition-transform hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
            onMouseEnter={onHover}
        >
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-3">
                <p className="text-white text-sm font-semibold">{title}</p>
            </div>
        </div>
    );
}
