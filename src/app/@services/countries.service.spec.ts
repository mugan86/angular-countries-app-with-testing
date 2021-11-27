import { environment } from './../../environments/environment';
import { async, inject, TestBed, waitForAsync } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CountriesService } from './countries.service';

describe('CountriesService', () => {
  let service: CountriesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountriesService],
    });
    service = TestBed.inject(CountriesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it(
    `should fetch posts as an Observable`,
    waitForAsync(
      inject(
        [HttpTestingController, CountriesService],
        (
          httpClient: HttpTestingController,
          countriesService: CountriesService
        ) => {
          const countries = [
            {
              name: 'Afghanistan',
              capital: 'Kabul',
            },
            {
              name: 'Albania',
              capital: 'Tirana',
            },
            {
              name: 'Algeria',
              capital: 'Alger',
            },
            {
              name: 'American Samoa',
              capital: 'Fagatogo',
            },
          ];
          countriesService.getCountries().subscribe((posts: any) => {
            expect(posts.length).toBe(4);
          });
          let req = httpMock.expectOne(environment.apiUrl);
          expect(req.request.method).toBe('GET');

          req.flush(countries);
          httpMock.verify();
        }
      )
    )
  );
});
