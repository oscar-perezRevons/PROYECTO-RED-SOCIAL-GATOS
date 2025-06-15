export interface Vote {
    id?: number;
    image_id: string;
    sub_id: string;
    created_at?: string;
    value: number;
    country_code: string;
    image_url: string;
}