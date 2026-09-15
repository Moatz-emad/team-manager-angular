import { Routes } from '@angular/router';
import { Courses } from './courses/courses';
import { CourseDetails } from './course-details/course-details';
import { Login } from './login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'courses',
    component: Courses,
    canActivate: [authGuard],

    children: [
      {
        path: 'details/:id',
        component: CourseDetails,
        canActivate: [authGuard]
      }
    ]
  }

];