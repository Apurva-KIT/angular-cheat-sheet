import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class SideNavbarService {
  public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject(
    null
  );

  constructor() {}

  toggle() {
    return this.sideNavToggleSubject.next(null);
  }
}
