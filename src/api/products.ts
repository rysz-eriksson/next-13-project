import { executeGraphql } from "./graphqlRequest";
import { ProductGetByIdDocument, type ProductItemFragment, ProductsGetByCategorySlugDocument, ProductsGetListDocument } from "@/gql/graphql";
import { NUMBER_OF_PPRODUCTS } from "@/app/ui/constants";

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

export const getProductById = async (id: ProductItemFragment["id"]) => {
    const graphqlResponse = await executeGraphql(ProductGetByIdDocument, {id});
    return graphqlResponse.product
}