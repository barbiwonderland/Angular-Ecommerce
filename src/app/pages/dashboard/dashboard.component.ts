import { Component, OnInit } from '@angular/core';
import { ICart } from 'src/app/models/ICart';
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
  readMore: boolean= false;

  ngOnInit() {
    this.apiservice.getUsers().subscribe((data) => {
      console.log(data);
      this.products = data;
      this.productsFiltered = data;
      this.categories = this.products.map((x: any) => x.category);
      this.categories = [...new Set(this.categories)];
    });
  }
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
showText(x:any){
  x.readMore = !x.readMore
}

  addToCart(product: ICart) {
    this.cartservice.addToCart(product);
    this.snackb.openSnackBar('Producto agregado correctamente', 'OK');
  }


}
