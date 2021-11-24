import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ICountry } from '../@interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private readonly url = 'http://localhost:3000/countries';
  constructor(private httpClient: HttpClient) { }
  getCountries(): Observable<ICountry[]> {
    return this.httpClient.get<ICountry[]>(this.url);
  }
}
