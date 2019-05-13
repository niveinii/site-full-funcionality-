import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { InventoryFilterPipe } from './home/inventory-filter.pipe';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import { ProductService } from './product-service.service';
import { ProductManagementComponent } from './product-management/product-management.component';
import { UserService } from './user-service.service';
import { LoginComponent } from './login/login.component';
import { CartService } from './cart-service.service';
import { CheckOutComponent } from './check-out/check-out.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    InventoryFilterPipe,
    ProductManagementComponent,
    LoginComponent,
    CheckOutComponent,
    ProductComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey:''})
  ],
  providers: [ProductService, UserService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
