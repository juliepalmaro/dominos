import { Component, OnInit } from '@angular/core';
import ICartItem from '../models/ICartItem';
import IPizza from '../models/IPizza';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.page.html',
    styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
    cart: ICartItem[];
    constructor() { }

    ngOnInit() {
        this.cart = JSON.parse(localStorage.getItem('cart'));
    }

    addPizza(pizza: IPizza) {
        let cart: ICartItem[] = JSON.parse(localStorage.getItem('cart'));

        if (!cart) {
            cart = [];
        }

        const index = cart.findIndex(x => x.pizza.id === pizza.id);
        if (index === -1) {
            cart.push({ pizza, quantity: 1 });
        } else {
            cart[index].quantity++;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload();
    }

    removePizza(pizza: IPizza) {
        let cart: ICartItem[] = JSON.parse(localStorage.getItem('cart'));

        if (!cart) {
            cart = [];
        }

        const index = cart.findIndex(x => x.pizza.id === pizza.id);
        if (index !== -1) {
            cart[index].quantity--;
            if (cart[index].quantity === 0) {
                cart.splice(index, 1);
            }
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload();
    }

    deletePizza(pizza: IPizza) {
        let cart: ICartItem[] = JSON.parse(localStorage.getItem('cart'));

        if (!cart) {
            cart = [];
        }

        const index = cart.findIndex(x => x.pizza.id === pizza.id);
        if (index !== -1) {
            cart.splice(index, 1);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload();
    }

}
