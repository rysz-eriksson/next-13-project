import Link from "next/link"
import { ProductCoverImage } from "../atoms/ProductCoverImage"
import { ProductListItemDescription } from "../atoms/ProductListItemDescription"
import { type ProductListItemFragment } from "@/gql/graphql"

type ProductListItemProps = {
    product: ProductListItemFragment
}

export const ProductListItem = (
    {product: {id, name, categories, price, images}}: ProductListItemProps) => {
        const category = categories[0]?.name || ""
        const coverImage = images[0] ? { 
            src: images[0].url,
            alt: name
         }: null
    return (
        <li>
            <article>
                <Link href={`/product/${id}`}>
                {coverImage &&
                    <ProductCoverImage 
                        dimensions={{
                            width: 320,
                            height: 320
                        }}
                        imageSettings={coverImage}
                    />
                } 
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