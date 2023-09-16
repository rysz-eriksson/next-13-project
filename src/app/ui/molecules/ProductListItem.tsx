import { ProductCoverImage } from "../atoms/ProductCoverImage"
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
                <ProductCoverImage
                    dimensions={{
                        width: 320,
                        height: 320
                    }}
                    imageSettings={coverImage} 
                />
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