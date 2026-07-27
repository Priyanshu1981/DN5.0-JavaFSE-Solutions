import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
  isLoading = true;
  selectedCourseId: number | null = null;
  courses: Course[] = [];

  // Hands-on 6: CourseService is injected via Angular's DI system rather
  // than being instantiated with `new` — this makes the component easy to
  // unit test (the service can be mocked/stubbed).
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    // Hands-on 8: data now comes from HttpClient via CourseService instead
    // of a hardcoded array (see Week5 version of this file for the before-state).
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.isLoading = false;
    });
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  onEnroll(courseId: number): void {
    this.courseService.enroll(courseId).subscribe((result) => {
      if (result.success) {
        this.selectedCourseId = courseId;
      }
    });
  }
}
