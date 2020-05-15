import { Component, OnInit } from '@angular/core';
import IPizza from '../../models/IPizza';
import { PizzaService } from '../../services/pizza.service';

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
