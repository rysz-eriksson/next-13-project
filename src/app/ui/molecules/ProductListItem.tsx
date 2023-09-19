import Link from "next/link"
import { ProductCoverImage } from "../atoms/ProductCoverImage"
import { ProductListItemDescription } from "../atoms/ProductListItemDescription"
import { type ProductItem } from "../types"

type ProductListItemProps = {
    product: ProductItem
}

export const ProductListItem = (
    {product: {id, name, category, price, coverImage}}: ProductListItemProps) => {
    return (
        <li>
            <article>
                <Link href={`/product/${id}`}>
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
                </Link>
            </article>
        </li>
    )
}