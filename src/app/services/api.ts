import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Course {
  _id: string;
  title: string;
  instructor: string;
  category: string;
  price: number;
  duration: string;
  level: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<any>(`${this.apiUrl}/courses`).pipe(
      map(response => response.data.courses)
    );
  }
}