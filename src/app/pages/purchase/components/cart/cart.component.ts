import { ICart } from './../../../../models/ICart';
import { Component, OnInit } from '@angular/core';
import { IProducts } from 'src/app/models/IProduct';
import { CartService } from 'src/app/services/cart.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private service: CartService, private snack: SnackbarService) {}
  // no me deja poner interfaces
  cartItems: ICart[] = [];
  dataSource?: ICart[];
  cartTotals: any = 0;

  ngOnInit() {
    this.service.getiItem$().subscribe(
      (item) => (
        (this.cartItems = item),
        (this.dataSource = this.cartItems),
        (this.cartTotals = item.reduce((acc, cur) => {
          let subtotal = cur.price * cur.quantity;
          return (acc = acc + subtotal);
        }, 0))
      )
    );
  }
  deleteItem = (x: ICart) => {
    this.service.removeItem(x);
    this.snack.openSnackBar('Producto eliminado correctamente', 'OK');
  };
  // Table
  displayedColumns: string[] = ['Name', 'Cantidad', 'Image', 'Price', 'Remove'];
}
