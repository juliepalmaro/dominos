import { Component, OnInit } from '@angular/core';
import Pizza from '../models/Pizza';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.page.html',
  styleUrls: ['./pizza.page.scss'],
})
export class PizzaPage implements OnInit {
  pizza: Pizza;
  pizzas: Array<Pizza>;

  // Injection de dépendances
  constructor(private activatedRoute: ActivatedRoute) {
   }

  // Initialisation des variables
  ngOnInit() {
    this.pizzas = [
      {
        id: 'a',
        // tslint:disable-next-line: max-line-length
        picture: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0HBwcHBw0NBwcHBw0HBwcHDQ8IDQcNFREWFhURFRUYHSggGBoxJxUVITEhMSkrLi4uFx8zODMtNygtOisBCgoKBQYFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDKAixTCgAAAAAIoCKAAigigAigIKAgoCKAIKAgoAioCgAAAAAAAAAAAAAAAAAAAAAAAAAAAIqAoAAAAAAAAAAAAAAAAAAAAAAAAAAACKgKAAAAAAAAAAAAAAAAAAAAAAAAAAAAioCgAAAAAAAAAAAAAAAIoAACKAAACKAgoAioAKAIoAAAAAAAAAAAAAAAAAAAAAAAAAioCgAAAAAAAAAAAAAAAAAAAAAAAAAAAIqAoigAAAAAAAAAAAAAAAAAAAAAAAAAAIqAoigAAAACKAIoAAAAAAAAAAAAAigAAAACAKAAIoAAAAAgCgAAACKAAAAAAAAAAAAAioCgAAAAAAAAAAAAAAAAAAAAAAAAAAAIqACgCKAAAAAAAAAAAAAAAAAAAAAAAAAIqAqKAIoAAAACKACKAgoAAAigAAAAAAAAAACKAAAIoAAAAAAAAAAAAAAAAAAAAAAAACCoCiAKIAAAqACiAKIAogCiAKIAqACgAIACoAqAAAD/2Q==',
        name: 'Royale',
        price: 12,
        ingredients: ['champignon', 'jambon', 'rapé']
      }
    ];
    this.getOne(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  getOne(idP: string) {
    this.pizzas.forEach(piz => {
      if (piz.id === idP) {
        this.pizza = piz;
      }
    });
  }
}
