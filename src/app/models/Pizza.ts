import Ingredient from './Ingredient';

export default class Pizza {
    id: number;
    photo: string;
    nom: string;
    prix: number;
    ingredients: Array<number>;

    constructor(id: number, photo: string, nom: string, prix: number, ingredients: Array<number>) {
        this.id = id;
        this.photo = photo;
        this.nom = nom;
        this.prix = prix;
        this.ingredients = ingredients;
    }
}
