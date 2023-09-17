import type { ProductItem } from "../app/ui/types";
import { NUMBER_OF_PPRODUCTS } from "@/app/ui/constants";

const PRODUCTS_API_URL = "https://naszsklep-api.vercel.app/api/products";

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

export const getProducts = async (pagination?: {size: number, offset: number}) => {
    const res = await fetch(`${PRODUCTS_API_URL}?take=${pagination?.size}&offset=${pagination?.offset}`);
    const productsResponse = (await res.json() as ProductResponseItem[]);
    return productsResponse.map(mapProductResponseToProductItem);
}

export const getProductsCount = async () => {
    return NUMBER_OF_PPRODUCTS
    // const res = await fetch(`${PRODUCTS_API_URL}`);
    // const productsResponse = (await res.json() as ProductResponseItem[]);
    // return productsResponse.length;
}

export const getProductById = async (id: ProductResponseItem["id"]) => {
    const res = await fetch(`${PRODUCTS_API_URL}/${id}`);
    const productResponse = (await res.json() as ProductResponseItem);
    return mapProductResponseToProductItem(productResponse);
}

// https://naszsklep-api.vercel.app/api/products?take=20&offset=0
// https://naszsklep-api.vercel.app/api/products/…ID…