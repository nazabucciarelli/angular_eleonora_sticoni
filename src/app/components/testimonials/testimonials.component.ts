import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {

  constructor(private router: Router) { }

  goToRoute(route: string): void {
    window.scrollTo(0, 0);
    this.router.navigateByUrl(route);
  }
}
