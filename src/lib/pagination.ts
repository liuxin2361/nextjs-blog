import { ReadonlyURLSearchParams } from "next/navigation";

export function getPreviousPageParams(searchParams: ReadonlyURLSearchParams): string {
    const currentPage = Number(searchParams.get('page') ?? 1);
    const previousPage = (currentPage - 1) < 1 ? 1 : currentPage - 1;
    const params = new URLSearchParams(searchParams);
    params.set('page', previousPage.toString());
    return params.toString();
};

export function getNextPageParams(searchParams: ReadonlyURLSearchParams, pageCount: number): string {
    const currentPage = Number(searchParams.get('page') ?? 1);
    const nextPage = currentPage + 1 < pageCount ? currentPage + 1 : pageCount;
    const params = new URLSearchParams(searchParams);
    params.set('page', nextPage.toString());
    return params.toString();
}