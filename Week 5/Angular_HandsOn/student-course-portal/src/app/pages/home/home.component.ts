import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  // Hands-on 1 Task 2 — stats row
  coursesAvailable = 12;
  enrolled = 3;
  gpa = 3.8;

  // Hands-on 2 Task 1 — all four binding types
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }

  // [property]="expr" is one-way, component -> DOM only.
  // [(ngModel)]="prop" is two-way: DOM -> component on input, and
  // component -> DOM whenever the property changes elsewhere.

  ngOnInit(): void {
    // Hands-on 2 Task 2 — ngOnInit fires once after inputs are first set.
    console.log('HomeComponent initialised — courses loaded');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }
}
