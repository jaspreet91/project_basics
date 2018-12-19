import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { LoggingService } from '../shared/logging.service';
import { ShoppinglistService } from './shoppinglist.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppinglistService]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor( private loggingService: LoggingService,
               private shoppingListService: ShoppinglistService
             ) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getShoppingList();
  }

  onIngredientAdded(ingredientAdded: Ingredient) {
    this.ingredients.push(ingredientAdded);
    this.loggingService.loggingFuntion(this.ingredients);
  }

}
