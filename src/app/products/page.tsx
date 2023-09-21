// import { redirect } from 'next/navigation'

import { ProductList } from "../ui/organisms/ProductList"
import { getProductsList } from "@/api/products"

 
export default async function ProductsPage() {
    // redirect('/products/1')
    const products = await getProductsList()
    return (
        <main className="flex flex-col items-center justify-center">
          <ProductList products={products} />
        </main>
     )
}