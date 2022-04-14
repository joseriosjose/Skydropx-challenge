import { SAVE_DELIVERY, SAVE_DIMENSIONS, SAVE_DIRECTIONS } from "_redux/types/Shipments.types";

const defaultState = {
    informationParcel: {
        zipFrom: '',
        zipTo: '',
        weight: '',
        height: '',
        width: '',
        length: '',
    },
    selectedDelivery: ''
}

type ActionType = {
    payload: Object | string;
    type: typeof SAVE_DELIVERY | typeof SAVE_DIMENSIONS | typeof SAVE_DIRECTIONS
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

        default:
            return state
    }

}