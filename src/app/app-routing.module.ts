import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndentComponent } from "./indent/indent.component";
import { PriceComponent } from "./price/price.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { OthersComponent } from "./others/others.component";
import { FinalComponent } from "./final/final.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "indent", component: IndentComponent },
  { path: "price", component: PriceComponent },
  { path: "others-indent", component: OthersComponent },
  { path: "others-price", component: PriceComponent },
  { path: "final", component: FinalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
