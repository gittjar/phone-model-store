import { Component } from '@angular/core';
import { products } from '../products';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  product: Product | undefined;

    //  määrittely true / false muuttaa väriä
    cardSGreen: string = '#06E703';
    cardSRed: string = '#E72203';

  constructor(private cartService: CartService) { }

  share() {
    window.alert('Ilmoitamme kun tuote saapuu!');
  }

  shareSome() {
    window.alert('Tuote jaettu sosiaaliseen mediaan!');
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Tuote on nyt lisatty ostoskoriin!');
  }
}