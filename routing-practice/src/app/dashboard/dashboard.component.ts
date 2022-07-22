import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNavSubjc() {
    this.router.navigate(['subjects']);
  }

  onNavAssign() {
    this.router.navigate(['assignments']);
  }

  onNavReports() {
    this.router.navigate(['reports']);
  }

  onNavAH() {
    this.router.navigate(['assign_hist']);
  }

  onNavWL() {
    this.router.navigate(['workspace_links']);
  }
}
