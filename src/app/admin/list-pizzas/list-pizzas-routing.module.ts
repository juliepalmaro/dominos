import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPizzasPage } from './list-pizzas.page';

const routes: Routes = [
  {
    path: '',
    component: ListPizzasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPizzasPageRoutingModule {}
