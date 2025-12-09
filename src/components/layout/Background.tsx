import { useEffect, useState } from 'react';

const Background = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        let frameId: number;
        const updateMousePosition = (e: MouseEvent) => {
            cancelAnimationFrame(frameId);
            frameId = requestAnimationFrame(() => {
                setMousePosition({ x: e.clientX, y: e.clientY });
            });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-background transition-colors duration-300 pointer-events-none">
            {/* 1. Subtle Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* 2. Animated Ambient Blobs */}
            <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob opacity-50 dark:opacity-20" />
            <div className="absolute top-0 -right-40 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000 opacity-50 dark:opacity-20" />
            <div className="absolute -bottom-40 left-20 w-96 h-96 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000 opacity-50 dark:opacity-20" />

            {/* 3. Mouse Spotlight Effect */}
            <div
                className="absolute inset-0 z-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-rgb), 0.15), transparent 40%)`,
                }}
            />

            {/* Optional: Noise Texture if desired for extra "film" look (omitted for cleaner look currently) */}
        </div>
    );
};

export default Background;
