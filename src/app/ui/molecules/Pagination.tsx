import type { Route } from "next";
import { computeNumberOfProductsPages, generateProductPagesList } from "../utils";
import { ActiveLink } from "../atoms/ActiveLink";

type PagnationProps = {
    current: string;
    total: number;
    pageSize: number;
    categoryPath: string
}

export const Pagination = (props: PagnationProps) => {
    const { current, total, pageSize, categoryPath } = props;
    const numberOfPages = computeNumberOfProductsPages(total, pageSize);
    const pagesList = generateProductPagesList(numberOfPages);

    return (
        <nav className="mt-4">
        <ul className="w-full flex justify-between">
        {pagesList.map(pageId => (
            <li key={pageId} className="mx-4">
            <ActiveLink 
                className="text-blue-400 hover:text-blue-600"
                activeClassName="underline"
                href={(`/${categoryPath}/${pageId}`) as Route}
                forceActive={current === pageId}
            >
                {pageId}
            </ActiveLink>
            </li>
        ))}
    </ul>
        </nav>
    )
}