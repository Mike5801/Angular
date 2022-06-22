import { Component } from "@angular/core";
const pattern = /[0-9]{10,}/g
@Component({
    selector: 'phone',
    templateUrl: './phoneNum.component.html',
    styleUrls: ['./phoneNum.component.css']
})
export class PhoneNum {
    phoneNum: string = '';
    validPhone = false;
    validPhoneNum: string = '';
    
    constructor() {

    }

    ngOnInit(): void {
    }
    
    isNumber() {
        if (pattern.test(this.phoneNum)){
            return true;
        }
        return false;
    }

    isLengthTen() {
        if (this.phoneNum.length == 10) {
            return true;
        }
        return false;
    }

    isValidPhone() {
        if (!this.isNumber() || !this.isLengthTen()) {
            this.validPhone = false
            return false;
        }
        this.validPhone = true;
        return true;
    }

    onDisplayPhoneNum() {
        this.validPhoneNum = 'Your phone number is: ' + this.phoneNum;
    }
}