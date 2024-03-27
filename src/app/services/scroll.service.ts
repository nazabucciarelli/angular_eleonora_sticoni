// scroll.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private router: Router) { }


  scrollToSection(sectionId: string, offset: number = 0) {
    const elemento = document.getElementById(sectionId);
    if (elemento) {
      const posicion = elemento.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: posicion - offset,
        behavior: 'smooth'
      });
    }
  }


  goToRoute(route: string): void {
    if (window.scrollY <= 100) {
      this.router.navigateByUrl(route);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.addEventListener('scroll', () => {
        if (window.scrollY === 0) {
          this.router.navigateByUrl(route);
          window.removeEventListener('scroll', () => { });
        }
      });
    }
  }

}
