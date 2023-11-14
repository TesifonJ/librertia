import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environment/environment';
import { IBook, IBookPage } from '../model/model.interfaces';

@Injectable()
export class BookAjaxService {

    sUrl: string = API_URL + "/book";

    constructor(
        private oHttpClient: HttpClient
    ) { }

    getOne(id: number): Observable<IBook> {
        return this.oHttpClient.get<IBook>(this.sUrl + "/" + id);
    }

    getPage(size: number | undefined, page: number | undefined, orderField: string, orderDirection: string, id_user: number): Observable<IBookPage> {
        if (!size) size = 10;
        if (!page) page = 0;
        let strUrlUser = "";
        if (id_user > 0) {
            strUrlUser = "&user=" + id_user;
        }
        return this.oHttpClient.get<IBookPage>(this.sUrl + "?size=" + size + "&page=" + page + "&sort=" + orderField + "," + orderDirection + strUrlUser);
    }

    removeOne(id: number | undefined): Observable<number> {
        if (id) {
            return this.oHttpClient.delete<number>(this.sUrl + "/" + id);
        } else {
            return new Observable<number>();
        }
    }

    newOne(oBookIBook: IBook): Observable<IBook> {
        return this.oHttpClient.post<IBook>(this.sUrl, oBookIBook);
    }

    updateOne(oBookIBook: IBook): Observable<IBook> {
        return this.oHttpClient.put<IBook>(this.sUrl, oBookIBook);
    }

    generateRandom(amount: number): Observable<number> {
        return this.oHttpClient.post<number>(this.sUrl + "/populate/" + amount, null);
    }

    getPageByRepliesNumberDesc(size: number | undefined, page: number | undefined, id_user: number): Observable<IBookPage> {
        if (!size) size = 10;
        if (!page) page = 0;
        let strUrlUser = "";
        if (id_user > 0) {
            strUrlUser = "&user=" + id_user;
        }
        return this.oHttpClient.get<IBookPage>(this.sUrl + "/byRepliesNumberDesc?size=" + size + "&page=" + page + strUrlUser);
    }

    empty(): Observable<number> {
        return this.oHttpClient.delete<number>(this.sUrl + "/empty");
    }

}
