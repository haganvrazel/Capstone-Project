import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthModule } from './auth/auth.module';
import { ServicesComponent } from './services/services.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { CartComponent } from './cart/cart.component';
import { ElectronicItemComponent } from './electronic-item/electronic-item.component';
import { ElectronicService1 } from './ElectronicService1';
import { ElectronicStoreComponent } from './electronic-store/electronic-store.component';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    ServicesComponent,
    ElectronicsComponent,
    CartComponent,
    ElectronicItemComponent,
    ElectronicStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormGroup,
    FormsModule,
    FormControl
  ],
  providers: [ElectronicService1],
  bootstrap: [AppComponent]
})
export class AppModule { }
