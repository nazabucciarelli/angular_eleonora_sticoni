import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormationComponent } from './components/formation/formation.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CommunityComponent } from './components/community/community.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'formation', component: FormationComponent},
  {path: 'community',component: CommunityComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about-me', component: AboutmeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'workshops',component: WorkshopsComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
