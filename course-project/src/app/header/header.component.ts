import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class Header {
    collapsed = true;
    @Output() featureClicked = new EventEmitter<string>();

    constructor() {

    }

    onRecipesClick(feature: string) {
        this.featureClicked.emit(
            feature
        )
    }

    onShoppingClick(feature: string) {
        this.featureClicked.emit(
            feature
        )
    }
}