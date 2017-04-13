import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  page = "shoppingList";

  constructor() { }

  ngOnInit() {
  }
  
  selectPage (page) {
    this.page = page;
  }
}
