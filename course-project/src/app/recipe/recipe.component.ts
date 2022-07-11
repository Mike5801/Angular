import { Component } from "@angular/core";
import { RecipeService } from "./recipe.service";
import { Recipe } from "./recipe.model";

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css'],
    providers: [RecipeService]
})

export class RecipeComponent {
    recipeSelectedItem: Recipe;

    constructor() {
        
    }

    getSelectedRecipe(selectedRecipe: Recipe) {
        this.recipeSelectedItem = selectedRecipe;
        console.log(this.recipeSelectedItem);
    }
}