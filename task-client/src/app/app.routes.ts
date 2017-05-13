import { Routes, RouterModule} from "@angular/router";
import { ProfileComponent } from './components/profile/profile.component';
import { MainModuleComponent } from './components/main-module/main-module.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "home",
    component: MainModuleComponent
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

export const routing = RouterModule.forRoot(routes);
