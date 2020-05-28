import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPizzaPageRoutingModule } from './form-pizza-routing.module';

import { FormPizzaPage } from './form-pizza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPizzaPageRoutingModule
  ],
  declarations: [FormPizzaPage]
})
export class FormPizzaPageModule {}
