import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-project';
  recipe: boolean = true;
  shopping: boolean;


  onClickedRecipe(display: {recipe: boolean, shop: boolean}) {
    this.recipe = display.recipe;
    this.shopping = display.shop;
  }

  onClickedShopping(display: {recipe: boolean, shop: boolean}) {
    this.recipe = display.recipe;
    this.shopping = display.shop;
  }
}
