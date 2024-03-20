import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
	standalone: true,
	templateUrl: './modal.component.html'
})
export class ModalComponent {
  activeModal = inject(NgbActiveModal);

  redirectToWhatsapp() {
    window.open("https://chat.whatsapp.com/I0Rif00qVrHADsNVF6qt6v","_blank");
    this.activeModal.close()
  }
      
}
