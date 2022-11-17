import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavbarService } from './side-navbar.service';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent {
  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );
  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sideNavbarService: SideNavbarService
  ) {}

  ngOnInit() {
    this.sideNavbarService.sideNavToggleSubject.subscribe(() => {
      this.sidenav.toggle();
    });
  }
}
