import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Assignment } from 'src/app/models/assignment.model';
import { AssignmentsService } from 'src/app/services/assignments.service';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {
  assignments: Assignment[];

  constructor(private assignmentsService: AssignmentsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.assignments = this.assignmentsService.getAssignmnets();
    this.assignmentsService.assignmentsAdded.subscribe(
      (assignmentsList: Assignment[]) => {
        this.assignments = assignmentsList;
      }
    )
  }
}
