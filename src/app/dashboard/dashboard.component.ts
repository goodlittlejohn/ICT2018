import { Component, OnInit } from '@angular/core';
import { QuizService } from './services/quiz.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [QuizService]
})
export class DashboardComponent implements OnInit {

  constructor(private quizService: QuizService) { }

  ngOnInit() {
  }

}
