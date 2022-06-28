import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Header } from './header/header.component';
import { RecipeDetail } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeItem } from './recipe/recipe-item/recipe-item.component';
import { RecipeList } from './recipe/recipe-list/recipe-list.component';
import { Recipe } from './recipe/recipe.component';
import { ShoppingListEdit } from './shopping/shopping-list-edit/shopping-list-edit.component';
import { ShoppingList } from './shopping/shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Recipe,
    RecipeDetail,
    RecipeItem,
    RecipeList,
    ShoppingList,
    ShoppingListEdit,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }