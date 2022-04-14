import { SAVE_DIRECTIONS, SAVE_DIMENSIONS } from '../types/Shipments.types';


export const saveDirections = ({ zipFrom, zipTo }: { zipFrom: string, zipTo: string }) => ({
    type: SAVE_DIRECTIONS,
    payload: {
        zipFrom, zipTo
    }
})


export const saveDimensions = ({ weight, height, width, length }: { weight: string, height: string, width: string, length: string }) => ({
    type: SAVE_DIMENSIONS,
    payload: {
        weight, height, width, length
    }
})

export const saveDelivery = (id: string) => ({
    type: SAVE_DIMENSIONS,
    payload: id
})