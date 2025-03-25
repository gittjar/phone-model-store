import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from '../cart.service';
import { Product } from '../products';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

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
    private formBuilder: FormBuilder,
    public dialog: MatDialog
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
    const currentQuantity = this.cartService.getItemQuantity(item);
    if (currentQuantity > 1) {
      this.cartService.removeFromCart(item);
    } else {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '250px',
        data: { item },
        disableClose: true,
        hasBackdrop: true,
        panelClass: 'confirm-dialog-center'
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.cartService.removeFromCart(item);
          this.items = this.cartService.getItems(); // Refresh the cart items
        }
      });
    }
  }

  onSubmit(): void {
    // Process checkout data here
    this.cartService.clearCart();
    this.items = [];
    this.checkoutForm.reset();
    console.warn('Your order has been submitted', this.checkoutForm.value);
  }
}