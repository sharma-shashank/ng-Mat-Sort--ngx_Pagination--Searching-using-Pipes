import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
const endpoint = 'http://demo9197058.mockable.io/users';

@Injectable()
export class TableService {
    arr = [];
    constructor(private http: Http) { }

    list() {
        return this.http.get(endpoint)
            .map(response => response.json());

    }
    get(id: any) {
        return this.http.get(endpoint)
            .map(response => {
                const data = response.json().filter(item => {
                    if (item.id == id) {
                         this.arr.push(item);

                    }
                });

                if (this.arr.length === 1) {
                    return this.arr[0];
                }

                return this.arr;
            });
    }

}
