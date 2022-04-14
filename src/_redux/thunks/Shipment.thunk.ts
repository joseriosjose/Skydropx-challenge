import * as ShipmentApi from "api/ShipmentApi"
import { ShipmentBodyReq } from "interfaces/ShipmentInterface"
import { saveLabel, saveRates } from "_redux/actions/Shipment.actions";
import { setLoading } from '../actions/Shipment.actions';

export const getRates = (shipmentBody: ShipmentBodyReq) => async (dispatch: Function) => {
    dispatch(setLoading(true));
    const rates = await ShipmentApi.createShipmentApi(shipmentBody);
    dispatch(saveRates(rates));
    dispatch(setLoading(false));
}

export const getLabel = (id: number) => async (dispatch: Function) => {
    dispatch(setLoading(true));
    const response = await ShipmentApi.createLabel(id);
    dispatch(saveLabel(response));
    dispatch(setLoading(false));
}