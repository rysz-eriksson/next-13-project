import { ProductList } from "./ui/organisms/ProductList";
import { type ProductItem } from "./ui/types";

const products: ProductItem[] = [
  {
    id: '1',
    name: 'bluza',
    category: 'Ubrania',
    price: 100,
    coverImage: {
      src: "/bluza.avif",
      alt: "bluza"
    }
  },
  {
    id: '1',
    name: 'czapka',
    category: 'Ubrania',
    price: 50,
    coverImage: {
      src: "/czapka.avif",
      alt: "czapka"
    }
  },
  {
    id: '1',
    name: 'kubek',
    category: 'Akcesoria',
    price: 20,
    coverImage: {
      src: "/kubek.avif",
      alt: "kubek"
    }
  },
  {
    id: '1',
    name: 'long-sleeve',
    category: 'Ubrania',
    price: 80,
    coverImage: {
      src: "/long-sleeve.avif",
      alt: "long-sleeve"
    }
  },
]

export default function Home() {
 return (
  <section className="mx-auto max-w-md p-12 sm:max-w-2xl">
    <ProductList products={products} /> 
  </section>
 )
}
