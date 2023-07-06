import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent {
  tabs = [
    { label: 'Personas', route: '/persons' },
    { label: 'Viajes', route: '/travels' },
    { label: 'Colectivos', route: '/buses' }
  ];
  activeLink = this.tabs[0];

}
