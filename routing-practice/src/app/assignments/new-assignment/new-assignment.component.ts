import { Component, Input, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment.model';
import { AssignmentsService } from 'src/app/services/assignments.service';

@Component({
  selector: 'app-new-assignment',
  templateUrl: './new-assignment.component.html',
  styleUrls: ['./new-assignment.component.css']
})
export class NewAssignmentComponent implements OnInit {
  @Input() name: string;
  @Input() dueDate: Date;
  id: number;

  constructor(private assignmentsService: AssignmentsService) { }

  ngOnInit(): void {
  }

  onAddAssignment() {
    this.id = this.assignmentsService.assignments.length + 1;
    const assignment: Assignment = new Assignment(this.id, this.name, new Date(this.dueDate));
    this.assignmentsService.addAssignment(assignment);
  }

}
