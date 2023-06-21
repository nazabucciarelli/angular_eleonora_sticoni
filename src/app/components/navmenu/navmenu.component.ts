import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent {
  
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
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
