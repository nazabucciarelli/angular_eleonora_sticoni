// scroll.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

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

}
