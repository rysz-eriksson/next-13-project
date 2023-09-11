/* eslint-disable @next/next/no-img-element */

import { type ProductItem } from "../types";

export const ProductListItemCoverImage = ({src, alt}: ProductItem["coverImage"]) => {
    return (
        <div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
            <img
                width={320}
                height={320}
                alt={alt}
                src={src}
                className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
            />
        </div>
    )
}