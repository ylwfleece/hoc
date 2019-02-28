import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hoc1';

  ngOnInit() {
  }

  showFirst: boolean = true;
  showSecond: boolean = false;

  toggleFirst() {
    this.showFirst = false;
    this.showSecond = true;
  }

  toggleSecond() {
    this.showSecond = false;
  }
}
