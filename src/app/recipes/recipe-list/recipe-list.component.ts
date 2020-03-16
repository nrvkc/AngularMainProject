import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[]=[
  new Recipe('A Test Recipe','This is simply a test','https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-and-Spinach-Pasta-skillet-1-480x270.jpg')

]; //array of recipes of Type Recipe
  constructor() { }

  ngOnInit(): void {
  }

}
