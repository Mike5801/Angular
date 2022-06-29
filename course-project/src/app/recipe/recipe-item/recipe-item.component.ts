import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})

export class RecipeItem {
    @Input() recipeItem: Recipe;
    @Output() recipeItemClicked = new EventEmitter<void>();

    constructor() {

    }

    onRecipeClick() {
        this.recipeItemClicked.emit();
    }
}