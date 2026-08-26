import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface TeamMember {
  name: string;
  age: number;
  department: string;
  available: boolean;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  members: TeamMember[] = [
    {
      name: 'Ahmed',
      age: 28,
      department: 'Development',
      available: true
    },
    {
      name: 'Esraa',
      age: 24,
      department: 'Marketing',
      available: false
    },
    {
      name: 'Omar',
      age: 26,
      department: 'Design',
      available: true
    }
  ];

  departments: string[] = [
    'Development',
    'Marketing',
    'Design'
  ];

  selectedDepartment: string = 'All';

  viewMode: string = 'card';

  newMember = {
    name: '',
    age: 0,
    department: 'Development',
    available: true
  };

  addMember() {
    if (
      !this.newMember.name ||
      this.newMember.age <= 0 ||
      !this.newMember.department
    ) {
      return;
    }

    this.members.push({
      name: this.newMember.name,
      age: this.newMember.age,
      department: this.newMember.department,
      available: this.newMember.available
    });

    this.newMember = {
      name: '',
      age: 0,
      department: 'Development',
      available: true
    };
  }

  toggleAvailability(member: TeamMember) {
    member.available = !member.available;
  }
}