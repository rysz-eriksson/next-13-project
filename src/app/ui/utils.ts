import { PAGE_SIZE } from "./constants";
import type { PaginationSettings } from "./types";

export const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "USD"
    }).format(amount)
}

export const computeNumberOfProductsPages = (totalItems: number, itemsPerPage: number) => {
    return Math.ceil(totalItems / itemsPerPage);
}

export const computePaginationSettings = (currentPage: number): PaginationSettings => {
    const offset = (currentPage - 1) * PAGE_SIZE;
    return {
        size: PAGE_SIZE,
        offset
    }
}

export const generateProductPagesList = (numberOfPages: number) => {
    const result = [];
    for (let i = 1; i <= numberOfPages; i++) {
      result.push(i.toString());
    }
    return result
};