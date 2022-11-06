import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Product } from 'src/app/model/Product';
import { AlertService } from 'src/app/services/alert.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  productData!: Product;
  btnText = 'Editar';
  title = 'Editar produto';

  constructor(
    private router: Router,
    private productServices: ProductService,
    private route: ActivatedRoute,
    private alert: AlertService
  ) {}

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));

    this.productServices.getP(id).subscribe((item) => {
      this.productData = item.data;

      console.log(this.productData);
    });
  }

  async editP(productData: Product) {
    const id = this.productData._id;

    const dados = {
      code: productData.code,
      name: productData.name,
      price: productData.price,
      inventory: productData.inventory,
    };

    await this.productServices.editProduct(id!, dados).subscribe();

    this.alert.add(`produto ${this.productData.code} alterado com sucesso!`);
  }
}
