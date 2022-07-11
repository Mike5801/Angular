import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'Test description', 'https://i2.wp.com/shewearsmanyhats.com/wp-content/uploads/2014/05/mothers-day-desserts-2.jpg'),
        new Recipe('Test Recipe 2', 'Test description 2', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F20%2F212721-Indian-Chicken-Curry-Murgh-Kari-mfs_004.jpg'),
        new Recipe('Test Recipe 3', 'Data binding between components', 'https://www.acouplecooks.com/wp-content/uploads/2021/03/Cheese-Tortellini-011-735x919.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}