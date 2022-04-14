import * as ShipmentApi from "api/ShipmentApi"
import { ShipmentBodyReq } from "interfaces/ShipmentInterface"
import { saveLabel, saveRates } from "_redux/actions/Shipment.actions";
import { setLoading, setError } from '../actions/Shipment.actions';

export const getRates = (shipmentBody: ShipmentBodyReq) => async (dispatch: Function) => {
    dispatch(setLoading(true));
    const rates = await ShipmentApi.createShipmentApi(shipmentBody);
    dispatch(saveRates(rates));
    dispatch(setLoading(false));
}

export const getLabel = (id: number) => async (dispatch: Function) => {
    dispatch(setLoading(true));
    try {
        const attributes = await ShipmentApi.createLabel(id);
        const { label_url } = attributes
        if (!label_url) {
            const { error_message } = attributes
            const [error = {
                message: ''
            }] = error_message || []
            throw Error(error.message)
        }
        dispatch(saveLabel(attributes));
    } catch (error: any) {
        dispatch(setError(error.response?.data.message as string || error.message as string || 'Ocurrio un error al generar su guia'));
    }

    dispatch(setLoading(false));
}