import { Component, OnInit } from '@angular/core';
import Pizza from '../../models/Pizza';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../../services/pizza.service';
import IPizza from '../../models/IPizza';
import IIngredient from '../../models/IIngredient';
import { IngredientService } from '../../services/ingredient.service';
import { CartPage } from '../../cart/cart.page';
import ICartItem from '../../models/ICartItem';

@Component({
    selector: 'app-detail-pizza',
    templateUrl: './detail-pizza.page.html',
    styleUrls: ['./detail-pizza.page.scss'],
})
export class DetailPizzaPage implements OnInit {
    pizza: IPizza;
    pizzaId: number;
    ingredients: IIngredient[];

    // Injection de dépendances
    constructor(private activatedRoute: ActivatedRoute,
        private pizzaService: PizzaService,
        private ingredientService: IngredientService) {
    }

    // Initialisation des variables
    async ngOnInit() {
        this.activatedRoute.params.subscribe((async params => {
            this.pizzaId = params.id;
            this.ingredients = [];

            this.getOne(this.pizzaId);
        }));
    }

    async getOne(id: number) {
        this.pizza = await this.pizzaService.get(id).toPromise();
        // console.log('get : ' + this.pizza);
        this.getIngredients();
    }

    getIngredients() {
        this.pizza.ingredients.forEach(async id => {
            this.ingredients.push(await this.ingredientService.get(id).toPromise());
        });
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
