import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BharathicomponentComponent } from './bharathicomponent/bharathicomponent.component';
import { KFCcomponentComponent } from './Logout/kfccomponent/kfccomponent.component';
import { TopnavcomponentComponent } from './loggedin/topnavcomponent/topnavcomponent.component';
import { SidenavcomponentComponent } from './loggedin/sidenavcomponent/sidenavcomponent.component';
import { ChickencomponentComponent } from './loggedin/chickencomponent/chickencomponent.component';
import { BurgerscomponentComponent } from './loggedin/burgerscomponent/burgerscomponent.component';
import { BoxmealscomponentComponent } from './loggedin/boxmealscomponent/boxmealscomponent.component';
import { SnakscomponentComponent } from './loggedin/snakscomponent/snakscomponent.component';
import { BeveragescomponentComponent } from './loggedin/beveragescomponent/beveragescomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    BharathicomponentComponent,
    KFCcomponentComponent,
    TopnavcomponentComponent,
    SidenavcomponentComponent,
    ChickencomponentComponent,
    BurgerscomponentComponent,
    BoxmealscomponentComponent,
    SnakscomponentComponent,
    BeveragescomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
