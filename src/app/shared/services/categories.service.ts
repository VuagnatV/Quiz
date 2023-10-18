import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get('http://localhost:3000/categories');
  }

  getCategorieByName(categorie: string) {
    return this.http.get(`http://localhost:3000/categories?name=${categorie}`)
  }

  getCategorieById(id: number) {
    return this.http.get(`http://localhost:3000/categories?id=${id}`)
  }
}
