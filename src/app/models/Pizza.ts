export default class Pizza {
    id: number;
    photo: string;
    nom: string;
    prix: number;
    ingredients: Array<string>;

    constructor(id: number, photo: string, nom: string, prix: number, ingredients: Array<string>) {
        this.id = id;
        this.photo = photo;
        this.nom = nom;
        this.prix = prix;
        this.ingredients = ingredients;
    }
}
