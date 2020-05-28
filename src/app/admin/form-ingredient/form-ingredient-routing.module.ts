import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormIngredientPage } from './form-ingredient.page';

const routes: Routes = [
  {
    path: '',
    component: FormIngredientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormIngredientPageRoutingModule {}
