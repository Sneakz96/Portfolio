import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  openMbMenu(){
    let mbBtn = document.getElementById('mb-menu-btn');
    let mbMenu = document.getElementById('mb-menu');
  
    
  }
}