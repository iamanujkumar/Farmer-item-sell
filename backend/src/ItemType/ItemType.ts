export type UserType = {
    _id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
};

export type ItemType = {
    _id: string;
    userId: string;
    itemName: string;
    description: string;
    number: string;
    category: string;
    quantity: number;
    city: string;
    state: string;
    price: number;
    imagesUrl: string[];
    rating: number;
    lastUpdated: Date;
};

export type ItemSearchResponse = {
    data: ItemType[];
    pagination: {
        total: number;
        page: number;
        pages: number;
    };
};
