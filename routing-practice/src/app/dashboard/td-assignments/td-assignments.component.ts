import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assignment } from 'src/app/models/assignment.model';
import { AssignmentsService } from 'src/app/services/assignments.service';

@Component({
  selector: 'app-td-assignments',
  templateUrl: './td-assignments.component.html',
  styleUrls: ['./td-assignments.component.css']
})
export class TdAssignmentsComponent implements OnInit {
  assignments : Assignment[];

  constructor(private assignmentsService: AssignmentsService, private router: Router) { }

  ngOnInit(): void {
    this.assignments = this.assignmentsService.assignments;
    this.assignmentsService.assignmentsAdded.subscribe(
      (assignmentsEvent: Assignment[]) => {
        this.assignments = assignmentsEvent; 
      }
    )
  }
}
