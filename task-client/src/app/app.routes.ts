import { Routes, RouterModule} from "@angular/router";
import { ProfileComponent } from './components/profile/profile.component';
import { MainModuleComponent } from './components/main-module/main-module.component';
import { NewMessageComponent } from './components/new-message/new-message.component';
import { MessageModuleComponent } from './components/message-module/message-module.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }, {
    path: "profile",
    component: ProfileComponent
  }, {
    path: "home",
    component: MainModuleComponent
  }, {
    path: 'message',
    component: MessageModuleComponent,
    children: [{
      path: "newmessage",
      component: NewMessageComponent,
      outlet: 'newmsg'
    },{
      path: "messagelist",
      component: MessageListComponent,
      outlet: 'msglist'
    },{
      path: "sidebar",
      component: SidebarComponent,
      outlet: 'sidebar'
    }]
  }, {
    path: "**",
    redirectTo: "home"
  }
];

export const routing = RouterModule.forRoot(routes);
