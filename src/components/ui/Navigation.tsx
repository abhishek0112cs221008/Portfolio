import { motion } from 'framer-motion';
import { cameraPositions, type RoomName } from '../three/utils/cameraPositions';
import { Home, Briefcase, Code, User, Mail } from 'lucide-react';

interface NavigationProps {
    currentRoom: RoomName;
    onRoomChange: (room: RoomName) => void;
}

const roomIcons: Record<RoomName, any> = {
    entrance: Home,
    mainRoom: Briefcase,
    office: Code,
    bedroom: User,
    terrace: Mail
};

const Navigation = ({ currentRoom, onRoomChange }: NavigationProps) => {
    return (
        <div className="fixed top-6 left-6 z-[60] space-y-3">
            {(Object.keys(cameraPositions) as RoomName[]).map((room) => {
                const Icon = roomIcons[room];
                const isActive = currentRoom === room;

                return (
                    <motion.button
                        key={room}
                        onClick={() => onRoomChange(room)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
                            relative flex items-center gap-3 px-4 py-3 rounded-xl backdrop-blur-md border transition-all
                            ${isActive
                                ? 'bg-white/20 border-white/40 text-white'
                                : 'bg-black/20 border-white/10 text-white/70 hover:bg-white/10'
                            }
                        `}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="activeRoom"
                                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                        <Icon size={20} />
                        <span className="text-sm font-medium hidden md:block">
                            {cameraPositions[room].name}
                        </span>
                    </motion.button>
                );
            })}
        </div>
    );
};

export default Navigation;
