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
    UserComponent
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
