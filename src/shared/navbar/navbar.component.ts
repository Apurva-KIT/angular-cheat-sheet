import { Component, OnInit } from '@angular/core';
import { SideNavbarService } from '../side-navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private sideNavbarService: SideNavbarService) {}

  clickMenu() {
    this.sideNavbarService.toggle();
  }
}
