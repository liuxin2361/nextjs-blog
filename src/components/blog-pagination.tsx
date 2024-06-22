'use client';

import { getNextPageParams, getPreviousPageParams } from "@/lib/pagination";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "./ui/pagination";
import { useSearchParams, usePathname } from 'next/navigation';
import { PAGINATION_FRONT_ITEM, PAGINATION_ITEM_SIZE } from "@/constants/pagination";

export default function BlogPagination({ pageCount }: { pageCount: number }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const pages: number[] = [];
    const currentPage = Number(searchParams.get('page') ?? 1);
    const previousPageParams = getPreviousPageParams(searchParams);
    const nextPageParams = getNextPageParams(searchParams, pageCount);

    for (let i = 0; i < PAGINATION_ITEM_SIZE; i++) {
        const pageNumber = currentPage - PAGINATION_FRONT_ITEM + i;
        if (pageNumber > 0 && pageNumber <= pageCount) {
            pages.push(pageNumber);
        }
    }

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href={`${pathname}?${previousPageParams}`} />
                </PaginationItem>
                {pages.map(pageNumber => {
                    const params = new URLSearchParams(searchParams);
                    params.set('page', pageNumber.toString());
                    return (
                        <PaginationItem key={pageNumber}>
                            <PaginationLink href={`${pathname}?${params.toString()}`} isActive={currentPage === pageNumber}>{pageNumber}</PaginationLink>
                        </PaginationItem>
                    );
                })}
                {showPaginationEllipsis(pageCount, PAGINATION_ITEM_SIZE)}
                <PaginationItem>
                    <PaginationNext href={`${pathname}?${nextPageParams}`} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}

const showPaginationEllipsis = (pageCount: number, itemSize: number) => {
    if (pageCount > itemSize) {
        return (
            <PaginationItem>
                <PaginationEllipsis />
            </PaginationItem>
        );
    }
}