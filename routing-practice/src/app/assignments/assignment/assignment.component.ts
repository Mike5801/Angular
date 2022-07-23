import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Assignment } from 'src/app/models/assignment.model';
import { AssignmentsService } from 'src/app/services/assignments.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  assignment: Assignment

  constructor(private route: ActivatedRoute, private assignmentsService: AssignmentsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.assignment = this.assignmentsService.getAssignment(+params['id'])
      }
    )
  }

}
