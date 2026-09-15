import { Component, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { form, FormField, required } from '@angular/forms/signals';

@Component({
  selector: 'app-signin-form',
  standalone: true,
  imports: [TitleCasePipe, FormField],
  templateUrl: './signin-form.html',
  styleUrl: './signin-form.css'
})
export class SigninForm {

  categories = [
    'programming',
    'design',
    'business',
    'marketing',
    'data science'
  ];

  levels = [
    'beginner',
    'intermediate',
    'advanced'
  ];

  courseModel = signal({
    title: '',
    instructor: '',
    category: '',
    level: '',
    price: 0,
    duration: '',
    rating: 0,
    students: 0,
    description: ''
  });

  courseForm = form(this.courseModel, (schema) => {
    required(schema.title);
    required(schema.instructor);
    required(schema.category);
    required(schema.level);
  });

  submitForm() {
    console.log('Signal Form Data:', this.courseModel());
  }
}