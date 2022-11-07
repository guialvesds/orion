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

  getP(id: string): Observable<Response<Product>>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Product>>(url);
  }

  createProduct(dados: Product): Observable<Product>{
      return this.http.post<Product>(this.apiUrl, dados)
  }

  editProduct(id: string, dados: Product): Observable<Product>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Product>(url, dados);
  }

  removeProduct(id: any){
    const url = `${this.apiUrl}/${id}`
    return this.http.delete(url);
  }

}
