import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPizzaPage } from './form-pizza.page';

const routes: Routes = [
  {
    path: '',
    component: FormPizzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPizzaPageRoutingModule {}
