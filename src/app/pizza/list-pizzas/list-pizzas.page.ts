import { Component, OnInit } from '@angular/core';
import Pizza from '../../models/Pizza';
import { PizzaService } from '../../services/pizza.service';
import IPizza from '../../models/IPizza';

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

}
