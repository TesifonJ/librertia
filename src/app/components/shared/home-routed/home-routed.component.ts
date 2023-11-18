import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { IBook } from 'src/app/model/model.interfaces';

@Component({
  templateUrl: './home-routed.component.html',
  styleUrls: ['./home-routed.component.scss']
})
export class HomeRoutedComponent {
  idBook: number = 0;
  reloadBooks: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onBookChange(oBook: IBook) {
    this.idBook = oBook.id;
  }

  onLoanChange(oLoan: Boolean) {
    this.reloadBooks.next(true);
  }
}
