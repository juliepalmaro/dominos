import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListIngredientsPageRoutingModule } from './list-ingredients-routing.module';

import { ListIngredientsPage } from './list-ingredients.page';
import { IngredientService } from '../../services/ingredient.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListIngredientsPageRoutingModule
  ],
  declarations: [ListIngredientsPage],
  providers: [IngredientService]
})
export class ListIngredientsPageModule { }
