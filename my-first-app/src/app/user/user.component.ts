import { Component } from "@angular/core";

@Component({
    selector: 'user',
    templateUrl: './user.component.html'
})
export class User {
    username: string = '';
    
    constructor() {
    }

    isEmpty() {
        if (this.username == '') {
            return true;
        }
        return false;
    }

    onResetUser() {
        this.username = '';
    }

}