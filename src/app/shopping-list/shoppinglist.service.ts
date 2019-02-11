import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  constructor() { }
  getShoppingList() {
    return this.ingredients.slice();
  }

  addToList(name: string, amount: number) {
  this.ingredients.push({
    name: name,
    amount: amount
  });
  this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
