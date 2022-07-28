import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetail implements OnInit{
    @Input() recipeSelectedDetail: Recipe

    constructor(private recipeService: RecipeService, private route: ActivatedRoute){ }

    ngOnInit(): void {
        this.route.params.subscribe(
            (params: Params) => {
                this.recipeSelectedDetail = this.recipeService.getRecipe(+params['id']);
            }
        )
    }

    addToShopping() {
        this.recipeService.addRecipeIngredients(this.recipeSelectedDetail.ingredients);
    }

}