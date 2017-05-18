import { Routes, RouterModule} from "@angular/router";
import { ProfileComponent } from './components/profile/profile.component';
import { MainModuleComponent } from './components/main-module/main-module.component';
import { NewMessageComponent } from './components/new-message/new-message.component';
import { MessageModuleComponent } from './components/message-module/message-module.component';
import { MessageDetailComponent } from './components/message-detail/message-detail.component';

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
    path: 'messages',
    component: MessageModuleComponent
  },{
    path: "**",
    redirectTo: "home"
  }
];

export const routing = RouterModule.forRoot(routes);
