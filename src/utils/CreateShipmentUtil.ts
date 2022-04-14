import { ShipmentBody, ShipmentBodyReq } from "interfaces/ShipmentInterface";

export const createShipment = ({ weight, height, width, length, zipFrom, zipTo }: ShipmentBody) => {
    return {
        "address_from": {
            "province": "Ciudad de México",
            "city": "Azcapotzalco",
            "name": "Jose Fernando",
            "zip": zipFrom,
            "country": "MX",
            "address1": "Av. Principal #234",
            "company": "skydropx",
            "address2": "Centro",
            "phone": "5555555555",
            "email": "skydropx@email.com"
        },
        "parcels": [
            {
                "weight": Number(weight),
                "distance_unit": "CM",
                "mass_unit": "KG",
                "height": Number(height),
                "width": Number(width),
                "length": Number(length)
            }
        ],
        "address_to": {
            "province": "Jalisco",
            "city": "Guadalajara",
            "name": "Jorge Fernández",
            "zip": zipTo,
            "country": "MX",
            "address1": " Av. Lázaro Cárdenas #234",
            "company": "-",
            "address2": "Americana",
            "phone": "5555555555",
            "email": "ejemplo@skydropx.com",
            "reference": "Frente a tienda de abarro",
            "contents": "Hola"
        },
        "consignment_note_class_code": "53131600",
        "consignment_note_packaging_code": "1H1"
    } as ShipmentBodyReq
};