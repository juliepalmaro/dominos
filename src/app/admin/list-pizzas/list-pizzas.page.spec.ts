import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListPizzasPage } from './list-pizzas.page';

describe('ListPizzasPage', () => {
  let component: ListPizzasPage;
  let fixture: ComponentFixture<ListPizzasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPizzasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListPizzasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
