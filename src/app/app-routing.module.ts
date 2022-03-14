import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ApprenantsComponent} from "./components/apprenants/apprenants.component";
import {FormateursComponent} from "./components/formateurs/formateurs.component";
import {FormationsComponent} from "./components/formations/formations.component";
import {VisioComponent} from "./components/visio/visio.component";
import {NavComponent} from "./components/nav/nav.component";
import { ProfileAppComponent } from './components/profile-app/profile-app.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'app',component: ApprenantsComponent},
  {path:'form',component: FormateursComponent},
  {path:'formation',component: FormationsComponent},
  {path:'visio',component: VisioComponent},
  //{path:'admin/firststep',component: LoginAdminComponent},
  {path:'nav',component: NavComponent},
  //{path:'plan',component: PlanningComponent},
  //{path:'aform',component: AddformComponent},
  //{path:'comptform/:id',component: FormateurCompteComponent},
  {path:'comptApp/:id',component:  ProfileAppComponent},
  //{path:'addapp',component: AddformAppComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
