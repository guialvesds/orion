import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ProductComponent } from './pages/product/product.component';

import { NewProductComponent } from './pages/new-product/new-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';

import { AuthGuard } from './guards/auth.guard';
import { HomeGuard } from './guards/home.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'account', component: AccountComponent},
  {path: '', component: ProductComponent, canActivate: [AuthGuard], canActivateChild: [HomeGuard]},
  {path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard], canActivateChild: [HomeGuard]},
  {path: 'newProduct', component: NewProductComponent, canActivate: [AuthGuard], canActivateChild: [HomeGuard]},
  {path: 'product/edit/:id', component: EditProductComponent, canActivate: [AuthGuard], canActivateChild: [HomeGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
