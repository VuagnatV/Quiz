import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  currentCategorie: string = ''

  getCategories() {
    return this.http.get('http://localhost:3000/categories');
  }

  getCategorie(categorie: string) {
    return this.http.get(`http://localhost:3000/categories?name=${categorie}`)
  }
}
