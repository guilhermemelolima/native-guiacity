export interface Place {
    next_page_token?: string;
    place_id: string;
    name: string;
    reference: string;
    geometry: {
        location: {
            lat: number;
            lng: number;
        };
    };
    icon: string;
    icon_background_color: string;
    icon_mask_base_uri: string;
    photos: {
        height: number;
        html_attributions: string[];
        photo_reference: string;
        width: number;
    }[];
    plus_code: {
        compound_code: string;
        global_code: string;
    };
    rating: number;
    user_ratings_total: number;
    scope: string;
    types: string[];
    vicinity: string;
}