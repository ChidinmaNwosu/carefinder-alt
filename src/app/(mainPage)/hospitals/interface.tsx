
export interface Hospital{
    id: number;
    name :string;
    type:{name:string};
    address: string;
    phone_number: string;
    location: string;
    state : {name: string;};
}

export interface ApiResponse {
    data:Hospital[];
}