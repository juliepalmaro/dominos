export default class Pizza {
    id: string;
    picture: string;
    name: string;
    price: number;
    ingredients: Array<string>;

    constructor(id: string, picture: string, name: string, price: number, ingredients: Array<string>) {
        this.id = id;
        this.picture = picture;
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
    }
}
