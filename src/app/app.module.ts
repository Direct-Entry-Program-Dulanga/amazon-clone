import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import {FormsModule} from "@angular/forms";
import { ItemComponent } from './item/item.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import {AppRoutingModule} from "./app-routing.module";
import { CartRowComponent } from './cart-row/cart-row.component';
import {HttpClientModule} from "@angular/common/http";
import {NgProgressModule} from "ngx-progressbar";
import {NgProgressHttpModule} from "ngx-progressbar/http";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartItemComponent,
    ItemComponent,
    HomeComponent,
    CartComponent,
    CartRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule.withConfig({
      color: "#d9970a",
      spinner: false
    }),
    NgProgressHttpModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
