import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pa-route-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './route-one.component.html',
})
export class RouteOneComponent implements OnInit {

  ngOnInit(): void {
    window.dispatchEvent(new CustomEvent('perch-widget:init'));
  }
}
