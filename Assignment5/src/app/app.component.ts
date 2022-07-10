import { Component, DoCheck, OnInit } from '@angular/core';
import { CounterService } from './counter.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent implements OnInit, DoCheck{
  activeUsers: string[];
  inactiveUsers: string[];
  countActiveChange = 0;
  countInactiveChange = 0;

  constructor(private usersService: UsersService,
    private counterService: CounterService) { }


  ngOnInit(): void {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  ngDoCheck(): void {
    this.countActiveChange = this.counterService.activeCounter;
    this.countInactiveChange = this.counterService.inactiveCounter;
  }


}
