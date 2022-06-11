import { ICart } from './../../../../models/ICart';
import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/models/IProduct';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private service: CartService) {}
  // no me deja poner interfaces
  cartItems: any = [];
  dataSource: any;
  cartTotals: any = 0;

  ngOnInit() {
    this.service
      .getiItem$()
      .subscribe(
        (item) => ((this.cartItems = item), (this.dataSource = this.cartItems))
      );
    this.cartTotals = this.service.getTotals().total.toFixed(2);
  }
  deleteItem = (x:ICart) => {
    this.service.removeItem(x);
  };
  // Table
  displayedColumns: string[] = ['Name', 'Cantidad', 'Image', 'Price', 'Remove'];
}
