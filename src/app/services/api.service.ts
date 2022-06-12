import { IProducts } from 'src/app/models/IProduct';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  messages: string[] = [];
  // Me suscribo en el componente que llamo al servicio
  // fecthProducts() {
  //   this.http.get('https://reqres.in/api/users?page=2').subscribe((data) => {
  //     console.log(data);
  //   });
  //   console.log('Esto se ejecutará antes que el console log de arriba');
  // }
  fecthProducts(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products');
  }

}
