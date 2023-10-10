import { ProductCoverImage } from "../atoms/ProductCoverImage"
import { ProductPageItemDescription } from "../atoms/ProductPageItemDescription"
import { AddToCartForm } from "../molecules/AddToCartForm"
import { type ProductItemFragment } from "@/gql/graphql"

type ProductPageItemProps = {
    product: ProductItemFragment
}

export const ProductPageItem = ({ product }: ProductPageItemProps) => {
    const { id, name, categories, price, description, images } = product
    const category = categories[0]?.name || ""
    const coverImage = images[0] ? { 
        src: images[0].url,
        alt: name
     }: null
    return (
        <article className="flex m-auto gap-6">
            {coverImage &&
                <ProductCoverImage 
                    dimensions={{
                        width: 480,
                        height: 480
                    }}
                    imageSettings={coverImage}
                />
            }
            <section>
            <ProductPageItemDescription 
                product={{
                    name,
                    category,
                    price,
                    description
                }}
                />
                <AddToCartForm product={{id, price}} />
            </section>
        </article>
    )
}