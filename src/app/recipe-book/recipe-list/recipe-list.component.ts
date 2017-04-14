import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe Name', 'Recipe Description 1', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('A Test Recipe Name', 'Recipe Description 2', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('A Test Recipe Name', 'Recipe Description 3', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),

  ];
  constructor() { }

  ngOnInit() {
  }

  addNewRecipe() {
    this.recipes.push(new Recipe('A New Recipe', 'This is the description', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'))
  }
}
