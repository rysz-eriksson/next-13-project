import { executeGraphql } from "./graphqlRequest";
import { type PaginationSettings } from "@/app/ui/utils";
import { ProductGetByIdDocument, type ProductItemFragment, ProductsGetByCategorySlugDocument, ProductsGetListDocument, ProductsCountDocument, ProductsPerCategoryCountDocument, ProductsGetFilteredListDocument } from "@/gql/graphql";

export const getProductsList = async (paginationSettings?: PaginationSettings) => {
    const graphqlResponse = await executeGraphql(ProductsGetListDocument, {...paginationSettings});
    return graphqlResponse.products;
};

export const getProductsFilteredList = async (searchValue: string) => {
    const graphqlResponse = await executeGraphql(ProductsGetFilteredListDocument, { search: searchValue });
    return graphqlResponse.products;
};

export const getProductsListByCategory = async (category: string, paginationSettings: PaginationSettings) => {
    const graphqlResponse = await executeGraphql(ProductsGetByCategorySlugDocument, 
        {
            slug: category,
            ...paginationSettings
        });

    return graphqlResponse.categories[0]?.products
}

export const getProductsCount = async () => {
    const graphqlResponse = await executeGraphql(ProductsCountDocument);
    return graphqlResponse.productsConnection.aggregate.count
}

export const getProductsPerCategoryCount = async (category: string) => {
    const graphqlResponse = await executeGraphql(ProductsPerCategoryCountDocument, { slug: category});
    return graphqlResponse.productsConnection.aggregate.count
}

export const getProductById = async (id: ProductItemFragment["id"]) => {
    const graphqlResponse = await executeGraphql(ProductGetByIdDocument, {id});
    return graphqlResponse.product
}