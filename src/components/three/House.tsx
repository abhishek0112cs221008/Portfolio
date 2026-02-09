import Entrance from './rooms/Entrance';
import MainRoom from './rooms/MainRoom';
import Office from './rooms/Office';
import Bedroom from './rooms/Bedroom';
import Terrace from './rooms/Terrace';
import Door from './objects/Door';

interface HouseProps {
    onProjectClick?: (projectId: string) => void;
}

const House = ({ onProjectClick }: HouseProps) => {
    return (
        <group>
            {/* Main Ground Floor */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
                <planeGeometry args={[30, 30]} />
                <meshStandardMaterial color="#2a2a2a" />
            </mesh>

            {/* Rooms */}
            <Entrance />
            <MainRoom onProjectClick={onProjectClick} />
            <Office />
            <Bedroom />
            <Terrace />

            {/* Doors with Portfolio Labels */}
            {/* Entrance to Main Room - Projects */}
            <Door
                position={[0, 0, 3.5]}
                rotation={[0, 0, 0]}
                label="PROJECTS"
                sublabel="View My Work"
            />

            {/* Main Room to Office - Skills */}
            <Door
                position={[4, 0, 0]}
                rotation={[0, Math.PI / 2, 0]}
                label="SKILLS"
                sublabel="Technologies"
            />

            {/* Main Room to Bedroom - About */}
            <Door
                position={[-4, 0, 0]}
                rotation={[0, -Math.PI / 2, 0]}
                label="ABOUT ME"
                sublabel="My Story"
            />

            {/* Main Room to Terrace - Contact */}
            <Door
                position={[0, 0, -4]}
                rotation={[0, Math.PI, 0]}
                label="CONTACT"
                sublabel="Get In Touch"
            />

            {/* Connecting Hallways */}
            {/* Hallway from Entrance to Main Room */}
            <mesh position={[0, 0.05, 2.5]} receiveShadow>
                <boxGeometry args={[2, 0.1, 3]} />
                <meshStandardMaterial color="#9b8b7e" />
            </mesh>

            {/* Hallway from Main Room to Office */}
            <mesh position={[2.5, 0.05, 0]} receiveShadow>
                <boxGeometry args={[3, 0.1, 2]} />
                <meshStandardMaterial color="#9b8b7e" />
            </mesh>

            {/* Hallway from Main Room to Bedroom */}
            <mesh position={[-2.5, 0.05, 0]} receiveShadow>
                <boxGeometry args={[3, 0.1, 2]} />
                <meshStandardMaterial color="#9b8b7e" />
            </mesh>

            {/* Hallway from Main Room to Terrace */}
            <mesh position={[0, 0.05, -2.5]} receiveShadow>
                <boxGeometry args={[2, 0.1, 3]} />
                <meshStandardMaterial color="#9b8b7e" />
            </mesh>
        </group>
    );
};

export default House;
