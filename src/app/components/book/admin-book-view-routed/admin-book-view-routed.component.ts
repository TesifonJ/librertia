import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './admin-book-view-routed.component.html',
  styleUrls: ['./admin-book-view-routed.component.scss']
})
export class AdminBookViewRoutedComponent {
  id: number = 1;

  constructor(private oActivatedRoute: ActivatedRoute) {
    this.id = parseInt(this.oActivatedRoute.snapshot.paramMap.get("id") || "1");
  }

  ngOnInit() {
  }

}
