import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

	items = this.cartService.getItems();
	delete = this.cartService.clearCart();
	
	  checkoutForm = this.formBuilder.group({
    		name: '',
    		address: ''
  											});

  constructor(
    
    private cartService: CartService,
    private formBuilder: FormBuilder, 
    
  ) { }
  
  	  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  
   // clearCart(): void {
   //this.cartService.items = []
  //  console.alert('Ostoskorisi on tyhjennetty!');
  }
    
  }

