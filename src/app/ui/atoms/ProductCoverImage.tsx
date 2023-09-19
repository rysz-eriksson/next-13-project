/* eslint-disable @next/next/no-img-element */
import { type ProductItem } from "../types";

type ProductCoverImageProps = {
    dimensions: {
        width: number
        height: number
    },
    imageSettings: ProductItem["coverImage"]
}


export const ProductCoverImage = ({dimensions, imageSettings}: ProductCoverImageProps) => {
    const {width, height} = dimensions
    const {src, alt} = imageSettings

    return (
        <div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
            <img
                width={width}
                height={height}
                alt={alt}
                src={src}
                className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
            />
        </div>
    )
}