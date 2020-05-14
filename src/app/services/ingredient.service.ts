import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
