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

  answers: Array<Array<string>> = [
    ["Dozens", "50", "1,000", "70,000"],
    ["Whitney Cummings", "Tarana Burke", "Logan Browning", "Tessa Thompson"],
    ["True", "False"],
    ["35, 40", "25, 34", "15, 20", "6, 71"],
    ["True", "False"],
    ["True", "False"],
    ["23, 15", "4, 1", "1, 0", "10, 3"],
    ["13", "2", "6", "18"],
    ["90", "8", "25", "45"],
    ["True", "False"],
    ["55", "25", "10", "<1"],
    ["1", "2", "4", "7"],
    ["7", "231", "340", "400"],
    ["True", "False"],
    ["True", "False"],
    ["True", "False"],
    ["True", "False"],
    ["True", "False"],
    ["True", "False"],
    ["45, 42", "3, 4", "5, 13", "52, 19"],
    ["True", "False"],
    ["40", "400", "4,000", "40,000"],
    ["1941", "1961", "2008", "2014"],
    ["1800", "1891", "1910", "1920"],
    ["Beyonce", "Martha Stewart", "Hillary Clinton", "Susan B. Anthony"],
    ["True", "False"],
    ["True", "False"],
    ["True", "False"],
    ["True", "False"],
    ["True", "False"],
    ["True", "False"],
    ["True", "False"],
    ["True", "False"],
    ["True", "False"],
    ["True", "False"],
    ["True", "False"],
    ["True", "False"],
    ["3,000", "30,000", "300,000", "3,000,000"],
    ["300", "3,000", "30,000", "300,000"]
  ]

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
