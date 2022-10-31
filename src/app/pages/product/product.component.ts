import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  allProducts: Product[] = [];
  products: Product[] = [];

  totalP!: number;
  search: string = '';

  constructor( private productServices: ProductService) { }

  ngOnInit(): void {
        //inicializado a busca do produtos para exibilos no html
    this.productServices.getProduct().subscribe((item) => {

      const data = item.data;  

      this.products = data;
      this.allProducts = data;
      this.totalP = data.length;        

    });
  }

  //Pesquisa
  searchs(e: Event): void {
      const target = e.target as HTMLInputElement;
      const value = target.value;

      this.products = this.allProducts.filter((item)=> {
        return item.name.toLowerCase().includes(value);
      });
  }

}
