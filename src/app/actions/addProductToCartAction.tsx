'use server';

import { cookies } from "next/headers";
import { type ProductItemFragment}  from "@/gql/graphql";
import { addItemToCart, createCart, getCartById } from "@/api/cart";


type ProductItem = Pick<ProductItemFragment, "id" | "price">

async function getOrCreateCart() {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await getCartById(cartId);
		if (cart) {
			return cart;
		}
	}
 
	const newCart = await createCart();
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

	await addItemToCart(cartId, product.id, product.price);
	console.log("Product added to cart");
}

export async function addProductToCartAction(product: ProductItem) {
    const cart = await getOrCreateCart();
    await addProductToCart(cart.id, product);
}