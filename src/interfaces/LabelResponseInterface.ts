export interface LabelResponse {
    data: Data;
}

export interface Data {
    id: string;
    type: string;
    attributes: Attributes;
}

export interface Attributes {
    created_at: Date;
    updated_at: Date;
    status: null;
    tracking_number: string;
    tracking_status: null;
    label_url: string;
    tracking_url_provider: string;
    rate_id: number;
    error_message?: [{ message: string }];
}