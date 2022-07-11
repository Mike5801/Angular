import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../../shopping-list.service";

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEdit implements OnInit{
    @ViewChild('nameInput', {static: false}) nameInput: ElementRef;
    @ViewChild('amountInput', {static: false}) amountInput: ElementRef;

    ingredient: Ingredient;
    
    constructor(private shoppingService: ShoppingListService) {
        
    }

    ngOnInit(): void {
        
    }

    addIngredient() {
        this.ingredient = new Ingredient(this.nameInput.nativeElement.value, 
            parseInt(this.amountInput.nativeElement.value));
        
        this.shoppingService.addIngredient(this.ingredient);
    }
}