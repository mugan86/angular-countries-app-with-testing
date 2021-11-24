import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private subject: Subject<string> = new Subject<string>();
  private city$ = this.subject.asObservable();
  constructor() { }

  sendCity(city: string) {
    this.subject.next(city);
  }

  getCity(): Observable<string> {
    return this.city$;
  }
}
