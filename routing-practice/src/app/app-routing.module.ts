import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SubjectsComponent } from "./subjects/subjects.component";
import { AssignmentsComponent } from "./assignments/assignments.component";
import { ReportsComponent } from "./reports/reports.component";
import { AssigHistComponent } from "./assig-hist/assig-hist.component";
import { WorkspaceLinksComponent } from "./workspace-links/workspace-links.component";
import { UserComponent } from "./user/user.component";

const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'subjects', component: SubjectsComponent },
    { path: 'assignments', component: AssignmentsComponent },
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