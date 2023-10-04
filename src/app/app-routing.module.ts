import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KFCcomponentComponent } from './Logout/kfccomponent/kfccomponent.component';
import { ChickencomponentComponent } from './loggedin/chickencomponent/chickencomponent.component';
import { BurgerscomponentComponent } from './loggedin/burgerscomponent/burgerscomponent.component';
import { BoxmealscomponentComponent } from './loggedin/boxmealscomponent/boxmealscomponent.component';
import { SnakscomponentComponent } from './loggedin/snakscomponent/snakscomponent.component';
import { BeveragescomponentComponent } from './loggedin/beveragescomponent/beveragescomponent.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: KFCcomponentComponent },

  { path: 'chicken', component: ChickencomponentComponent },

  { path: 'burger', component: BurgerscomponentComponent },

  { path: 'boxmeals', component: BoxmealscomponentComponent },

  { path: 'snaks', component: SnakscomponentComponent },

  { path: 'beverages', component: BeveragescomponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

