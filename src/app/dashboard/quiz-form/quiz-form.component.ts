import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent implements OnInit {

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if (form.value.key == null)
      this.quizService.insertQuiz(form.value);
    else
      this.quizService.updateQuiz(form.value);
    this.resetForm(form);
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.quizService.selectedQuiz = {
      key: null,
      question: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: '',
      rightAnswer: '',
      points: 0,
      level: 0
    }
  }

  onDelete(form: NgForm) {
    this.quizService.deleteQuiz(form.value.key);
    this.resetForm(form);
  }

}
