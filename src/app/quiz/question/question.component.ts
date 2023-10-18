import { Component, OnInit } from '@angular/core';
import { QuizService } from "../../shared/services/quiz.service";
import { CategoriesService } from 'src/app/shared/services/categories.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  quizContent: any[] = this.quizService.quizContent;
  categorieId = 0;

  constructor(
    private quizService: QuizService,
    private categorieService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params)
      this.categorieId = params['categorieId']
      console.log(this.categorieId)
    });
    this.quizService.getQuizContent(this.categorieId);
  }
}
