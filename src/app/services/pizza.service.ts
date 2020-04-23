import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Pizza from '../models/Pizza';

import { map } from 'rxjs/operators';
import IPizza from '../models/IPizza';


@Injectable({
    providedIn: 'root'
})
export class PizzaService {
    url = 'https://api.ynov.jcatania.io/pizza';

    constructor(private http: HttpClient) { }

    get(id: number): Observable<IPizza> {
        return this.http.get<IPizza>(this.url + '/' + id)
            .pipe(
                map(value => {
                    if (value) {
                        return value;
                    } else {
                        throw new Error('Aucune pizza trouvée');
                    }
                })
            );
    }

    getAll(): Observable<IPizza[]> {
        return this.http.get<IPizza[]>(this.url)
            .pipe(
                map(value => {
                    if (value && value.length > 0) {
                        return value;
                    } else {
                        throw new Error('Aucune pizza trouvée');
                    }
                })
            );
    }
}
