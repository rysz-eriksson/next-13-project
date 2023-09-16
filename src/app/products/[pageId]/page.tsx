import { ProductList } from "../../ui/organisms/ProductList";
import { getProducts, getProductsCount } from "@/api/products";
import { PAGE_SIZE } from "@/app/ui/constants";
import { computeNumberOfProductsPages, computePaginationSettings } from "@/app/ui/utils";

export async function generateStaticParams() {
  const productsCount = await getProductsCount();
  const numberOfPages = computeNumberOfProductsPages(productsCount, PAGE_SIZE);
  console.log("productsCount", productsCount, "numberOfPages", numberOfPages)
  const result = [];
  for (let i = 1; i <= numberOfPages; i++) {
    result.push({
        pageId: i.toString(),
    });
  }
  return result
}

export default async function ProductsPage({params}: {params: {pageId: string}}) {
  const products = await getProducts(computePaginationSettings(Number(params.pageId)));
 
  return (
    <ProductList products={products} /> 
 )
}
