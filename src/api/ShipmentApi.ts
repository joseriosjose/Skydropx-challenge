import axiosConfig from "config/AxiosConfig"
import { ShipmentBody } from "interfaces/ShipmentInterface"


export const createShipment = async (Shipmentbody: ShipmentBody) => {
    const { data } = await axiosConfig.post('/shipments', Shipmentbody);
    return data
}

export const createLabel = async (rate_id: number) => {
    const { data } = await axiosConfig.post('/labels', { rate_id: rate_id, label_format: "pdf" });
    return data
}