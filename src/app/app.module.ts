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
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CommunityComponent } from './components/community/community.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NotfoundComponent,
    NavmenuComponent,
    FormationComponent,
    AboutmeComponent,
    GalleryComponent,
    CommunityComponent,
    FooterComponent,
    CarouselComponent,
    TestimonialsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
