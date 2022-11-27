import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

import { Location } from '@angular/common';
// Location on back -nappia varten

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  
  product: Product | undefined;

	
   //location lisätään myös constructoriin 
  constructor(private route: ActivatedRoute, private cartService: CartService, private location: Location) { }
  
  ngOnInit() {
  // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  this.product = products.find(product => product.id === productIdFromRoute);
  
  
}
//goback napin metodi kyseessa
  goBack(): void {
    this.location.back();
}
   
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Tuote on nyt lisatty ostoskoriin!');
    
  
  }

}