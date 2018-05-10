import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Quiz } from './quiz';

@Injectable()
export class QuizService {

  quizList: AngularFireList<any>;
  selectedQuiz: Quiz = new Quiz();
  constructor(private firebase: AngularFireDatabase) {
    this.quizList = this.firebase.list('quizzes');
  }

  getData() {
    this.quizList = this.firebase.list('quizzes');
    return this.quizList;
  }

  insertQuiz(quiz: Quiz) {
    this.quizList.push({
      question: quiz.question,
      answer1: quiz.answer1,
      answer2: quiz.answer2,
      answer3: quiz.answer3,
      answer4: quiz.answer4,
      rightAnswer: quiz.rightAnswer,
      points: quiz.points,
      level: quiz.level
    });
  }

  updateQuiz(emp: Quiz) {
    this.quizList.update(emp.key, {
      question: emp.question,
      answer1: emp.answer1,
      answer2: emp.answer2,
      answer3: emp.answer3,
      answer4: emp.answer4,
      rightAnswer: emp.rightAnswer,
      points: emp.points,
      level: emp.level
    });
  }

  deleteQuiz(key: string) {
    this.quizList.remove(key);
  }

}
