export interface ShipmentBody {
    zipFrom: string;
    zipTo: string;
    weight: string;
    height: string;
    width: string;
    length: string;
}


export interface Address {
    province: string,
    city: string,
    name: string,
    zip: string,
    country: string,
    address1: string
    company: string,
    address2: string,
    phone: string,
    email: string
}
export interface Parcel {
    weight: number,
    distance_unit: string,
    mass_unit: string,
    height: number,
    width: number,
    length: number
}

export interface ShipmentBodyReq {
    address_from: Address;
    address_to: Address;
    parcels: Parcel[];
    consignment_note_class_code: string;
    consignment_note_packaging_code: string;
}
