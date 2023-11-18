import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoan, ILoanPage } from '../model/model.interfaces';
import { API_URL } from 'src/environment/environment';

@Injectable()
export class LoanAjaxService {

    sUrl: string = API_URL + "/loan";

    constructor(
        private oHttpClient: HttpClient
    ) { }

    getOne(id: number): Observable<ILoan> {
        return this.oHttpClient.get<ILoan>(this.sUrl + "/" + id);
    }

    getPage(size: number | undefined, page: number | undefined, orderField: string, orderDirection: string, id_user: number, id_Book: number): Observable<ILoanPage> {
        if (!size) size = 10;
        if (!page) page = 0;
        let strUrlUser = "";
        if (id_user > 0) {
            strUrlUser = "&user=" + id_user;
        }
        let strUrlBook = "";
        if (id_Book > 0) {
            strUrlBook = "&Book=" + id_Book;
        }

        return this.oHttpClient.get<ILoanPage>(this.sUrl + "?size=" + size + "&page=" + page + "&sort=" + orderField + "," + orderDirection + strUrlUser + strUrlBook);
    }

    removeOne(id: number | undefined): Observable<number> {
        if (id) {
            return this.oHttpClient.delete<number>(this.sUrl + "/" + id);
        } else {
            return new Observable<number>();
        }
    }

    newOne(oBook: ILoan): Observable<ILoan> {
        return this.oHttpClient.post<ILoan>(this.sUrl, oBook);
    }

    updateOne(oBook: ILoan): Observable<ILoan> {
        return this.oHttpClient.put<ILoan>(this.sUrl, oBook);
    }

    generateRandom(amount: number): Observable<number> {
        return this.oHttpClient.post<number>(this.sUrl + "/populate/" + amount, null);
    }

    empty(): Observable<number> {
        return this.oHttpClient.delete<number>(this.sUrl + "/empty");
    }

}
