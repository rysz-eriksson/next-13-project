import { ProductCoverImage } from "../atoms/ProductCoverImage"
import { ProductPageItemDescription } from "../atoms/ProductPageItemDescription"
import type { ProductItem } from "../types"

type ProductPageItemProps = {
    product: ProductItem
}

export const ProductPageItem = ({ product }: ProductPageItemProps) => {
    const { name, category, price, description, coverImage } = product
    return (
        <article className="flex m-auto gap-6">
            <ProductCoverImage 
                dimensions={{
                    width: 500,
                    height: 500
                }}
                imageSettings={coverImage}
            />
            <ProductPageItemDescription 
                product={{
                    name,
                    category,
                    price,
                    description
                }}
            />
        </article>
    )
}