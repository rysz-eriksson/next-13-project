import { notFound } from "next/navigation";
import { getProductsListByCategory } from "@/api/products";
import { ProductList } from "@/app/ui/organisms/ProductList";

export async function generateStaticParams() {
    return ["t-shirts", "hoodies", "accessories"].map(category => ({category}));
  }

export default async function CategoryProductsPage({params}: {params: {category: string}}) {
    const products = await getProductsListByCategory(params.category);

    if (!products) {
        notFound()
    }

    return (
        <main className="flex flex-col items-center justify-center">
            <ProductList products={products} />
        </main>
    )
}