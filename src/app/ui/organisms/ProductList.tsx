import { ProductListItem } from "../molecules/ProductListItem"
import { type ProductItem } from "../types"

type ProductListProps = {
    products: ProductItem[]
}

export const ProductList = ({products}: ProductListProps) => {
    return (
        <ul className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-4" data-testid="products-list">
            {products.map(product => <ProductListItem key={product.id} product={product} />)}
        </ul>
    )
}