import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../../services/pizza.service';
import IPizza from '../../models/IPizza';
import ICartItem from '../../models/ICartItem';

@Component({
    selector: 'app-list-pizzas',
    templateUrl: './list-pizzas.page.html',
    styleUrls: ['./list-pizzas.page.scss'],
})
export class ListPizzasPage implements OnInit {
    pizzas: IPizza[];
    constructor(private pizzaService: PizzaService) { }

    async ngOnInit() {
        this.pizzas = await this.pizzaService.getAll().toPromise();
    }

    addPizza(pizza: IPizza) {
        console.log('test');
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
    }
}
