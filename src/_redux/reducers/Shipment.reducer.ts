import { Included } from "interfaces/ShipmentResponseInterface";
import { Attributes } from "interfaces/LabelResponseInterface";
import {
    SAVE_DELIVERY, SAVE_DIMENSIONS, SAVE_DIRECTIONS,
    SAVE_RATES, SET_LOADING, SAVE_LABEL, SET_ERROR, RESET_FORM
} from "_redux/types/Shipments.types";


const defaultState = {
    informationParcel: {
        zipFrom: '',
        zipTo: '',
        weight: '',
        height: '',
        width: '',
        length: '',
    },
    selectedDelivery: '',
    rates: [] as Included[],
    loading: false,
    label: {} as Attributes,
    error: ''
}

type ActionType = {
    payload: Object | string | boolean | null;
    type: typeof SAVE_DELIVERY | typeof SAVE_DIMENSIONS | typeof SAVE_DIRECTIONS
    | typeof SAVE_RATES | typeof SET_LOADING | typeof SAVE_LABEL | typeof SET_ERROR | typeof RESET_FORM
}

export default function Shipment(state = defaultState, { payload, type }: ActionType) {

    switch (type) {
        case SAVE_DIRECTIONS: case SAVE_DIMENSIONS:
            return {
                ...state, informationParcel: {
                    ...state.informationParcel,
                    ...payload as Object
                }
            }
        case SAVE_DELIVERY:
            return {
                ...state, selectedDelivery: payload as string
            }
        case SAVE_RATES:
            return {
                ...state, rates: payload as Included[],
            }
        case SET_LOADING:
            return {
                ...state, loading: payload as boolean,
            }
        case SAVE_LABEL:
            return {
                ...state, label: payload as Attributes,
            }
        case SET_ERROR:
            return {
                ...state, error: payload as string,
            }
        case RESET_FORM:
            return defaultState

        default:
            return state
    }

}

export type ShipmentState = typeof defaultState