import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Assignment } from 'src/app/models/assignment.model';
import { AssignmentsService } from 'src/app/services/assignments.service';
import { CanComponentDeactivate } from 'src/app/services/guards/can-deactivate.guard';

@Component({
  selector: 'app-new-assignment',
  templateUrl: './new-assignment.component.html',
  styleUrls: ['./new-assignment.component.css']
})
export class NewAssignmentComponent implements OnInit, CanComponentDeactivate {
  @Input() name: string;
  @Input() dueDate: Date;
  id: number;
  newAssignmentFilled: boolean = false;

  constructor(private assignmentsService: AssignmentsService) { }

  ngOnInit(): void {
  }

  onAddAssignment() {
    this.id = this.assignmentsService.assignments.length + 1;
    const assignment: Assignment = new Assignment(this.id, this.name, new Date(this.dueDate));
    this.assignmentsService.addAssignment(assignment);
    this.newAssignmentFilled = true;
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if ((this.name === undefined && this.dueDate === undefined) || this.newAssignmentFilled === true) {
      return true;
    } else {
      return confirm('Do you want to discard the assignment?');
    }
  };
}
