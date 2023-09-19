export type ProductItem = {
    id: string;
    name: string;
    category: string;
    price: number;
    coverImage: {
        src: string;
        alt: string;
    };
    description: string;
}

export type PaginationSettings = {
    size: number;
    offset: number;
}