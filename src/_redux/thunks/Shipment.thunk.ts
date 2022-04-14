import { createShipment } from "api/ShipmentApi"
import { ShipmentBodyReq } from "interfaces/ShipmentInterface"
import { saveRates } from "_redux/actions/Shipment.actions";

export const getRates = (shipmentBody: ShipmentBodyReq) => async (dispatch: Function) => {
    const rates = await createShipment(shipmentBody);
    dispatch(saveRates(rates));
}