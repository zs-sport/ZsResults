import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import { map } from 'rxjs/operators'

import { Country, Base } from "zs-core";
import { CountryImpl } from "zs-country";
import { CountryServiceAbs } from "zs-country";
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";

@Injectable()
export class CountryService extends CountryServiceAbs {

    private countries: Array<Country>;
    private countryCollection: AngularFirestoreCollection<Country>;
   
    constructor(private angularFirestore: AngularFirestore) {
        super();

        this.countryCollection = this.angularFirestore.collection('country');
    }

    create(country: Country): Observable<Country> {
        this.countries.push(country);

        return new Observable<Country>(observer => {
            observer.next(country);
        });
    }

    delete(country: Country): Observable<Country> {
        this.get(country._id).subscribe(country => {
            let index = this.countries.indexOf(country);

            this.countries.splice(index, 1);
        });

        return new Observable<Country>(observer => {
            observer.next(country);
        });
    }

    get(id: string): Observable<Country> {
        return new Observable<Country>(observer => {
            let country: Country;

            this.countries.forEach(item => {
                if (item._id === id) {
                    country = item;
                }
            });

            observer.next(country);
        })
    }

    list(): Observable<Country[]> {
        return this.countryCollection.valueChanges();
    }

    update(country: Country): Observable<Country> {
        let i;

        this.countries.forEach((item, index) => {
            if (country._id === item._id) {
                i = index;
            }
        });

        if (i) {
            this.countries[i] = country;
        }

        return new Observable<Country>(observer => {
            observer.next(country);
        });
    }
}
