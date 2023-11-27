import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent {
  
  constructor(private elementRef: ElementRef, private scrollService: ScrollService,
    private router: Router) { }

  ngOnInit() {
  }

  scrollTo(sectionId: string) {
    this.router.navigateByUrl('/home').then(() => {
      this.scrollService.scrollToSection(sectionId, 80);
    }); 
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const clickedElement = event.target as HTMLElement;
    const navbarToggler = this.elementRef.nativeElement.querySelector('.navbar-toggler');
    const navbarCollapse = this.elementRef.nativeElement.querySelector('.navbar-collapse');

    if (!navbarToggler.contains(clickedElement) && !navbarCollapse.contains(clickedElement) ) {
      navbarCollapse.classList.remove('show');
    }
  }

  closeNavbar() {
    const navbarCollapse = this.elementRef.nativeElement.querySelector('.navbar-collapse');
    navbarCollapse.classList.remove('show');
  }

}
