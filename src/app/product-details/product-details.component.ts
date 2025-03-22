import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute, 
    private cartService: CartService, 
    private location: Location,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  }

  goBack(): void {
    this.location.back();
  }

  addToCart(product: Product) {
    if (this.quantity > 0) {
      this.cartService.addToCart(product, this.quantity);
      this._snackBar.open(`${product.name} lisätty ostoskoriin! Määrä: ${this.quantity}`, 'Sulje', {
        duration: 3000,
        panelClass: ['center-snackbar']
      });
    }
  }

  updateQuantity(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.quantity = Number(inputElement.value);
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
}