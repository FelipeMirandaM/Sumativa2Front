import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudProductComponent } from './crud-product/crud-product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormNewProductComponent } from './form-new-product/form-new-product.component';
import { FormEditProductComponent } from './form-edit-product/form-edit-product.component';
import { SaleDetailComponent } from './sale-detail/sale-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudProductComponent,
    NavbarComponent,
    FooterComponent,
    FormNewProductComponent,
    FormEditProductComponent,
    SaleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
