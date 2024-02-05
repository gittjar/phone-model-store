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
    this.cartService.addToCart(product);
    this._snackBar.open('Tuote on nyt lisatty ostoskoriin!', 'Sulje', {
      duration: 3000,
      panelClass: ['center-snackbar']
    });
  }
}