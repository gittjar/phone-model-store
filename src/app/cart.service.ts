import { Injectable } from '@angular/core';
import { Product } from './products';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  cartItemCount = new BehaviorSubject<number>(0);
  quantity: number = 0;

  addToCart(product: Product) {
    let item = this.items.find(item => item.id === product.id);
    if (item) {
      item.quantity = item.quantity ?? 0;
      item.quantity++;
    } else {
      product.quantity = 1;
      this.items.push(product);
    }
    this.updateItemCount();
  }

  increaseItem(product: Product) {
    let item = this.items.find(item => item.id === product.id);
    if (item) {
      item.quantity = item.quantity ?? 0;
      item.quantity++;
    }
    this.updateItemCount();
  }

  decreaseItem(product: Product) {
    let item = this.items.find(item => item.id === product.id);
    if (item && item.quantity && item.quantity > 1) {
      item.quantity--;
    }
    this.updateItemCount();
  }

  removeItem(product: Product) {
    const index = this.items.findIndex(item => item.id === product.id);
    if (index > -1) {
      this.items.splice(index, 1);
    }
    this.updateItemCount();
  }

  getItems() {
    return this.items;
  }

  getShippingPrices() {
    return of([
      { type: 'Standard', price: 5 },
      { type: 'Express', price: 10 },
      { type: 'Overnight', price: 25 },
      { type: 'International', price: 40},
      { type: 'Free', price: 0},
      { type: 'Pickup', price: 0}
    ]);
  }

  clearCart() {
    this.items = [];
    this.updateItemCount();
    return this.items;
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + (item.price * (item.quantity || 0)), 0);
  }

  private updateItemCount() {
    this.cartItemCount.next(this.items.reduce((count, item) => count + (item.quantity || 0), 0));
  }
}