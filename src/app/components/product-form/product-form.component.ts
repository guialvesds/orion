import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { Product } from 'src/app/model/Product';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Output() onsubmit = new EventEmitter<Product>();
  @Input() productData!: Product;
  @Input() btnText!: string;
  @Input() title!: string;

  productForm!: FormGroup;

  constructor(private formBuild: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.formBuild.group({
      code: new FormControl(this.productData ? this.productData.code : ''),
      name: new FormControl( this.productData ? this.productData.name : ''),
      price: new FormControl( this.productData ? this.productData.price : ''),
      inventory: new FormControl( this.productData ? this.productData.inventory : ''),
    });
  }

  get code() {
    return this.productForm.get('code')!;
  }
  get name() {
    return this.productForm.get('name')!;
  }
  get price() {
    return this.productForm.get('price')!;
  }

  submit(){
      if(this.code.invalid || this.name.invalid || this.price.invalid){
          return;
      }
      console.log(this.productForm.value);
      this.onsubmit.emit(this.productForm.value);
      
  }

}
