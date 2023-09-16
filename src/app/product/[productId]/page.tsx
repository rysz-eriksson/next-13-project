import { getProductById } from "@/api/products"
import { ProductPageItem } from "@/app/ui/molecules/ProductPageItem"

export default async function ProductPage({params}: {params: {productId: string}}) {
    const productItem = await getProductById(params.productId)
  
    return (
    <section className="flex items-center justify-center">
        <ProductPageItem product={productItem} />
    </section>
  )
}