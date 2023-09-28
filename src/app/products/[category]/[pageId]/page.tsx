import { notFound } from "next/navigation";
import { PAGE_SIZE } from "@/app/ui/constants";
import { getProductsCount, getProductsList, getProductsListByCategory, getProductsPerCategoryCount } from "@/api/products";
import { computePaginationSettings } from "@/app/ui/utils";
import { ProductList } from "@/app/ui/organisms/ProductList";
import { Pagination } from "@/app/ui/molecules/Pagination";

const computeNumberOfProductsPages = (totalItems: number, itemsPerPage: number) => {
    return Math.ceil(totalItems / itemsPerPage);
}

const generateProductPagesList = (numberOfPages: number, category: string) => {
    const result = [];
    for (let i = 1; i <= numberOfPages; i++) {
      result.push({
        category,
        pageId: i.toString()
    });
    }
    return result
};

type ProductsPageParams = {
    category: string;
    pageId: string;
}

const getPagesForCategories = async (category: string): Promise<ProductsPageParams[]> => {
    let numberOfPages: number;
    if (category === "all") {
        const productsCount = await getProductsCount();
        numberOfPages = computeNumberOfProductsPages(productsCount, PAGE_SIZE);
    } else {
        const productsCount = await getProductsPerCategoryCount(category);
        numberOfPages = computeNumberOfProductsPages(productsCount, PAGE_SIZE);
    }

    return generateProductPagesList(numberOfPages, category);
    
}

export async function generateStaticParams() {
    const categories = ["t-shirts", "hoodies", "accessories", "all"]
    return categories.map(getPagesForCategories)
}

export default async function ProductsPage({params}: {params: ProductsPageParams}) {
    const { category, pageId} = params;
    const products = category === "all" ?  await getProductsList(computePaginationSettings(Number(pageId))) : await getProductsListByCategory(category, computePaginationSettings(Number(pageId)));
    const productsCount = category === "all" ? await getProductsCount() : await getProductsPerCategoryCount(category);

  if (!products) {
    notFound();
  }
 
  return (
    <main className="flex flex-col items-center justify-center">
      <ProductList products={products} />
      <Pagination current={params.pageId} total={productsCount} pageSize={PAGE_SIZE} /> 
    </main>
 )
}
