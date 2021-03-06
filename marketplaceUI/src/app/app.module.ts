import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { StorageServiceModule} from 'angular-webstorage-service';


import { ShinyListComponent } from './shiny-list/shiny-list.component';

import { PokeItemsComponent } from './poke-items/poke-items.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckoutComponent } from './checkout/checkout.component';
import { SubmitComponent } from './submit/submit.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    CartComponent,
    PokeListComponent,
    NavbarComponent,
    ShinyListComponent,
    NavbarComponent,
    PokeItemsComponent,
    HomeComponent,
    PageNotFoundComponent,
    CheckoutComponent,
    SubmitComponent,

  ],
   imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    [CommonModule],
    StorageServiceModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
