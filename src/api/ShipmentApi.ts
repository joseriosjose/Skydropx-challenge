import axiosConfig from "config/AxiosConfig"
import { ShipmentBodyReq } from "interfaces/ShipmentInterface"
import { ShipmentResponse } from "interfaces/ShipmentResponseInterface";


export const createShipment = async (Shipmentbody: ShipmentBodyReq) => {
    const { data } = await axiosConfig.post<ShipmentResponse>('/shipments', Shipmentbody);
    return data.included?.filter(({ type }) => type === "rates")
}

export const createLabel = async (rate_id: number) => {
    const { data } = await axiosConfig.post('/labels', { rate_id: rate_id, label_format: "pdf" });
    return data
}