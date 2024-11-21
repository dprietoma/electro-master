import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { TopHeaderComponent } from './shared/top-header/top-header.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NewProductsComponent } from './components/new-products/new-products.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { BannerComponent } from './shared/banner/banner.component';
import { TopSellingComponent } from './shared/top-selling/top-selling.component';
import { CarouselTopsellingComponent } from './components/carousel-topselling/carousel-topselling.component';
import { NewsLetterComponent } from './components/news-letter/news-letter.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    ShoppingCartComponent,
    NavbarComponent,
    NewProductsComponent,
    CollectionsComponent,
    BannerComponent,
    TopSellingComponent,
    CarouselTopsellingComponent,
    NewsLetterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
