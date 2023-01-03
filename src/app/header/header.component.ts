import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuIsOpen = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
    
    }
}