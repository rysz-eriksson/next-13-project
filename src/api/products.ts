import type { ProductItem } from "../app/ui/types";
import { ProductsGetListDocument, type TypedDocumentString } from "@/gql/graphql";
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

const executeGraphql = async <TResult, TVariables>(query: TypedDocumentString<TResult, TVariables>, variables: TVariables): Promise<TResult> => {
    if (!process.env.GRAPHQL_URL) {
        throw new Error("GRAPHQL_URL is not defined");
    }
    const res = await fetch(process.env.GRAPHQL_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });
    
    type GraphQlResponse<T> =
        | {
            data: T;
            errors?: undefined;
        }
        | {
            data?: undefined;
            errors: { message: string }[];
        };
    
        const graphqlResponse = (await res.json()) as GraphQlResponse<TResult>;
        if (graphqlResponse.errors) {
            throw new Error(`GraphQl Error`, {
                cause: graphqlResponse.errors,
            });
        }

        return graphqlResponse.data;
}

export const getProductsList = async (): Promise<ProductItem[]> => {
    const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});

    return graphqlResponse.products.map((product) => ({
        id: product.id,
        name: product.name,
        category: product.categories[0]?.name || "",
        price: product.price,
        coverImage: product.images[0]?.url ? {
            src: product.images[0]?.url,
            alt: product.name,
        } : undefined,
        description: product.description,
    }));
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