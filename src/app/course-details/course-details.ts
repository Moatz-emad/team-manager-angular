import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  imports: [],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css'
})
export class CourseDetails {

  courseId = '';

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.courseId = params.get('id') || '';
    });
  }
}