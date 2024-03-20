import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private modalService = inject(NgbModal);

  constructor(public router: Router) { }

  ngOnInit() {
    // Suscribirse al evento de navegación
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
      setTimeout(()=> {
        this.open();

      },40000)
  }

  
	open() {
		const modalRef = this.modalService.open(ModalComponent, { centered: true });
	}
  

}