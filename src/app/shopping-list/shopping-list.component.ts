import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("block", "cheese", 4), 
    new Ingredient("carton", "eggs", 3), 
    new Ingredient("jug", "almond milk", 1), 
    new Ingredient("loaf", "bread", 2), 
  ]
  constructor() { }

  ngOnInit() {
  }

}
