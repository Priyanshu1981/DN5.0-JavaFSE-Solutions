import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';

// Hands-on 9: State management. This mirrors the core NgRx concepts —
// a single source of truth (state$), actions expressed as public methods
// (loadCourses, enrollInCourse), and selectors (the exposed observables)
// — implemented with plain RxJS so it has zero extra dependencies. See
// README.md for how this maps onto @ngrx/store's Actions/Reducers/Effects
// if the team later adopts the full library.
export interface CourseState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

const initialState: CourseState = {
  courses: [],
  loading: false,
  error: null
};

@Injectable({ providedIn: 'root' })
export class CourseStore {
  private state$ = new BehaviorSubject<CourseState>(initialState);

  // Selectors
  readonly courses$ = new BehaviorSubject<Course[]>([]);
  readonly loading$ = new BehaviorSubject<boolean>(false);

  constructor(private courseService: CourseService) {
    this.state$.subscribe((state) => {
      this.courses$.next(state.courses);
      this.loading$.next(state.loading);
    });
  }

  private patchState(patch: Partial<CourseState>): void {
    this.state$.next({ ...this.state$.value, ...patch });
  }

  // Action: loadCourses
  loadCourses(): void {
    this.patchState({ loading: true, error: null });
    this.courseService.getCourses().subscribe({
      next: (courses) => this.patchState({ courses, loading: false }),
      error: (err) => this.patchState({ loading: false, error: err.message ?? 'Failed to load courses' })
    });
  }

  // Action: enrollInCourse
  enrollInCourse(courseId: number): void {
    this.courseService.enroll(courseId).subscribe({
      next: (result) => {
        if (result.success) {
          const updated = this.state$.value.courses.map((c) =>
            c.id === courseId ? { ...c, gradeStatus: 'pending' as const } : c
          );
          this.patchState({ courses: updated });
        }
      }
    });
  }
}
