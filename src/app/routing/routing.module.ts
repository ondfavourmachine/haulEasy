import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../pages/home/home.component";
import { AboutComponent } from "../pages/about/about.component";
import { PrivacyPolicyComponent } from "../pages/privacy-policy/privacy-policy.component";
import { TermsOfUseComponent } from "../pages/terms-of-use/terms-of-use.component";
import { GetQuoteComponent } from "../pages/get-quote/get-quote.component";
import { ShipperComponent } from "../pages/shipper/shipper.component";
import { DriverComponent } from "../pages/driver/driver.component";
import { CorporateComponent } from "../pages/corporate/corporate.component";
import { PartnerComponent } from "../pages/partner/partner.component";
import { LoginComponent } from "../pages/login/login.component";
import { RegisterComponent } from "../pages/register/register.component";
import { DashboardComponent } from "../pages/dashboard/dashboard.component";
import { OrdersComponent } from "../pages/orders/orders.component";
import { DashboardDriversComponent } from "../pages/dashboard-drivers/dashboard-drivers.component";
import { TrucksComponent } from "../pages/trucks/trucks.component";
import { BookNowComponent } from "../pages/book-now/book-now.component";
import { TrackOrderComponent } from "../pages/track-order/track-order.component";
import { CardsComponent } from "../pages/cards/cards.component";

const routes: Routes = [
  { path: "", component: HomeComponent, runGuardsAndResolvers: "always" },
  { path: "about", component: AboutComponent, runGuardsAndResolvers: "always" },
  {
    path: "privacy-policy",
    component: PrivacyPolicyComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "terms-of-use",
    component: TermsOfUseComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "get-quote",
    component: GetQuoteComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "shippers",
    component: ShipperComponent,
    runGuardsAndResolvers: "always"
  },

  {
    path: "drivers",
    component: DriverComponent,
    runGuardsAndResolvers: "always"
  },

  {
    path: "corporate",
    component: CorporateComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "partner",
    component: PartnerComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "login",
    component: LoginComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "register",
    component: RegisterComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "order",
    component: OrdersComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "your-drivers",
    component: DashboardDriversComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "trucks",
    component: TrucksComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "book-now",
    component: BookNowComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "track-order",
    component: TrackOrderComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "cards",
    component: CardsComponent,
    runGuardsAndResolvers: "always"
  }
];

//  {enableTracing: true, onSameUrlNavigation: 'reload'}
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" }),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule {}
