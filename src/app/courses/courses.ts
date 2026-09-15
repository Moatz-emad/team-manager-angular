import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiService, Course } from '../services/api';

@Component({
  selector: 'app-courses',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class Courses {
  courses = signal<Course[]>([]);
  loading = signal(false);
  error = signal('');

  constructor(private apiService: ApiService) {}

  getCourses(): void {
    this.loading.set(true);
    this.error.set('');

    this.apiService.getCourses().subscribe({
      next: (data) => {
        this.courses.set(data);
        this.loading.set(false);
      },
      error: (error) => {
        console.error('Backend Error:', error);
        this.error.set('Failed to load courses');
        this.loading.set(false);
      }
    });
  }
}