import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeComponent } from "./recipe/recipe.component";
import { ShoppingList } from "./shopping/shopping-list/shopping-list.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes', component: RecipeComponent },
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