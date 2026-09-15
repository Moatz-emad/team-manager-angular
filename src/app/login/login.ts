import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';

  constructor(private router: Router) {}

  login(): void {

    if (this.email && this.password) {

      localStorage.setItem('isLoggedIn', 'true');

      this.router.navigateByUrl('/courses');

    } else {

      alert('Please enter email and password');

    }
  }
}