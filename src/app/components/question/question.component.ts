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
    "The founders of Black Lives Matter are women of color",
    "One in __ American women and one in __ American men will be raped at some point in their lives",
    "8% of rapes occur while the victim is at work",
    "81% of women report significant short- or long-term impacts such as Post-Traumatic Stress Disorder (PTSD) after being raped",
    "__% of college women and __% of college men are victims of forced sex during their time in college",
    "__% of women who are raped attempt suicide",
    "More than __% of sexual assault victims on college campuses do not report the assault",
    "Rape is the most under-reported crime; 63% of sexual assaults are not reported to police",
    "__% of sexual assaults occur at or near a victim’s home",
    "__ out of 10 rapes are committed by someone known to the victim",
    "Of 1,000 cases of sexual assault, ___ lead to felony conviction",
    "It is estimated that __ percent of chronically hungry people in the world are women and girls",
    "Women make up more than two-thirds of the world's 796 million illiterate people",
    "In most countries, women in rural areas who work for wages are more likely than men to hold seasonal, part-time and low-wage jobs. Women also receive lower wages for the same work.",
    "Women make up fewer elected representatives in most rural councils. In Asia, this ranges between 1.6 percent in Sri Lanka and 31 percent in Pakistan.",
    "The United States has never had a female-identifying president",
    "In Peru, less than 5 percent of the total amount of rural domestic violence survivors (60 percent) sought help, compared to approximately 16 percent of urban women (out of 49 percent)",
    "Black girls between 2011 and 2012 accounted for 45 percent of all girls suspended from K-12 public schools nationally, and they represented 42 percent of all girls expelled.",
    "The “Pink Tax” refers to the annual $1,000+ more dollars women spend than men on everyday purchases like deodorant",
    "In Brazil, over ____ women have been murdered for simply being women in the past ten years.",
    "In ____, Guatemala was the first country in Latin America to pass a new law to prevent violence against women; although, little has been done to support the law",
    "The 19th Amendment to the U.S. Constitution granted American women the right to vote, a right known as women's suffrage, and was ratified on August 18, ____, ending almost a century of protest.",
    "_____ was an American social reformer and women's rights activist who played a pivotal role in the women's suffrage movement.",
    "Beyoncé Giselle Knowles-Carter is an American singer, songwriter, actress, record producer and dancer. Born and raised in Houston, Texas, Beyoncé performed in various singing and dancing competitions as a child. She rose to fame in the late 1990s as lead singer of the R&B girl-group Destiny's Child",
    "Emma Watson was criticised in March 2017 for a photograph published by Vanity Fair in which her breasts are partly visible; some in the news media accused Watson of hypocrisy. She was bemused by the backlash, arguing that feminism 'is not a stick with which to beat other women' but is instead about freedom, liberation and equality, commenting 'I really don't see what my tits have to do with it'",
    "Women in rural areas of the global south are often forced out of their homes into the wild when they get their periods, leaving them vulnerable to physical attacks",
    "Less than 7% of the Fortune 500 CEOs are women",
    "Women constitute over 60% of minimum wage workers in US",
    "Women make up less than 20% of the US top earners",
    "Women make up less than 25% of top earners in all high income countries, including Australia, Canada, Denmark, Italy, New Zealand, Norway, Spain, UK and US",
    "‘In October 2012, on my way home from school, a masked gunman boarded my school bus and asked, ‘Who is Malala?’ He shot me on the left side of my head.’ This is a real quote by Malala Yousafzai",
    "Saudi Arabian women cannot travel out of the country without a man’s permission",
    "Up until 2018 women in Saudi Arabia women could not legally drive",
    "7 countries in Latin America rank in the top 10 countries in the world for the most domestic violence against women",
    "About ___ girls in 30 countries are at risk of undergoing female genital mutilation every year",
    "More than _____ women die annually around the world due to complication during pregnancy or childbirth"
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
