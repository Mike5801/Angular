import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-or-odd',
  templateUrl: './even-or-odd.component.html',
  styleUrls: ['./even-or-odd.component.css']
})
export class EvenOrOddComponent implements OnInit {
  @Input() number: number;


  constructor() { }

  ngOnInit(): void {
  }
}
