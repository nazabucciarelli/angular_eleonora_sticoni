import { Component, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel', // Definimos el selector que usaremos en el HTML
    templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig], // Agregamos los proveedores necesarios
  encapsulation: ViewEncapsulation.None

})
export class CarouselComponent {
  showNavigationArrows = true;
  showNavigationIndicators = true;


}