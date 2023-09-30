import { ShoppingCart as ShoppingCartIcon } from 'lucide-react';

export const ShoppingCart = () => {
    return (
        <div className="flex">
            <ShoppingCartIcon size="2rem" />
            <p>0</p>
        </div>
    )
}