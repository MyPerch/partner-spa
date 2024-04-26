import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  standalone: true,
  imports: [NgbModule, RouterModule],
  selector: 'pa-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'partner-angular';
}
