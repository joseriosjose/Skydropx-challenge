import * as ShipmentApi from "api/ShipmentApi"
import { ShipmentBodyReq } from "interfaces/ShipmentInterface"
import { saveRates } from "_redux/actions/Shipment.actions";
import { setLoading } from '../actions/Shipment.actions';

export const getRates = (shipmentBody: ShipmentBodyReq) => async (dispatch: Function) => {
    dispatch(setLoading(true));
    const rates = await ShipmentApi.createShipmentApi(shipmentBody);
    dispatch(saveRates(rates));
    dispatch(setLoading(false));
}