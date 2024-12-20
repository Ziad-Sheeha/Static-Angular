import { Component } from '@angular/core';
import { ControlComponent } from '../../../../shared/control/control.component';
import { ButtonComponent } from '../../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // titleInput: Html;

  onSubmit(title: string, ticketText: string) {
    console.log(title, ticketText);
  }
}
