import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Course } from '../models/course.model';

// Hands-on 6: A service is the standard Angular way to share data/logic
// across components — CourseListComponent no longer hardcodes its data.
// Hands-on 8: Uses HttpClient to talk to a backend (mocked here via
// json-server, see db.json in the project root).
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Failed to load courses, falling back to empty list', error);
        return of([]);
      })
    );
  }

  getCourseById(id: number): Observable<Course | undefined> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(
      catchError(() => of(undefined))
    );
  }

  enroll(courseId: number): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(`${this.apiUrl}/${courseId}/enroll`, {}).pipe(
      catchError(() => of({ success: false }))
    );
  }
}
