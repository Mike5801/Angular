import { Component } from '@angular/core';
import { AssignmentsService } from './services/assignments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AssignmentsService]
})
export class AppComponent {
  title = 'routing-practice';
}
