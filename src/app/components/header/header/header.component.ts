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

  ngOnInit() {
    this.service.getiItem$().subscribe((res) => {
      this.totals = res.reduce((acc, cur) => (acc = acc + cur.quantity),0);
    });
  }
}
