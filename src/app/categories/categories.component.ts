import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../shared/services/categories.service';
import { QuizService } from '../shared/services/quiz.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute,
    private quizzService: QuizService
    
  ) { }

  categories: any;
  playerName = '';
  searchCategorie = '';

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.quizzService.playerName = params['playerName'];
      this.playerName = params['playerName'];
    });

    this.initializeCategories()
  }

  initializeCategories() {
    this.categoriesService.getCategories().subscribe({
      next: (data) => {
        this.categories = data
        console.log(this.categories)
      }
    })
  }

  cancelFilter() {
    this.searchCategorie = ''
    this.initializeCategories()
  }

  chooseCategorie(id: number) {
    //console.log(name)
    //this.categoriesService.currentCategorie = name;
    this.quizzService.resetQuiz();
    this.router.navigate(['/quiz', this.playerName, id]);
  }

  onSubmit() {
    console.log('ICI')
    this.categoriesService.getCategorie(this.searchCategorie).subscribe({
      next: (data) => {
        this.categories = data
        console.log(this.categories)
      }
    })

  }

}
