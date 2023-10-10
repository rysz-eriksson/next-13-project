import { formatPrice } from "../utils"
import { type ProductItemFragment } from "@/gql/graphql"

type ProductPageItemDescriptionProps = {
    product: Pick<ProductItemFragment, "name" | "price"| "description"> & {category: string}
}

export const ProductPageItemDescription = (
    { product: {name, category, price, description}}: ProductPageItemDescriptionProps) => {

        async function addProductToCartAction() {
            "use server";
            console.log(`add product ${name} to cart`);
        }
    return (
        <div className="mt-2 flex flex-col justify-evenly max-w-lg max-h-80">
                <h3 className="text-sm font-semibold text-gray-700">
                    {name}
                </h3>
                <p className="text-sm text-gray-500">
                    <span className="sr-only">Kategoria:</span> {category}
                </p>
                <h4 className="text-sm font-semibold text-gray-700">
                <span className="sr-only">Cena:</span> {formatPrice(price)}
                </h4>
                <p className="text-sm text-gray-500">
                    {description}
                </p>
        </div>
    )
}