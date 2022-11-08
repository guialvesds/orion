import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { Product } from 'src/app/model/Product';

import { Router } from '@angular/router';

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

  constructor(private formBuild: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.productForm = this.formBuild.group({
      code: new FormControl(this.productData ? this.productData.code : '0'),
      name: new FormControl( this.productData ? this.productData.name : ''),
      price: new FormControl( this.productData ? this.productData.price : ''),
      inventory: new FormControl( this.productData ? this.productData.inventory : ''),
    });

    // if(!this.productData){
    //   this.code.disable
    // }
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
      if(this.name.invalid || this.price.invalid){
          return;
      }
      console.log(this.productForm.value);
      this.onsubmit.emit(this.productForm.value);
      
  }

  back(){
    this.router.navigate(['/']);
  }

}
