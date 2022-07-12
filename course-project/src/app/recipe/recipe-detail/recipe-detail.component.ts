import { Component, Input } from "@angular/core";
import { ShoppingListService } from "src/app/shopping/shopping-list.service";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetail {
    @Input() recipeSelectedDetail: Recipe

    constructor(private recipeService: RecipeService){ }

    addToShopping() {
        this.recipeService.addRecipeIngredients(this.recipeSelectedDetail.ingredients);
    }

}