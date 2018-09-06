import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  { path: '', component: HomeComponent } ,
  { path: 'services', component: ServicesComponent } ,
  { path: 'contact', component: ContactComponent } ,
  { path: 'products', component: ProductsComponent } ,
  { path: 'clients', component: ClientsComponent } ,
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ],
  
})
export class AppRoutingModule {
  
 }

