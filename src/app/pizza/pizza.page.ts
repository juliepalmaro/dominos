import { Component, OnInit } from '@angular/core';
import Pizza from '../models/Pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.page.html',
  styleUrls: ['./pizza.page.scss'],
})
export class PizzaPage implements OnInit {
  pizza: Pizza;

  // Injection de dépendances
  constructor() { }

  // Initialisation des variables
  ngOnInit() {
    this.getOne('1');
  }

  getOne(idP: string) {
    this.pizza = {
      id: idP,
      picture: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0HBwcHBw0NBwcHBw0HBwcHDQ8IDQcNFREWFhURFRUYHSggGBoxJxUVITEhMSkrLi4uFx8zODMtNygtOisBCgoKBQYFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDKAixTCgAAAAAIoCKAAigigAigIKAgoCKAIKAgoAioCgAAAAAAAAAAAAAAAAAAAAAAAAAAAIqAoAAAAAAAAAAAAAAAAAAAAAAAAAAACKgKAAAAAAAAAAAAAAAAAAAAAAAAAAAAioCgAAAAAAAAAAAAAAAIoAACKAAACKAgoAioAKAIoAAAAAAAAAAAAAAAAAAAAAAAAAioCgAAAAAAAAAAAAAAAAAAAAAAAAAAAIqAoigAAAAAAAAAAAAAAAAAAAAAAAAAAIqAoigAAAACKAIoAAAAAAAAAAAAAigAAAACAKAAIoAAAAAgCgAAACKAAAAAAAAAAAAAioCgAAAAAAAAAAAAAAAAAAAAAAAAAAAIqACgCKAAAAAAAAAAAAAAAAAAAAAAAAAIqAqKAIoAAAACKACKAgoAAAigAAAAAAAAAACKAAAIoAAAAAAAAAAAAAAAAAAAAAAAACCoCiAKIAAAqACiAKIAogCiAKIAqACgAIACoAqAAAD/2Q==',
      name: 'Royale',
      price: 12,
      ingredients: ['champignon', 'jambon', 'rapé']
    };
  }

}
