import { AddToCartButton } from "../atoms/AddToCartButton"
import { type ProductItemFragment } from "@/gql/graphql";
import { addProductToCartAction } from "@/app/actions/addProductToCartAction";

export const AddToCartForm = ({product}: {product: Pick<ProductItemFragment, "id" | "price"> }) => {
    async function onProductAddToCart() {
        'use server';
        await addProductToCartAction(product);
    }


    return (
    <form action={onProductAddToCart} className="mt-4">
        <AddToCartButton />
    </form>
    )
}