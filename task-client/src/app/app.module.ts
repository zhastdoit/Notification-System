import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainModuleComponent } from './components/main-module/main-module.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FootbarComponent } from './components/footbar/footbar.component';
import { DataService } from "./services/data.service";
import { AuthService } from "./services/auth.service";
import { RouterModule } from '@angular/router';
import { routing } from "./app.routes";
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NewMessageComponent } from './components/new-message/new-message.component';
import { MessageModuleComponent } from './components/message-module/message-module.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageDetailComponent } from './components/message-detail/message-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainModuleComponent,
    NavbarComponent,
    FootbarComponent,
    ProfileComponent,
    LoginComponent,
    SidebarComponent,
    NewMessageComponent,
    MessageModuleComponent,
    MessageListComponent,
    MessageDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    RouterModule
  ],
  providers: [{
    provide: "auth",
    useClass: AuthService
  },{
    provide: "data",
    useClass: DataService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
