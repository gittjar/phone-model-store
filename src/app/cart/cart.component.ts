import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  items: Product[] = [];
  itemCount: number = 0;
  totalPrice: number = 0;
  checkoutForm!: FormGroup;
  private itemCountSubscription!: Subscription;
  private totalPriceSubscription!: Subscription;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      address: ''
    });
  
    this.itemCountSubscription = this.cartService.cartItemCount$.subscribe((count: number) => this.itemCount = count);
    this.totalPriceSubscription = this.cartService.totalPrice$.subscribe((price: number) => this.totalPrice = price);
  }

  ngOnDestroy() {
    this.itemCountSubscription.unsubscribe();
    this.totalPriceSubscription.unsubscribe();
  }

  increaseQuantity(item: Product) {
    this.cartService.addToCart(item);
  }

  decreaseQuantity(item: Product) {
    this.cartService.removeFromCart(item);
  }

  onSubmit(): void {
    // Process checkout data here
    this.cartService.clearCart();
    this.items = [];
    this.checkoutForm.reset();
    console.warn('Your order has been submitted', this.checkoutForm.value);
  }
}