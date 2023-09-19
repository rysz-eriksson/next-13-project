import { ProductList } from "../../ui/organisms/ProductList";
import { getProducts, getProductsCount } from "@/api/products";
import { PAGE_SIZE } from "@/app/ui/constants";
import { Pagination } from "@/app/ui/molecules/Pagination";
import { computeNumberOfProductsPages, computePaginationSettings, generateProductPagesList } from "@/app/ui/utils";

export async function generateStaticParams() {
  const productsCount = await getProductsCount();
  const numberOfPages = computeNumberOfProductsPages(productsCount, PAGE_SIZE);
  const pagesList = generateProductPagesList(numberOfPages);
  return pagesList.map(pageId => ({pageId}));
}

export default async function ProductsPage({params}: {params: {pageId: string}}) {
  const products = await getProducts(computePaginationSettings(Number(params.pageId)));
  const productsCount = await getProductsCount();
 
  return (
    <main className="flex flex-col items-center justify-center">
      <ProductList products={products} />
      <Pagination current={params.pageId} total={productsCount} pageSize={PAGE_SIZE} /> 
    </main>
 )
}
