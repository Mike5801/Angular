import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    constructor (private shoppingService: ShoppingListService) { }

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 
        'A super-tasty Schnitzel', 
        'https://cdn7.kiwilimon.com/recetaimagen/860/12668.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20) 
        ]),
        new Recipe('Big Fat Burger', 
        'What else you need to say?', 
        'https://www.burgerking.com.mx/wp-media-folder-bk-mex//home/ubuntu/wordpress/web/app/uploads/sites/3/2021/02/bk-whopper-jr-1200x800-1.png',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1),
            new Ingredient('Cheese', 1),
            new Ingredient('Tomatoes', 1)
        ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    addRecipeIngredients(recipeIngredients: Ingredient[]) {
        this.shoppingService.addRecipeIngredients(recipeIngredients);
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }
}