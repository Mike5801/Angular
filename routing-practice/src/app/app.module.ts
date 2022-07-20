import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ReportsComponent } from './reports/reports.component';
import { AssigHistComponent } from './assig-hist/assig-hist.component';
import { WorkspaceLinksComponent } from './workspace-links/workspace-links.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SubjectsComponent,
    ReportsComponent,
    AssigHistComponent,
    WorkspaceLinksComponent,
    NavbarComponent,
    AssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
