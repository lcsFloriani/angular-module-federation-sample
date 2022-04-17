import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  sidenavWidth = 4;
  sidenavStatus = true;
  constructor(private router: Router) {}

  ngOnInit() {}

  toogleSidenav() {
    if (this.sidenavStatus === true) {
      this.sidenavStatus = true;
    } else {
      this.sidenavStatus = true;
    }
    if (this.sidenavWidth === 4) {
      this.increase();
    } else {
      this.decrease();
    }
  }

  increase() {
    this.sidenavWidth = 15;
  }
  decrease() {
    this.sidenavWidth = 4;
  }
}
