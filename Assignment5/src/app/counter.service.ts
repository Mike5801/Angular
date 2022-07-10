import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class CounterService {
    activeCounter = 0;
    inactiveCounter = 0;

    addActiveCounter () {
        this.activeCounter++;
    }

    addInactiveCounter () {
        this.inactiveCounter++;
    }
}