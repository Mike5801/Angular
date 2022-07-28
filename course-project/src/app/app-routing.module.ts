import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditRecipeComponent } from "./recipe/edit-recipe/edit-recipe.component";
import { NewRecipeComponent } from "./recipe/new-recipe/new-recipe.component";
import { RecipeDetail } from "./recipe/recipe-detail/recipe-detail.component";
import { RecipeNotSelectedComponent } from "./recipe/recipe-not-selected/recipe-not-selected.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { ShoppingList } from "./shopping/shopping-list/shopping-list.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes', component: RecipeComponent, children: [
        { path: 'new-recipe', component: NewRecipeComponent },
        { path: 'edit-recipe', component: EditRecipeComponent },
        { path: 'recipe-not-selected', component: RecipeNotSelectedComponent },
        { path: ':id', component: RecipeDetail },
    ] },
    { path: 'shopping-list', component: ShoppingList }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}