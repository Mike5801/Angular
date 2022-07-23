import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ReportsComponent } from './reports/reports.component';
import { AssigHistComponent } from './assig-hist/assig-hist.component';
import { WorkspaceLinksComponent } from './workspace-links/workspace-links.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { TdAssignmentsComponent } from './dashboard/td-assignments/td-assignments.component';
import { ErrorEstimationComponent } from './dashboard/error-estimation/error-estimation.component';
import { EfficiencyComponent } from './dashboard/efficiency/efficiency.component';
import { HomeComponent } from './home/home.component';
import { NewAssignmentComponent } from './assignments/new-assignment/new-assignment.component';
import { AssignmentListComponent } from './assignments/assignment-list/assignment-list.component';
import { AssignmentComponent } from './assignments/assignment/assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SubjectsComponent,
    ReportsComponent,
    AssigHistComponent,
    WorkspaceLinksComponent,
    NavbarComponent,
    AssignmentsComponent,
    UserComponent,
    TdAssignmentsComponent,
    ErrorEstimationComponent,
    EfficiencyComponent,
    HomeComponent,
    NewAssignmentComponent,
    AssignmentListComponent,
    AssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
