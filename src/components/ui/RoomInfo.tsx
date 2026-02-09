import { motion, AnimatePresence } from 'framer-motion';
import { cameraPositions, type RoomName } from '../three/utils/cameraPositions';

interface RoomInfoProps {
    currentRoom: RoomName;
}

const roomDescriptions: Record<RoomName, string> = {
    entrance: "Welcome! Use the navigation menu to explore different rooms.",
    mainRoom: "Click on the project screens to learn more about my work.",
    office: "My skills and technologies I work with daily.",
    bedroom: "A little bit about me and my journey.",
    terrace: "Let's connect! Find my contact information here."
};

const RoomInfo = ({ currentRoom }: RoomInfoProps) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={currentRoom}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[60]"
            >
                <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-xl p-4">
                    <h3 className="text-white text-lg font-bold mb-1">
                        {cameraPositions[currentRoom].name}
                    </h3>
                    <p className="text-white/70 text-sm">
                        {roomDescriptions[currentRoom]}
                    </p>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default RoomInfo;
