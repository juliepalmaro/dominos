import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPizzasPageRoutingModule } from './list-pizzas-routing.module';

import { ListPizzasPage } from './list-pizzas.page';
import { PizzaService } from '../../services/pizza.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPizzasPageRoutingModule
  ],
  declarations: [ListPizzasPage],
  providers: [PizzaService]
})
export class ListPizzasPageModule { }
