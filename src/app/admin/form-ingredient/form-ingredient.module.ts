import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormIngredientPageRoutingModule } from './form-ingredient-routing.module';

import { FormIngredientPage } from './form-ingredient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormIngredientPageRoutingModule
  ],
  declarations: [FormIngredientPage]
})
export class FormIngredientPageModule {}
