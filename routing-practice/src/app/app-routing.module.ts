import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SubjectsComponent } from "./subjects/subjects.component";
import { AssignmentsComponent } from "./assignments/assignments.component";
import { ReportsComponent } from "./reports/reports.component";
import { AssigHistComponent } from "./assig-hist/assig-hist.component";
import { WorkspaceLinksComponent } from "./workspace-links/workspace-links.component";
import { UserComponent } from "./user/user.component";
import { TdAssignmentsComponent } from "./dashboard/td-assignments/td-assignments.component";
import { ErrorEstimationComponent } from "./dashboard/error-estimation/error-estimation.component";
import { EfficiencyComponent } from "./dashboard/efficiency/efficiency.component";
import { HomeComponent } from "./home/home.component";
import { NewAssignmentComponent } from "./assignments/new-assignment/new-assignment.component";
import { AssignmentListComponent } from "./assignments/assignment-list/assignment-list.component";
import { AssignmentComponent } from "./assignments/assignment/assignment.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent, children: [
        { path: 'to_do_assignments', component: TdAssignmentsComponent },
        { path: 'error_estimation_avg', component: ErrorEstimationComponent },
        { path: 'efficiency', component: EfficiencyComponent },
    ]},
    { path: 'subjects', component: SubjectsComponent },
    { path: 'assignments', component: AssignmentsComponent, children: [
        { path: 'new_assignment', component: NewAssignmentComponent },
        { path: 'assignment_list', component: AssignmentListComponent, children: [
            { path: ':id', component: AssignmentComponent}
        ] },
    ] },
    { path: 'reports', component: ReportsComponent },
    { path: 'assign_hist', component: AssigHistComponent },
    { path: 'workspace_links', component: WorkspaceLinksComponent },
    { path: 'user', component: UserComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}