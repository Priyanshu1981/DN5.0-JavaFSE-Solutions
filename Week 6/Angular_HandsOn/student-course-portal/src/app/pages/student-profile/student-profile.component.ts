import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CourseStore } from '../../store/courses/course.store';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent implements OnInit {
  studentName = 'Priya Sharma';
  studentEmail = 'priya.sharma@student.edu';

  // Hands-on 9: courses$ / loading$ are selectors exposed by the store.
  courses$ = this.courseStore.courses$;
  loading$ = this.courseStore.loading$;

  constructor(
    private auth: AuthService,
    private courseStore: CourseStore,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.courseStore.loadCourses();
  }

  onLogout(): void {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
