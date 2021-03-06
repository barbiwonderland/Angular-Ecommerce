import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './services/api.service';
import { HttpClientModule } from "@angular/common/http";
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { CartComponent } from './pages/purchase/components/cart/cart.component';
import { SnackbarService } from './services/snackbar.service';
import { CartService } from './services/cart.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    PurchaseComponent,
    CartComponent,
    SpinnerComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, BrowserAnimationsModule,HttpClientModule],
  providers: [ApiService,SnackbarService,CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
