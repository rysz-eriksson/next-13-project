import { NavBar } from "../molecules/NavBar"
import { SearchBar } from "../molecules/SearchBar"
import { ShoppingCart } from "../molecules/ShoppingCart"

export const Header = () => {
    return (
        <header>
            <section className="mx-auto max-w-md p-12 sm:max-w-2xl lg:max-w-6xl h-16 flex justify-between align-middle sticky top-0 bg-transparent backdrop-blur-sm">
                <NavBar />
                <div className="flex gap-1">
                    <SearchBar />
                    <ShoppingCart />
                </div>
            </section>
        </header>
    )
}