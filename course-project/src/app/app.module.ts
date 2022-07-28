import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Header } from './header/header.component';
import { RecipeDetail } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItem } from './recipe/recipe-item/recipe-item.component';
import { RecipeList } from './recipe/recipe-list/recipe-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping/shopping-list.service';
import { ShoppingListEdit } from './shopping/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ShoppingList } from './shopping/shopping-list/shopping-list.component';
import { RecipeNotSelectedComponent } from './recipe/recipe-not-selected/recipe-not-selected.component';
import { NewRecipeComponent } from './recipe/new-recipe/new-recipe.component';
import { EditRecipeComponent } from './recipe/edit-recipe/edit-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    RecipeComponent,
    RecipeDetail,
    RecipeItem,
    RecipeList,
    ShoppingList,
    ShoppingListEdit,
    DropdownDirective,
    RecipeNotSelectedComponent,
    NewRecipeComponent,
    EditRecipeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
