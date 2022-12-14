import { Component, OnInit } from '@angular/core';
import { ɵinitDomAdapter } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { Product } from 'src/app/model/Product';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
})
export class NewProductComponent implements OnInit {
  btnText = 'Cadastrar';

  title = 'Novo produto';

  constructor(
    private router: Router,
    private productServices: ProductService,
    private alert: AlertService
  ) {}

  ngOnInit(): void {}

  async createProduct(data: Product) {
    
    const codRandon: number =  9999;

   
    try {
      const dados = {
        code:  Math.floor(Math.random() * codRandon),
        name: data.name,
        price: data.price,
        inventory: data.inventory,
      };

      if (data.code && data.name && data.price) {
        await this.productServices.createProduct(dados).subscribe();

        this.alert.add('Produto cadastrado com sucesso!');

        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000);

        console.log('Produto cadastrado com sucesso!');
      } else {
        this.alert.add('Campos de código, nome e preço, são obrigatórios!');
      }
    } catch (error) {
      this.alert.add('Error ao cadastrar produto!');

      console.log('Erro ao cadastrar produto.', error);
    }
  }
}
