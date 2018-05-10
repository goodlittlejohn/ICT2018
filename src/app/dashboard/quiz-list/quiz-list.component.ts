import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Quiz } from '../services/quiz';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizlist: Quiz[];
  constructor(private quizService: QuizService) { }

  ngOnInit() {
    var x = this.quizService.getData();
    x.snapshotChanges().subscribe(item => {
      this.quizlist = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["key"] = element.key;
        this.quizlist.push(y as Quiz);
      });
    });
  }

  onItemClick(emp: Quiz) {
    this.quizService.selectedQuiz = Object.assign({}, emp);
  }

}
