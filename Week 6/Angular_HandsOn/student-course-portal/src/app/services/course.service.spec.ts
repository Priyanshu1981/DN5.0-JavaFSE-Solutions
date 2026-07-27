import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

// Hands-on 10: Service unit test using HttpClientTestingModule — verifies
// the correct URL is called and mocks the HTTP response so no real network
// call is made.
describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  const mockCourses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService]
    });
    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCourses() should GET /courses and return the list', () => {
    service.getCourses().subscribe((courses) => {
      expect(courses).toEqual(mockCourses);
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses);
  });

  it('getCourses() should fall back to an empty array on error', () => {
    service.getCourses().subscribe((courses) => {
      expect(courses).toEqual([]);
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    req.error(new ProgressEvent('Network error'));
  });

  it('enroll() should POST to /courses/:id/enroll', () => {
    service.enroll(1).subscribe((result) => {
      expect(result.success).toBeTrue();
    });

    const req = httpMock.expectOne('http://localhost:3000/courses/1/enroll');
    expect(req.request.method).toBe('POST');
    req.flush({ success: true });
  });
});
