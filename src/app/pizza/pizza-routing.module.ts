import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./list-pizzas/list-pizzas.module').then(m => m.ListPizzasPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./detail-pizza/detail-pizza.module').then(m => m.DetailPizzaPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaPageRoutingModule { }
