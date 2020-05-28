import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import IIngredient from '../models/IIngredient';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class IngredientService {
    url = 'https://api.ynov.jcatania.io/ingredient';

    constructor(private http: HttpClient) { }

    get(id: number): Observable<IIngredient> {
        return this.http.get<IIngredient>(this.url + '/' + id)
            .pipe(
                map(value => {
                    if (value) {
                        return value;
                    } else {
                        throw new Error('Aucun ingrédient trouvé');
                    }
                })
            );
    }

    getAll(): Observable<IIngredient[]> {
        return this.http.get<IIngredient[]>(this.url)
            .pipe(
                map(value => {
                    if (value && value.length > 0) {
                        return value;
                    } else {
                        throw new Error('Aucun ingrédient trouvé');
                    }
                })
            );
    }

    create(ingredient: IIngredient) {
        return this.http.post<IIngredient>(this.url, ingredient)
            .pipe(
                map(value => {
                    if (value) {
                        return value;
                    } else {
                        throw new Error('Aucun ingrédient trouvé');
                    }
                })
            );
    }

    update(ingredient: IIngredient) {
        return this.http.put<IIngredient>(this.url + '/' + ingredient.id, ingredient)
            .pipe(
                map(value => {
                    if (value) {
                        return value;
                    } else {
                        throw new Error('Aucun ingrédient trouvé');
                    }
                })
            );
    }

    delete(ingredient: IIngredient) {
        return this.http.delete<IIngredient>(this.url + '/' + ingredient.id)
            .pipe(
                map(value => {
                    if (value) {
                        return value;
                    } else {
                        throw new Error('Aucun ingrédient trouvé');
                    }
                })
            );
    }
}
