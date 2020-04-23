import { Component, OnInit } from '@angular/core';
import Pizza from '../../models/Pizza';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../../services/pizza.service';
import IPizza from '../../models/IPizza';

@Component({
    selector: 'app-detail-pizza',
    templateUrl: './detail-pizza.page.html',
    styleUrls: ['./detail-pizza.page.scss'],
})
export class DetailPizzaPage implements OnInit {
    pizza: IPizza;
    pizzaId: number;

    // Injection de dépendances
    constructor(private activatedRoute: ActivatedRoute, private pizzaService: PizzaService) {
    }

    // Initialisation des variables
    async ngOnInit() {
        this.activatedRoute.params.subscribe((async params => {
            this.pizzaId = params.id;
            // this.getOne(this.pizzaId);
            this.pizza = await this.pizzaService.get(this.pizzaId).toPromise();
            console.log('test : ' + this.pizza);
        }));
    }

    async getOne(id: number) {
        console.log('test');
        //   this.pizzaService.get(idP)
        //       .subscribe(pizza => this.pizza = pizza,
        //           error => {
        //               this.error = error;
        //               this.loading = false;
        //       }, () => {
        //           this.loading = false;
        //       });
        this.pizza = await this.pizzaService.get(id).toPromise();
        console.log('get : ' + this.pizza);
    }
}
