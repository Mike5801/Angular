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
  assignment: Assignment;
  allowEdit: boolean = false;
  allowDelete: boolean = false;

  constructor(private route: ActivatedRoute, private assignmentsService: AssignmentsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.assignment = this.assignmentsService.getAssignment(+params['id'])
      }
    )
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
        this.allowDelete = queryParams['allowDelete'] === '1' ? true : false;
      }
    )
  }

}
