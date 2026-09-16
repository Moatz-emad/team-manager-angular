import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(): void {

    if (!this.email || !this.password) {
      alert('Please enter email and password');
      return;
    }

    this.http.post<any>('/api/auth/login', {
      email: this.email,
      password: this.password
    }).subscribe({

      next: (response) => {

        localStorage.setItem('token', response.token);

        localStorage.setItem(
          'user',
          JSON.stringify(response.user)
        );

        this.router.navigateByUrl('/courses');
      },

      error: (error) => {
        alert(error.error?.message || 'Login failed');
      }

    });
  }
}