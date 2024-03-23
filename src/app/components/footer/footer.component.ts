import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private elementRef: ElementRef, private scrollService: ScrollService,
    private router: Router) { }

  ngOnInit() {
  }

  scrollTo(sectionId: string) {
    this.router.navigateByUrl('/home').then(() => {
      this.scrollService.scrollToSection(sectionId, 80);
    }); 
    this.closeNavbar();
  }

  closeNavbar() {
    const navbarCollapse = this.elementRef.nativeElement.querySelector('.navbar-collapse');
    navbarCollapse.classList.remove('show');
  }

  goToRoute(route: string): void {
    window.scrollTo(0, 0); // Esto asegura que la página se desplace a la parte superior antes de cambiar la ruta
    this.router.navigateByUrl(route);
    this.closeNavbar();
  }

} 
