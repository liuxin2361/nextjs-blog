import { Pagination } from "@/components/ui/pagination";

// default page
export const DEFAULT_PAGE = 1;

// default page size
export const DEFAULT_PAGE_SIZE = 10;

// default order; 'newest'
export const ORDER = {
    NEWEST: 'newest',
    OLDEST: 'oldest'
};

// the size of displayed pageination items
export const PAGINATION_ITEM_SIZE = 5;

export const PAGINATION_FRONT_ITEM = Math.floor((PAGINATION_ITEM_SIZE - 1) / 2);
