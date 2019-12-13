import { Injectable } from '@angular/core';
import { Observable , Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InfiniteScrollService {

  constructor() { }

  private subject = new Subject<any>();

  scrolled() {
    this.subject.next('scrolled from service');
  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }
}
