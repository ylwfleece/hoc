import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

import { AppComponent } from './app.component';
import { QuestionComponent } from 'src/app/components/question/question.component';
import { IntroComponent } from 'src/app/components/intro/intro.component';

const routes: Routes = [{ path: 'question', component: QuestionComponent }, { path: 'intro', component: IntroComponent }];;

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
