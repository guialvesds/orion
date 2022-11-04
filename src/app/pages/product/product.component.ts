import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  allProducts: Product[] = [];
  products: Product[] = [];

  idProduct!: Product;

  totalP!: number;
  search: string = '';

  constructor(
    private productServices: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService,
    public authService: AuthService
  ) {}

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

    this.products = this.allProducts.filter((item) => {
      return item.name.toLowerCase().includes(value);
    });
  }

  async remove(id: any) {
    await this.productServices.removeProduct(id).subscribe();

    console.log('Produto excluído com sucesso!');

    setTimeout(() => {
      this.productServices.getProduct().subscribe((item) => {
        const data = item.data;
        this.products = data;
        this.totalP = data.length;

        this.alert.add('Produto excluído com sucesso!');
      });
    }, 600);
  }
}
