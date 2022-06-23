import { Component } from "@angular/core";

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class Details {
    showDetails = false;
    numberClicks = [];
    counter: number = 0;
   
    constructor() {

    }

    onShowDetails() {
        let timestamp = new Date();
        this.showDetails = true;
        this.counter = this.counter + 1;
        this.numberClicks.push('Timestamp: ' + timestamp.getTime() / 1000); // 
    }

    getColor(click) {
        //console.log(click);
        return this.numberClicks.indexOf(click) >= 4 ? 'blue' : 'none';
    }
}