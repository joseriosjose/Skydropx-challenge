import { Included } from "interfaces/ShipmentResponseInterface";
import { SAVE_DELIVERY, SAVE_DIMENSIONS, SAVE_DIRECTIONS, SAVE_RATES, SET_LOADING } from "_redux/types/Shipments.types";

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
    loading: false
}

type ActionType = {
    payload: Object | string | boolean;
    type: typeof SAVE_DELIVERY | typeof SAVE_DIMENSIONS | typeof SAVE_DIRECTIONS | typeof SAVE_RATES | typeof SET_LOADING
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

        default:
            return state
    }

}

export type ShipmentState = typeof defaultState