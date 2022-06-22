import { Component } from "@angular/core";

@Component({
    selector: 'user',
    templateUrl: './user.component.html'
})
export class User {
    username: string = '';
    
    constructor() {
    }

    onResetUser() {
        this.username = '';
    }

}