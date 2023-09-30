import { ProductList } from "../../ui/organisms/ProductList";
import { getProductsFilteredList } from "@/api/products";
import { type ProductListItemFragment } from "@/gql/graphql";

type SearchPageProps = {
    searchParams: { [key: string]: string | undefined };
}
export default async function SearchPage(props: SearchPageProps) {

    const { searchParams } = props;
    let products: ProductListItemFragment[]  = [];
    if (searchParams && searchParams.query ) {
        products = await getProductsFilteredList(searchParams.query)
    }


  if (!searchParams || !products || !products.length) {
    return (
        <main className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold">Brak produktów</h2>
        </main>
    )
  }
 
  return (
    <main className="flex flex-col items-center justify-center">
      <ProductList products={products} /> 
    </main>
 )
}