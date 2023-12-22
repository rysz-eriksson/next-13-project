import { executeGraphql } from "./graphqlRequest";
import { CartAddItemDocument, CartChangeItemQuantityDocument, CartCreateDocument, CartGetByIdDocument } from "@/gql/graphql";

export const getCartById = async (cartId: string) => {
    const graphqlResponse = await executeGraphql(CartGetByIdDocument, { id: cartId });
    return graphqlResponse.order
}

export const createCart = async () => {
    const graphqlResponse = await executeGraphql(CartCreateDocument);
    return graphqlResponse.createOrder

}

export const addItemToCart = async (cartId: string, productId: string, totalPrice: number) => {
    const graphqlResponse = await executeGraphql(CartAddItemDocument, { cartId, productId, total: totalPrice });
    return graphqlResponse.createOrderItem
}

export const changeCartItemQuantity = async (orderId: string, quantity: number) => {
    const graphqlResponse = await executeGraphql(CartChangeItemQuantityDocument, { itemId: orderId, quantity });
    return graphqlResponse.updateOrderItem
}