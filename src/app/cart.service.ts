import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);
  private totalPrice = new BehaviorSubject<number>(0);

  cartItemCount$ = this.cartItemCount.asObservable();
  totalPrice$ = this.totalPrice.asObservable();

  constructor(private http: HttpClient) {}

  addToCart(product: Product, quantity: number = 1) {
    const existingProduct = this.items.find(item => item.id === product.id);
    if (existingProduct) {
      if (existingProduct.quantity) {
        existingProduct.quantity += quantity;
      } else {
        existingProduct.quantity = quantity;
      }
    } else {
      product.quantity = quantity;
      this.items.push(product);
    }
    this.updateCart();
  }

  removeFromCart(product: Product, quantity: number = 1) {
    const existingProduct = this.items.find(item => item.id === product.id);
    if (existingProduct) {
      if (existingProduct.quantity) {
        existingProduct.quantity -= quantity;
        if (existingProduct.quantity <= 0) {
          this.items = this.items.filter(item => item.id !== product.id);
        }
      }
    }
    this.updateCart();
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.updateCart();
  }

  getShippingPrices(): Observable<any> {
    return this.http.get('/assets/shipping.json');
  }

  private updateCart() {
    const itemCount = this.items.reduce((count, item) => count + (item.quantity ?? 0), 0);
    const totalPrice = this.items.reduce((total, item) => total + (item.price * (item.quantity ?? 0)), 0);
    this.cartItemCount.next(itemCount);
    this.totalPrice.next(totalPrice);
  }
}