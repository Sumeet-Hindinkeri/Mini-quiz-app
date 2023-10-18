import { Component } from '@angular/core';
import * as quizData from '../quizData.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  questions = quizData;
  currentQuestionIndex = 0;
  selectedAnswer: string = '';
  score = 0;

  selectAnswer(answer: string): void {
    this.selectedAnswer = answer;
  }

  nextQuestion(): void {
    if (this.selectedAnswer === this.questions[this.currentQuestionIndex].answer) {
      this.score++;
    }
    this.selectedAnswer = '';
    this.currentQuestionIndex++;
  }
}
