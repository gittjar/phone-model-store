import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class CartService {
  items: Product[] = [];
  
 // http pyynnöllä haetaan tiedot "palvelimelta" 
  getShippingPrices() 
  {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json'); 
  }  
  
   constructor(private http: HttpClient) { }
  
// addtocart liitetty nappiin, lisää tuotteen ostoskoriin
  addToCart(product: Product) 
  {
    this.items.push(product);
  }

  getItems() 
  {
    return this.items;
  }

 // clearCart() {
 //   this.items = [];
 //   return this.items; 
// }

  clearCart() {
    this.items = []
    return this.items;
  }

	


}