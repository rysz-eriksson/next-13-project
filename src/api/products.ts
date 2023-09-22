import type { ProductItem } from "../app/ui/types";
import { executeGraphql } from "./graphqlRequest";
import { ProductsGetByCategorySlugDocument, ProductsGetListDocument } from "@/gql/graphql";
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

export const getProductsList = async () => {
    const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});
    return graphqlResponse.products
}

export const getProductsListByCategory = async (category: string) => {
    const graphqlResponse = await executeGraphql(ProductsGetByCategorySlugDocument, 
        {
            slug: category,
        });

    return graphqlResponse.categories[0]?.products
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