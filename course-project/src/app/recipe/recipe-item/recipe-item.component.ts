import { Component, Input, OnInit} from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})

export class RecipeItem implements OnInit{
    @Input() recipeItem: Recipe;


    constructor(private recipeService: RecipeService) {

    }

    ngOnInit(): void {
        
    }

    onRecipeClick() {
        this.recipeService.recipeSelected.emit(this.recipeItem);
    }
}