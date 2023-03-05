import { NgModule, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AngularImageViewerModule } from "@hreimer/angular-image-viewer";
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

//import { NgSelectModule } from '@ng-select/ng-select';
//import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';




@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularImageViewerModule,
    MatIconModule,
//    NgSelectModule,
//    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ])
  ],

// importsiin my�s DEFAULT_CURRENCY_CODE n�ytt�� hinnat euroina
  
    providers: [
      { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
      
  ],
  
  
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent
   ],
  
  
  
  
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
