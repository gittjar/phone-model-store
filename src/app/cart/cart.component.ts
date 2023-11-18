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
  orderSubmitted = false; // Flag to track if the order has been submitted


  checkoutForm = this.formBuilder.group({
    		name: '',
    		address: '' });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,  
  ) 
  { }
  
  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.cartService.clearCart();
    this.checkoutForm.reset();
    this.orderSubmitted = true; // Set the flag to true after submitting the form

  }
    
  }

