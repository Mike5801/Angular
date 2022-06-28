import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<{
    counter: number;
  }>();

  counter: number = 0;
  count;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(): void {
    this.count = setInterval(() => {
      this.counter++;
      this.gameStarted.emit({
        counter: this.counter
      })
    }, 1000);
  }

  onStopGame(): void {
    clearInterval(this.count);
  }

}
