import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPizzasPageRoutingModule } from './list-pizzas-routing.module';

import { ListPizzasPage } from './list-pizzas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPizzasPageRoutingModule
  ],
  declarations: [ListPizzasPage]
})
export class ListPizzasPageModule {}
