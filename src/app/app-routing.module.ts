import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { LoginComponent } from './pages/login/login.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ProductComponent } from './pages/product/product.component';

import { NewProductComponent } from './pages/new-product/new-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';

import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'account', component: AccountComponent},
  {path: '', component: ProductComponent, canActivate: [AuthGuard]},
  {path: 'sobre', component: SobreComponent, canActivate: [AuthGuard]},
  {path: 'newProduct', component: NewProductComponent, canActivate: [AuthGuard]},
  {path: 'product/edit/:id', component: EditProductComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
