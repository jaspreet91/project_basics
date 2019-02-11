import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient} from '../../shared/ingredient.model';
import { ShoppinglistService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('amountInput') amountInput: ElementRef;
  @ViewChild('nameInput') nameInput: ElementRef;

  constructor( private shoppingService: ShoppinglistService) { }

  ngOnInit() {
  }

  addToList() {
    this.shoppingService.addToList(this.nameInput.nativeElement.value,
                                     this.amountInput.nativeElement.value);
  }

}
