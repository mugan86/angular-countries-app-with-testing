import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { ICountry } from '../@interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private readonly url = 'https://raw.githubusercontent.com/mugan86/angular-countries-app-with-testing/master/src/assets/db/countries.json';
  constructor(private httpClient: HttpClient) { }
  getCountries(): Observable<ICountry[]> {
    return this.httpClient.get<ICountry[]>(this.url).pipe(
      map((result: any) => {
        return result.countries
      })
    );
  }
}
