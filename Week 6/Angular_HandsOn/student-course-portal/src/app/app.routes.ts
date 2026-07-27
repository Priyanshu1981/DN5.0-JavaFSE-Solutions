import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { EnrollmentFormComponent } from './pages/enrollment-form/enrollment-form.component';
import { ReactiveEnrollmentFormComponent } from './pages/reactive-enrollment-form/reactive-enrollment-form.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';

// Hands-on 7: lazy-loading the course-list feature with loadComponent(),
// a guarded route (/profile), and a wildcard 404 route.
export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'courses',
    loadComponent: () =>
      import('./pages/course-list/course-list.component').then((m) => m.CourseListComponent)
  },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: StudentProfileComponent, canActivate: [authGuard] },
  { path: 'enroll', component: EnrollmentFormComponent },
  { path: 'enroll-reactive', component: ReactiveEnrollmentFormComponent },
  { path: '**', component: NotFoundComponent }
];
