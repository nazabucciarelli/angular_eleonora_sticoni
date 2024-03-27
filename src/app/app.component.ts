import { Component, OnInit, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

declare var AOS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private modalService = inject(NgbModal);
  private navigationSubscription: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.navigationSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          AOS.refresh();
          AOS.init();
        }, 1000); 
      }
    });

      setTimeout(()=> {
        this.open();
      },40000)
  }
 
	open() {
		const modalRef = this.modalService.open(ModalComponent, { centered: true });
	}

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }


}