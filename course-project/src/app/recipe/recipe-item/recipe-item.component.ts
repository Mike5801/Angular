import { Component, Input, OnInit} from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})

export class RecipeItem implements OnInit{
    @Input() recipeItem: Recipe;
    @Input() id: number;


    constructor() {

    }

    ngOnInit(): void {
        
    }
}