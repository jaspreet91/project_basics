import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  loggingFuntion(input: Ingredient[]) {
    console.log('new ingredient ' + input[input.length - 1].name + ' with quantity: ' +
    input[input.length - 1].amount + ' added to the list');
  }
}
