import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 5)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

    addRecipeIngredients(recipeIngredients: Ingredient[]) {
        //this.ingredients = this.ingredients.concat(recipeIngredients);
        this.ingredients.push(...recipeIngredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}