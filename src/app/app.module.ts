import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { FormationComponent } from './components/formation/formation.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NotfoundComponent,
    NavmenuComponent,
    FormationComponent,
    WorkshopsComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    NgbModule
  ],
  providers: [], 
  bootstrap: [AppComponent] 
}) 
export class AppModule { } 
