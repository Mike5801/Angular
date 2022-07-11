import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Recipe } from '../recipe.model';
import { RecipeService } from "../recipe.service";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeList implements OnInit {
    @Output() recipeItemWasClicked = new EventEmitter<Recipe>();
    
    recipes: Recipe[];

    constructor(private recipeService: RecipeService) {
        
    }

    ngOnInit(): void {
        this.recipes = this.recipeService.getRecipes();
    }

    onRecipeClicked(selectedRecipe: Recipe) {
        this.recipeItemWasClicked.emit(
            selectedRecipe
        )
    }
}