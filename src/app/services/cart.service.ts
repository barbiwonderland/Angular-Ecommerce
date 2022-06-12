import { IProducts } from 'src/app/models/IProduct';
import { ICart } from './../models/ICart';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: ICart[] = [];
  private productList$ = new BehaviorSubject<ICart[]>([]);
  constructor() {}
  /* . . . */
  // OBSERVABLES
  //get product data
  getiItem$(): Observable<ICart[]> {
    return this.productList$.asObservable();
  }
  //set product data
  setItem$(products: ICart[]) {
    this.productList$.next(products);
  }
  addToCart(products: IProducts) {
    const itemIndex = this.items.findIndex((item) => item.id === products.id);
    if (itemIndex >= 0) {
      this.items[itemIndex].quantity += 1;
    } else {
      const tempProduct = { ...products, quantity: 1 };
      this.items.push(tempProduct);
    }
    console.log(this.items, 'items agregados');
    this.productList$.next(this.items);
  }
  decreaseCart(x: ICart) {
    const itemIndex = this.items.findIndex((item) => item.id === x.id);
    this.items[itemIndex].quantity -= 1;
  }
  removeItem(x: ICart) {
    if (x.quantity > 1) {
      this.decreaseCart(x);
    } else {
      this.items = this.items.filter((item) => item.id !== x.id);
      console.log(this.items, 'item filstrado');
    }
    this.productList$.next(this.items);
  }
  IcreaseCart(x: ICart) {
    const itemIndex = this.items.findIndex((item) => item.id === x.id);
    this.items[itemIndex].quantity += 1;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }

  /* Hacer reactivo para que se muestren los cambios */
  getTotals() {
    return this.items.reduce(
      (cartTotal, cartItem) => {
        const { price, quantity } = cartItem;
        const itemTotal = price * quantity;
        cartTotal.total += itemTotal;
        cartTotal.quantity += quantity;
        return cartTotal;
      },
      {
        total: 0,
        quantity: 0,
      }
    );
  }
}
