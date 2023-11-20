import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './admin-loan-view-routed.component.html',
  styleUrls: ['./admin-loan-view-routed.component.scss']
})
export class AdminLoanViewRoutedComponent {
  id: number = 1;
  constructor(
    private oActivatedRoute: ActivatedRoute
  ) { 
    this.id = parseInt(this.oActivatedRoute.snapshot.paramMap.get("id") || "1");
  }

  ngOnInit() {
  }
}
