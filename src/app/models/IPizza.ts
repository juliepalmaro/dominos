import IIngredient from './IIngredient';

export default interface IPizza {
    id: number;
    photo: string;
    nom: string;
    prix: number;
    ingredients: Array<number>;
}
