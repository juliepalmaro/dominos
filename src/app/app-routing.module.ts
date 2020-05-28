import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pizzas',
    pathMatch: 'full'
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'pizzas',
    loadChildren: () => import('./pizza/pizza.module').then(m => m.PizzaPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: 'admin/pizzas',
    loadChildren: () => import('./admin/list-pizzas/list-pizzas.module').then(m => m.ListPizzasPageModule)
  },
  {
    path: 'admin/ingredients',
    loadChildren: () => import('./admin/list-ingredients/list-ingredients.module').then(m => m.ListIngredientsPageModule)
  },
  {
    path: 'admin/pizzas/:id',
    loadChildren: () => import('./admin/form-pizza/form-pizza.module').then(m => m.FormPizzaPageModule)
  },
  {
    path: 'admin/ingredients/form/:id',
    loadChildren: () => import('./admin/form-ingredient/form-ingredient.module').then(m => m.FormIngredientPageModule)
  },
  {
    path: 'admin/ingredients/form',
    loadChildren: () => import('./admin/form-ingredient/form-ingredient.module').then(m => m.FormIngredientPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
