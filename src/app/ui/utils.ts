import { PAGE_SIZE } from "./constants";

export const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "USD"
    }).format(amount)
}

export const computeNumberOfProductsPages = (totalItems: number, itemsPerPage: number) => {
    return Math.ceil(totalItems / itemsPerPage);
}

export type PaginationSettings = {
    amount: number;
    offset: number;
}

export const computePaginationSettings = (currentPage: number): PaginationSettings => {
    const offset = (currentPage - 1) * PAGE_SIZE;
    return {
        amount: PAGE_SIZE,
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