import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private data: DataService) { }

  message: string;

  questionNum: number = 1;

  ngOnInit() {
    this.data.someMessage.subscribe(message => this.message = message);
  }

  newMessage() {
    this.data.changeMessage("Changed data from create-listing")
  }

  questions: Array<string> = ["Last year ___ women took to the streets of Seoul to protest the wave of revenge porn", 
  "The founder of the Me Too Movement is _____", 
  "One in __ American women will be raped at some point in their lives", 
  "__% of rapes occur while the victim is at work", 
  "__% of women who are raped attempt suicide", 
  "More than __% of sexual assault victims on college campuses do not report the assault", 
  "It is estimated that __ percent of chronically hungry people in the world are women and girls", 
  "Women make up more than two-thirds of the world's 796 million illiterate people", 
  "The United States has never had a female-identifying president",
  ""
];

  answer: string = "True";

  counter: number = 0;

  handleAnswer() {
    alert("Correct answer: True");
    this.counter++;
    if (this.counter == 9) {
      alert("Thanks for learning")
    }
  }
}
