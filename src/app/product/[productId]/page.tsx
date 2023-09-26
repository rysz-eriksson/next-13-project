import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById } from "@/api/products"
import { ProductPageItem } from "@/app/ui/molecules/ProductPageItem"

export async function generateMetadata({params}: {params: {productId: string}}): Promise<Metadata> {
	
  const productItem = await getProductById(params.productId)
  return {
		title: productItem?.name,
    description: productItem?.description,
	};
}

export default async function ProductPage({params}: {params: {productId: string}}) {
    const productItem = await getProductById(params.productId)
  
    if (!productItem) {
      notFound()
    }
    
    return (
    <section className="flex items-center justify-center">
        <ProductPageItem product={productItem} />
    </section>
  )
}