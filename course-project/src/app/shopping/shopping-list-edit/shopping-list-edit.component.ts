import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEdit {
    @ViewChild('nameInput', {static: false}) nameInput: ElementRef;
    @ViewChild('amountInput', {static: false}) amountInput: ElementRef;
    @Output() ingredientAdded = new EventEmitter<Ingredient>();

    ingredient: Ingredient;
    
    constructor() {
        
    }

    addIngredient() {
        this.ingredient = new Ingredient(this.nameInput.nativeElement.value, 
            parseInt(this.amountInput.nativeElement.value));
        this.ingredientAdded.emit(
            this.ingredient
        )
    }
}