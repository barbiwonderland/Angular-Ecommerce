import { CartService } from './../../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  totals: any;
  constructor(private service: CartService) {}

  ngOnInit(): void {
    this.totals = this.service.getTotals().total;
  }
}
