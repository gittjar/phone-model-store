import { Component } from '@angular/core';
import { products } from '../products';
import { CartService } from '../cart.service';
import { Product } from '../products';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  product: Product | undefined;
  cartItemCount: number | undefined;
  images: string[] = [];

  //  määrittely true / false muuttaa väriä
  cardSGreen: string = '#06E703';
  cardSRed: string = '#E72203';

  constructor(private cartService: CartService, private _snackBar: MatSnackBar) { 
    this.cartService.cartItemCount.subscribe((count: number | undefined) => this.cartItemCount = count);
  }

  share() {
    window.alert('Ilmoitamme kun tuote saapuu!');
  }

  shareSome() {
    this._snackBar.open('Tuote jaettu onnistuneesti sosiaaliseen mediaan!', 'Ok', {
      duration: 3000,
      panelClass: ['center-snackbar']
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this._snackBar.open(`${product.name} lisätty ostoskoriin!`, 'Ok', {
      duration: 3000,
      panelClass: ['center-snackbar']
    });
  }
}