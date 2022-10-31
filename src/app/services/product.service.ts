import { Injectable } from '@angular/core';

import { Product } from '../model/Product';
import { Response } from '../model/Response';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

 
  baseApiUrl = environment.baseApiUrl;
  apiUrl = `${this.baseApiUrl}/product`

  constructor(private http: HttpClient) { }

  getProduct(): Observable<Response<Product[]>>{
    return this.http.get<Response<Product[]>>(this.apiUrl);
  }

}
