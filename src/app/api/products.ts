import type { ProductItem } from "../ui/types";

type ProductResponseItem = {
    id: string;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

const mapProductResponseToProductItem = (productResponse: ProductResponseItem): ProductItem => {
    return {
        id: productResponse.id,
        name: productResponse.title,
        category: productResponse.category,
        price: productResponse.price,
        coverImage: {
            src: productResponse.image,
            alt: productResponse.title,
        },
        description: productResponse.description,
    }
}

export const getProducts = async (paginarion?: {size: number, offset: number}) => {
    const res = await fetch(`https://naszsklep-api.vercel.app/api/products?take=${paginarion?.size}&offset=${paginarion?.offset}`);
    const productsResponse = (await res.json() as ProductResponseItem[]);
    return productsResponse.map(mapProductResponseToProductItem);
}

export const getProductById = async (id: ProductResponseItem["id"]) => {
    const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
    const productResponse = (await res.json() as ProductResponseItem);
    return mapProductResponseToProductItem(productResponse);
}

// https://naszsklep-api.vercel.app/api/products?take=20&offset=0
// https://naszsklep-api.vercel.app/api/products/…ID…