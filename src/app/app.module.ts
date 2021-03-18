import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";

//  custom modules
import { SharedModule } from "./shared/shared.module";
import { HomeModule } from "./pages/home/home.module";
import { RoutingModule } from "./routing/routing.module";

//  components
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { PrivacyPolicyComponent } from "./pages/privacy-policy/privacy-policy.component";
import { TermsOfUseComponent } from "./pages/terms-of-use/terms-of-use.component";
import { GetQuoteComponent } from "./pages/get-quote/get-quote.component";
import { ShipperComponent } from "./pages/shipper/shipper.component";
import { DriverComponent } from "./pages/driver/driver.component";
import { CorporateComponent } from "./pages/corporate/corporate.component";
import { PartnerComponent } from "./pages/partner/partner.component";
import { RegisterComponent } from "./pages/register/register.component";
import { LoginComponent } from "./pages/login/login.component";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { DashboardDriversComponent } from './pages/dashboard-drivers/dashboard-drivers.component';
import { TrucksComponent } from './pages/trucks/trucks.component';
import { BookNowComponent } from './pages/book-now/book-now.component';
import { TrackOrderComponent } from './pages/track-order/track-order.component';
import { CardsComponent } from './pages/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PrivacyPolicyComponent,
    TermsOfUseComponent,
    GetQuoteComponent,
    ShipperComponent,
    DriverComponent,
    CorporateComponent,
    PartnerComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    OrdersComponent,
    DashboardDriversComponent,
    TrucksComponent,
    BookNowComponent,
    TrackOrderComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    SharedModule,
    HomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
