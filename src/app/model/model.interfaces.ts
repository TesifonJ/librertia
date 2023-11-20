
export interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export interface Pageable {
    sort: Sort;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
}

export interface IPage<T> {
    content: T[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: Sort;
    first: boolean;
    numberOfElements: number;
    empty: boolean;

    strSortField: string;
    strSortDirection: string;
    strFilter: string;
    strFilteredTitle: string;
    strFilteredMessage: string;
    nRecords: number;
}

export interface IEntity {
    id: number,
}

export interface IUser extends IEntity {
    name: string,
    surname: string,
    username: string,
    email: string,
    role: boolean,
    numberOfBooks: number,
    numberOfLoans: number
}

export interface IUserPage extends IPage<IUser> {
}

export interface IBook extends IEntity {
    title: string,
    author: string,
    category: string,
    available: boolean,
    ownerUser: IUser,
    loans: number
}

export interface IBookPage extends IPage<IBook> {
}

export interface ILoan extends IEntity {
    creationDate: Date,
    dueDate: Date,
    returnDate: Date,
    book: IBook,
    user: IUser,
}

export interface ILoanPage extends IPage<ILoan> {
}

export type formOperation = 'EDIT' | 'NEW';

export interface SessionEvent {
    type: string;
}

export interface IToken {
    jti: string;
    iss: string;
    iat: number;
    exp: number;
    name: string;
}