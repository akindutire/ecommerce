import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { CategoryComponent } from "./category/category.component";
import { PaymentComponent } from "./payment/payment.component";
import { ProductlistComponent } from "./products/productlist/productlist.component";
import { ProductdetailsComponent } from "./products/productdetails/productdetails.component";
import { CartComponent } from "./products/cart/cart.component";
import { FooterComponent } from "./footer/footer.component";
import { LoginComponent } from "./login/login.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { ProductComponent } from "./products/product/product.component";
import { ProductChangeDetectorDirective } from "./directive/product-change-detector.directive";
import { Routes, RouterModule } from "@angular/router";
import { NotificationComponent } from "./header/notification/notification.component";

const appRoutes: Routes = [
  { path: "", component: LoginComponent },
  { path: "products", component: ProductlistComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    ProductlistComponent,
    ProductdetailsComponent,
    CartComponent,
    PaymentComponent,
    FooterComponent,
    LoginComponent,
    CheckoutComponent,
    ProductComponent,
    ProductChangeDetectorDirective,
    NotificationComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
