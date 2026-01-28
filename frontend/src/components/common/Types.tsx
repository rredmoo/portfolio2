export type PaginationProp = {
    currentPage: number;
    lastPage: number;
    onPrev: () => void;
    onNext: () => void;
};