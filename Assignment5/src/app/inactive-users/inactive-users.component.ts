import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterService } from '../counter.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  providers: [CounterService]
})

export class InactiveUsersComponent {
  @Input() users: string[];

  constructor(private usersService: UsersService) { }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
  }
}
