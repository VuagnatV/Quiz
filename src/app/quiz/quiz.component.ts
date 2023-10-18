import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { QuizService } from "../shared/services/quiz.service";
import { CategoriesService } from '../shared/services/categories.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  isQuizFinished = this.quizService.isQuizFinished;
  playerName = '';
  categorieId = 0;
  categorieName: any;
  
  constructor(
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizService.playerName = params['playerName'];
      this.playerName = params['playerName'];
      this.categorieId = params['categorieId']
    });
    this.categoriesService.getCategorieById(this.categorieId).subscribe({
      next: (data: any) => {
        this.categorieName = data[0].name
      }
    })
  }

  goToResultPage() {
    this.router.navigate(['/result']);
  }
}
