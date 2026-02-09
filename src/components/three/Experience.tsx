import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect } from 'react';
import { Environment } from '@react-three/drei';
import ScrollCamera from './ScrollCamera';
import House from './House';

interface ExperienceProps {
    onProjectClick?: (projectId: string) => void;
}

const Experience = ({ onProjectClick }: ExperienceProps) => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY / scrollHeight;
            setScrollProgress(Math.min(Math.max(scrolled, 0), 1));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed inset-0 z-50 bg-gradient-to-b from-sky-300 to-sky-100">
            <Canvas shadows camera={{ position: [0, 2, 15], fov: 75 }}>
                {/* Scroll-based Camera */}
                <ScrollCamera scrollProgress={scrollProgress} />

                <Suspense fallback={null}>
                    {/* Lighting */}
                    <ambientLight intensity={0.8} />
                    <directionalLight
                        position={[10, 15, 10]}
                        intensity={1.5}
                        castShadow
                        shadow-mapSize-width={2048}
                        shadow-mapSize-height={2048}
                    />
                    <directionalLight position={[-10, 10, -5]} intensity={0.8} />
                    <pointLight position={[0, 8, 0]} intensity={1.2} />
                    <pointLight position={[5, 5, 5]} intensity={0.6} />
                    <pointLight position={[-5, 5, -5]} intensity={0.6} />

                    {/* Environment */}
                    <Environment preset="city" />

                    {/* House */}
                    <House onProjectClick={onProjectClick} />
                </Suspense>
            </Canvas>

            {/* Scroll Progress Indicator */}
            <div className="fixed top-6 right-6 z-[60] bg-black/60 backdrop-blur-md border border-white/30 rounded-xl p-3 text-white">
                <div className="text-xs mb-2">Scroll to explore</div>
                <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-yellow-400 transition-all duration-300"
                        style={{ width: `${scrollProgress * 100}%` }}
                    />
                </div>
                <div className="text-xs mt-2 text-white/70">
                    {Math.round(scrollProgress * 100)}%
                </div>
            </div>

            {/* Section Labels */}
            <div className="fixed bottom-6 left-6 z-[60] bg-black/40 backdrop-blur-md border border-white/20 rounded-xl p-4 text-white text-sm">
                <h4 className="font-bold mb-2">
                    {scrollProgress < 0.15 && '🏡 Welcome'}
                    {scrollProgress >= 0.15 && scrollProgress < 0.3 && '🚶 Approaching'}
                    {scrollProgress >= 0.3 && scrollProgress < 0.5 && '🚪 Entrance Hall'}
                    {scrollProgress >= 0.5 && scrollProgress < 0.65 && '💼 Projects Room'}
                    {scrollProgress >= 0.65 && scrollProgress < 0.8 && '⚡ Skills Office'}
                    {scrollProgress >= 0.8 && scrollProgress < 0.9 && '👤 About Me'}
                    {scrollProgress >= 0.9 && '📧 Contact'}
                </h4>
                <p className="text-xs text-white/70">
                    {scrollProgress < 0.15 && 'Scroll down to enter my portfolio'}
                    {scrollProgress >= 0.15 && scrollProgress < 0.3 && 'Walking to the entrance...'}
                    {scrollProgress >= 0.3 && scrollProgress < 0.5 && 'Entering the house...'}
                    {scrollProgress >= 0.5 && scrollProgress < 0.65 && 'Explore my latest work'}
                    {scrollProgress >= 0.65 && scrollProgress < 0.8 && 'Technologies & expertise'}
                    {scrollProgress >= 0.8 && scrollProgress < 0.9 && 'Learn more about me'}
                    {scrollProgress >= 0.9 && 'Let\'s connect!'}
                </p>
            </div>
        </div>
    );
};

export default Experience;
