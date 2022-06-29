import { Component } from "@angular/core";

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']
})

export class Recipe {
    recipeSelectedItem: Recipe;

    constructor() {
        
    }

    getSelectedRecipe(selectedRecipe: Recipe) {
        this.recipeSelectedItem = selectedRecipe;
        console.log(this.recipeSelectedItem);
    }
}