import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  email :string = "";

  emailConfirm :string = "a";

  enter() {
    // if email matches
    if (this.email == this.emailConfirm) {
      // save email to data
      
    }
  }
}
