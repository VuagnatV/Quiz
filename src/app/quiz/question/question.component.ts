import { Component, OnInit } from '@angular/core';
import { QuizService } from "../../shared/services/quiz.service";
import { CategoriesService } from 'src/app/shared/services/categories.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  quizContent: any[] = this.quizService.quizContent;

  constructor(
    private quizService: QuizService,
    private categorieService: CategoriesService
    ) { }

  ngOnInit(): void {
    this.quizService.getQuizContent(this.categorieService.currentCategorie);
  }
}
