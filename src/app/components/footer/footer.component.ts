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
    this.scrollService.scrollToSection(sectionId);
  }

  closeNavbar() {
    const navbarCollapse = this.elementRef.nativeElement.querySelector('.navbar-collapse');
    navbarCollapse.classList.remove('show');
  }

  goToRoute(route: string): void {
    this.scrollService.goToRoute(route);
  }

} 
