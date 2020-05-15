import { Component, OnInit } from '@angular/core';
import IIngredient from '../../models/IIngredient';
import { IngredientService } from '../../services/ingredient.service';

@Component({
    selector: 'app-list-ingredients',
    templateUrl: './list-ingredients.page.html',
    styleUrls: ['./list-ingredients.page.scss'],
})
export class ListIngredientsPage implements OnInit {

    ingredients: IIngredient[];
    constructor(private ingredientService: IngredientService) { }

    async ngOnInit() {
        this.ingredients = await this.ingredientService.getAll().toPromise();
    }

}
