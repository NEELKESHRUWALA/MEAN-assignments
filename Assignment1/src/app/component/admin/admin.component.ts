import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  admin = {
    name: 'Shyam kadiwar',
    role: 'Administrator',
    permissions: ['Manage Users', 'Edit Content', 'View Reports']
  };
}
