import { ProductListItemCoverImage } from "../atoms/ProductListItemCoverImage"
import { ProductListItemDescription } from "../atoms/ProductListItemDescription"
import { type ProductItem } from "../types"

type ProductListItemProps = {
    product: ProductItem
}

export const ProductListItem = (
    {product: {name, category, price, coverImage}}: ProductListItemProps) => {
    return (
        <li>
            <article>
                <ProductListItemCoverImage {...coverImage} />
                <ProductListItemDescription 
                    product={{
                        category,
                        name,
                        price
                    }}
                />
            </article>
        </li>
    )
}