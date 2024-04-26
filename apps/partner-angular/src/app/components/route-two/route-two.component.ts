import { Component, TemplateRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbModal,
  NgbModalModule,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'pa-route-two',
  standalone: true,
  imports: [CommonModule, NgbModalModule],
  templateUrl: './route-two.component.html',
})
export class RouteTwoComponent {
  private modalService = inject(NgbModal);
  closeResult = '';

  open(content: TemplateRef<unknown>) {
    const modalR = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })

    modalR.shown.subscribe(() => {
      window.dispatchEvent(new CustomEvent('perch-widget:init'));
    });
  }
}
