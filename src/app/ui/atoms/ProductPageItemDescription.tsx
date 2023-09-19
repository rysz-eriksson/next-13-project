import { type ProductItem } from "../types"
import { formatPrice } from "../utils"

type ProductPageItemDescriptionProps = {
    product: Omit<ProductItem, "coverImage" | "id">
}

export const ProductPageItemDescription = (
    { product: {name, category, price, description}}: ProductPageItemDescriptionProps) => {
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