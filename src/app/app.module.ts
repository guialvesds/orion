import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './pages/product/product.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { AccountComponent } from './pages/account/account.component';
import { LoginComponent } from './pages/login/login.component';

import { ProductFormComponent } from './components/product-form/product-form.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { NewProductComponent } from './pages/new-product/new-product.component';
import { AlertComponent } from './components/alert/alert.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthService } from './pages/login/auth.service';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SobreComponent,
    AccountComponent,
    LoginComponent,
    ProductFormComponent,
    EditProductComponent,
    NewProductComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [
    AuthService, 
    AuthGuard, 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
