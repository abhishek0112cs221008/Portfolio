export const cameraPositions = {
    entrance: {
        position: [0, 3, 10] as [number, number, number],
        lookAt: [0, 1.5, 5] as [number, number, number],
        name: "Entrance"
    },
    mainRoom: {
        position: [0, 4, 8] as [number, number, number],
        lookAt: [0, 1.5, 0] as [number, number, number],
        name: "Main Room"
    },
    office: {
        position: [8, 3, 2] as [number, number, number],
        lookAt: [5, 1.5, 0] as [number, number, number],
        name: "Office"
    },
    bedroom: {
        position: [-8, 3, 2] as [number, number, number],
        lookAt: [-5, 1.5, 0] as [number, number, number],
        name: "Bedroom"
    },
    terrace: {
        position: [0, 5, -10] as [number, number, number],
        lookAt: [0, 2, -6] as [number, number, number],
        name: "Terrace"
    }
};

export type RoomName = keyof typeof cameraPositions;
