import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IndentComponent } from "./indent/indent.component";
import { PriceComponent } from './price/price.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OthersComponent } from './others/others.component';
import { FinalComponent } from './final/final.component';


@NgModule({
  declarations: [AppComponent, IndentComponent, PriceComponent, NavbarComponent, HomeComponent, SidebarComponent, OthersComponent, FinalComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
