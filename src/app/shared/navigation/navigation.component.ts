import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public mobileNavIsActive = false;
  constructor() { }

  ngOnInit(): void {
  }

  public toggleMobileNavigation(): void {
    this.mobileNavIsActive = !this.mobileNavIsActive;
  }
}
