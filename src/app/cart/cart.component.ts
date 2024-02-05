import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';
import { Product } from '../products';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  items = this.cartService.getItems();
  orderSubmitted = false;
  itemCount = 0;
  itemCountSubscription: Subscription | undefined;
  checkoutForm: any;

  constructor(
    @Inject(CartService) private cartService: CartService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy() {
    if (this.itemCountSubscription) {
      this.itemCountSubscription.unsubscribe();
    }
  }

  totalPrice = this.cartService.getTotalPrice();

  onSubmit(): void {
    this.cartService.clearCart();
    this.checkoutForm.reset();
    this.orderSubmitted = true;
    this.snackBar.open('Tilauksesi on tehty!', 'Ok', {
      duration: 2000,
      panelClass: ['center-snackbar']
    });
  }

  increaseItem(item: Product): void {
    this.cartService.increaseItem(item);
  }

  decreaseItem(item: Product): void {
    this.cartService.decreaseItem(item);
  }
}