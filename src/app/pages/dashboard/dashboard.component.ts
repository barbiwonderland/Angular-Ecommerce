import { Component, OnInit } from '@angular/core';
import { ICart } from 'src/app/models/ICart';
import { IProducts } from 'src/app/models/IProduct';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
CartService;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private apiservice: ApiService,
    private cartservice: CartService,
    private snackb: SnackbarService
  ) {}
  products: any;
  categories: any = [];
  productsFiltered: any[] = [];

  ngOnInit() {
    this.apiservice.getUsers().subscribe((data) => {
      console.log(data);
      this.products = data;
      this.productsFiltered = data;
      this.categories = this.products.map((x: any) => x.category);
      this.categories = [...new Set(this.categories)];
    });
  }
  isReadMore = true;
  FilterByCategory(x: string) {
    if (x === 'all') {
      this.productsFiltered = this.products;
    } else {
      this.productsFiltered = this.products;
      this.productsFiltered = this.productsFiltered.filter(
        (item: any) => item.category === x
      );
    }
  }
  showText() {
    this.isReadMore = !this.isReadMore;
  }

  addToCart(product: ICart) {
    this.cartservice.addToCart(product);
    this.snackb.openSnackBar('Producto agregado correctamente', 'OK');
  }
}
