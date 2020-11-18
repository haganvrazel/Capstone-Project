import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth/auth.guard';
import { ServicesComponent } from './services/services.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { CartComponent } from './cart/cart.component';
import { ElectronicItemComponent } from './electronic-item/electronic-item.component';
import { ElectronicStoreComponent } from './electronic-store/electronic-store.component';
import { ElectronicDeleteComponent } from "./electronic-delete/electronic-delete.component";
import { ElectronicUpdateComponent } from './electronic-update/electronic-update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'services', component: ServicesComponent, canActivate: [AuthGuard] },
  { path: 'electronics', component: ElectronicsComponent, canActivate: [AuthGuard]},
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  { path: 'electronic-item', component: ElectronicItemComponent, canActivate: [AuthGuard]},
  { path: 'electronic-store', component: ElectronicStoreComponent, canActivate: [AuthGuard]},
  { path: 'electronic-delete', component: ElectronicDeleteComponent, canActivate: [AuthGuard]},
  { path: 'electronic-update', component: ElectronicUpdateComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
