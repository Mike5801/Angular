import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CounterService } from '../counter.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  providers: [CounterService]
})

export class ActiveUsersComponent {
  @Input() users: string[];

  constructor(private usersService: UsersService) { }

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }
}
