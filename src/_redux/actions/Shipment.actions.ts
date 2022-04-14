import { Attributes } from 'interfaces/LabelResponseInterface';
import { Included } from 'interfaces/ShipmentResponseInterface';
import {
    SAVE_DIRECTIONS, SAVE_DIMENSIONS,
    SAVE_RATES, SET_LOADING, SAVE_LABEL, SAVE_DELIVERY, SET_ERROR, RESET_FORM
} from '../types/Shipments.types';


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
    type: SAVE_DELIVERY,
    payload: id
})

export const saveRates = (rates: Included[]) => ({
    type: SAVE_RATES,
    payload: rates
})
export const setLoading = (loading: boolean) => ({
    type: SET_LOADING,
    payload: loading
})
export const saveLabel = (label: Attributes) => ({
    type: SAVE_LABEL,
    payload: label
})
export const setError = (error: string) => ({
    type: SET_ERROR,
    payload: error
})
export const resetForm = () => ({
    type: RESET_FORM,
})