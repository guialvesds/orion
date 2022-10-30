import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'account', component: AccountComponent},
  {path: 'product', component: ProductComponent},
  {path: 'perfil', component: PerfilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
