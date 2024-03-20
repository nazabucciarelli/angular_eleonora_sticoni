import { Component, OnInit, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private modalService = inject(NgbModal);

  constructor() { }

  ngOnInit() {
      setTimeout(()=> {
        this.open();
      },40000)
  }
 
	open() {
		const modalRef = this.modalService.open(ModalComponent, { centered: true });
	}

}