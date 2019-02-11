import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list/shoppinglist.service';
import { NgForOf } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  shoppingIngredients = new EventEmitter<{name: string, amount: number}>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
     'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
     [{name: 'butter chicken', amount: 1}]),
    new Recipe('Another Test Recipe',
     'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
     [{name: 'buuter naan', amount: 2}])
  ];

  constructor( private shoppingListService: ShoppinglistService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToList(addIngredientsToList: Recipe) {
    addIngredientsToList.ingredients.forEach(element => {
  this.shoppingListService.addToList(element.name, element.amount);
 });
   alert('ingredients added to shopping list');
  }
}


