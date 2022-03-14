import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ApprenantsComponent } from './components/apprenants/apprenants.component';
import { FormateursComponent } from './components/formateurs/formateurs.component';
import { FormationsComponent } from './components/formations/formations.component';
import { VisioComponent } from './components/visio/visio.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormateursPipe } from './pipes/formateurs.pipe';
import { ApprenantsPipe } from './pipes/apprenants.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { ProfileAppComponent } from './components/profile-app/profile-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApprenantsComponent,
    FormateursComponent,
    FormationsComponent,
    VisioComponent,
    NavComponent,
    FooterComponent,
    FormateursPipe,
    ApprenantsPipe,
    ProfileAppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
