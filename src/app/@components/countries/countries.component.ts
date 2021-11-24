import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ICountry } from 'src/app/@interfaces/country';
import { CountriesService } from 'src/app/@services/countries.service';
import { SharedService } from 'src/app/@services/shared.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  countries$!: Observable<ICountry[]>;
  constructor(
    private countriesService: CountriesService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.countries$ = this.countriesService.getCountries();
  }

  sendCity(city: string) {
    this.sharedService.sendCity(city);
  }
}
