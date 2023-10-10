'use server';

import { cookies } from "next/headers";
import { executeGraphql } from "@/api/graphqlRequest";
import { CartAddItemDocument, CartCreateDocument, CartGetByIdDocument, type ProductItemFragment } from "@/gql/graphql";

type ProductItem = Pick<ProductItemFragment, "id" | "price">

async function getOrCreateCart() {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const { order: cart } = await executeGraphql(CartGetByIdDocument, {
			id: cartId,
		});
		if (cart) {
			return cart;
		}
	}
 
	const { createOrder: newCart } = await executeGraphql(CartCreateDocument);
	if (!newCart) {
		throw new Error("Failed to create cart");
	}
 
	cookies().set("cartId", newCart.id);
	return newCart;
}

async function addProductToCart(cartId: string, product: ProductItem) {
	if (!product) {
		throw new Error(`Product  not found`);
	}
 
	await executeGraphql(CartAddItemDocument, {
		cartId,
		productId: product.id,
		total: product.price,
	});
	console.log("Product added to cart");
}

export async function addProductToCartAction(product: ProductItem) {
    const cart = await getOrCreateCart();
    await addProductToCart(cart.id, product);
}