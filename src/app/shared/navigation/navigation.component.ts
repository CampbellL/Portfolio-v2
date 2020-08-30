import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Scroll} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public mobileNavIsActive = false;
  @Input() public navBackGround;
  constructor() { }

  ngOnInit(): void {
  }

  public toggleMobileNavigation(): void {
    this.mobileNavIsActive = !this.mobileNavIsActive;
  }
  @HostListener('window:scroll')
  public onNavScroll(event: Scroll){
    this.navBackGround = window.scrollY > 100;
  }
}
