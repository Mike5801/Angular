import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    admin: boolean = false;

    constructor() { }

    loginAsAddmin() {
        this.admin = true;
    }

    logout() {
        this.admin = false;
    }

    
}