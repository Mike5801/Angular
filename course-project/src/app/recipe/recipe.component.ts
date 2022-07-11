import { Component, OnInit } from "@angular/core";
import { RecipeService } from "./recipe.service";
import { Recipe } from "./recipe.model";

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css'],
    providers: [RecipeService]
})

export class RecipeComponent implements OnInit{
    recipeSelectedItem: Recipe;

    constructor(private recipeService: RecipeService) {
        
    }

    ngOnInit(): void {
        this.recipeService.recipeSelected.subscribe(
            (recipe: Recipe) => {
                this.recipeSelectedItem = recipe;
            }
        );  
    }

    getSelectedRecipe(selectedRecipe: Recipe) {
        this.recipeSelectedItem = selectedRecipe;
        console.log(this.recipeSelectedItem);
    }
}