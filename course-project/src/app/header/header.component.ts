import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class Header {
    collapsed = true;
    @Output() recipeClicked = new EventEmitter<{recipe: boolean, shop: boolean}>();
    @Output() shoppingClicked = new EventEmitter<{recipe: boolean, shop: boolean}>();

    constructor() {

    }

    onRecipesClick() {
        this.recipeClicked.emit({
            recipe: true,
            shop: false
        })
    }

    onShoppingClick() {
        this.shoppingClicked.emit({
            recipe: false,
            shop: true
        })
    }
}