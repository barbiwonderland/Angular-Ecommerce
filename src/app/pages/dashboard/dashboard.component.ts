import { Component, OnInit } from '@angular/core';
import { ICart } from 'src/app/models/ICart';
import { IProducts } from 'src/app/models/IProduct';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
CartService;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private apiservice: ApiService,
    private cartservice: CartService
  ) {}
  products: any;

  ngOnInit() {
    this.apiservice.getUsers().subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }
  isReadMore = true;

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  addToCart(product: ICart) {
    this.cartservice.addToCart(product);
    /* Agregar mensaje al usuario que agrego al carrito */
  }
}
