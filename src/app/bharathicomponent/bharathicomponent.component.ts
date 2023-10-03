import { Component } from '@angular/core';

@Component({
  selector: 'app-bharathicomponent',
  templateUrl: './bharathicomponent.component.html',
  styleUrls: ['./bharathicomponent.component.scss']
})
export class BharathicomponentComponent {

  showElement = true;

  toggleElement() {
    this.showElement = !this.showElement;

  }
}