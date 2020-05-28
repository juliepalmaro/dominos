import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormIngredientPage } from './form-ingredient.page';

describe('FormIngredientPage', () => {
  let component: FormIngredientPage;
  let fixture: ComponentFixture<FormIngredientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormIngredientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormIngredientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
