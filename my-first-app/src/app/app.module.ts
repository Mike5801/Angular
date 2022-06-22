import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlert } from './warningAlert/warningAlert.component';
import { SuccessAlert } from './successAlert/successAlert.component';
import { Alerts } from './alerts/alerts.component';
import { ErrorAlert } from './errorAlert/errorAlert.component';
import { User } from './user/user.component';
import { PhoneNum } from './phoneNum/phoneNum.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlert,
    SuccessAlert,
    ErrorAlert,
    Alerts,
    User,
    PhoneNum
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
