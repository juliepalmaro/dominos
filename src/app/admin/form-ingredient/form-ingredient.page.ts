import { Component, OnInit } from '@angular/core';
import IIngredient from '../../models/IIngredient';
import { IngredientService } from '../../services/ingredient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-form-ingredient',
    templateUrl: './form-ingredient.page.html',
    styleUrls: ['./form-ingredient.page.scss'],
})
export class FormIngredientPage implements OnInit {
    ingredient: IIngredient;
    id: number;

    constructor(private ingredientService: IngredientService,
        private activatedRoute: ActivatedRoute) { }

    async ngOnInit() {
        this.activatedRoute.params.subscribe((async params => {
            this.id = params.id;
            if (this.id) {
                this.ingredient = await this.ingredientService.get(this.id).toPromise();
            } else {
                this.ingredient = {
                    id: undefined,
                    nom: undefined,
                };
            }

        }));
    }

    async addIngredient() {
        if (this.id) {
            await this.ingredientService.update(this.ingredient).toPromise();
        } else {
            await this.ingredientService.create(this.ingredient).toPromise();
        }
        location.reload();
    }
}
