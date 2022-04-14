

export interface ShipmentResponse {
    data: ShipmentData;
    included: Included[];
}

export interface ShipmentData {
    id: string;
    type: string;
    attributes: DataAttributes;
    relationships: Relationships;
}

export interface DataAttributes {
    status: string;
    created_at: Date;
    updated_at: Date;
}

export interface Relationships {
    parcels: Labels;
    rates: Labels;
    address_to: Address;
    address_from: Address;
    labels: Labels;
    consignment_note_product_class: ConsignmentNoteP;
    consignment_note_packaging: ConsignmentNoteP;
}

export interface Address {
    data: DAT;
}

export interface DAT {
    id: string;
    type: Type;
}

export enum Type {
    Addresses = "addresses",
    Parcels = "parcels",
    Rates = "rates",
}

export interface ConsignmentNoteP {
    data: ConsignmentNotePackagingData;
}

export interface ConsignmentNotePackagingData {
    id: number;
    code: string;
    name: string;
    created_at: Date;
    updated_at: Date;
    subcategory_id?: number;
}

export interface Labels {
    data: DAT[];
}

export interface Included {
    id: string;
    type: Type;
    attributes: IncludedAttributes;
}

export interface IncludedAttributes {
    length?: string;
    height?: string;
    width?: string;
    weight?: string;
    mass_unit?: string;
    distance_unit?: string;
    created_at?: Date;
    updated_at?: Date;
    amount_local?: string;
    currency_local?: string;
    provider?: string;
    service_level_name?: string;
    service_level_code?: string;
    service_level_terms?: null;
    days?: number;
    duration_terms?: null;
    zone?: null;
    arrives_by?: null;
    out_of_area?: boolean;
    out_of_area_pricing?: string;
    total_pricing?: string;
    is_ocurre?: boolean;
    name?: string;
    company?: string;
    address1?: string;
    address2?: string;
    city?: string;
    province?: string;
    zip?: string;
    country?: string;
    phone?: string;
    email?: string;
    reference?: null | string;
    province_code?: string;
    contents?: null | string;
}
