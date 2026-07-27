# Student Course Portal — Angular Hands-On 6–10 (Week 6)

This project is a direct continuation of `Week5/Angular_HandsOn/student-course-portal`.
It contains everything from Week 5 (Hands-On 1–5) **plus** Hands-On 6–10.

## What's implemented, by hands-on

| Hands-On | Feature | Where |
|---|---|---|
| 6 | Services & Dependency Injection — `CourseService`, `AuthService` injected into components instead of instantiated with `new` | `services/course.service.ts`, `services/auth.service.ts` |
| 7 | Routing — functional `authGuard` (CanActivate), `/login` page, lazy-loaded `/courses` route via `loadComponent()`, wildcard 404 route | `guards/auth.guard.ts`, `pages/login`, `pages/not-found`, `app.routes.ts` |
| 8 | `HttpClient` — `CourseService` now calls a mock REST backend (`db.json` via json-server) instead of hardcoded data; functional logging interceptor | `services/course.service.ts`, `interceptors/logging.interceptor.ts`, `db.json` |
| 9 | State management — lightweight NgRx-style `CourseStore` (actions as methods, a single state stream, and selectors as exposed observables) built with plain RxJS | `store/courses/course.store.ts` |
| 10 | Unit testing — `CourseService` tested with `HttpClientTestingModule`; `CourseCardComponent` tested with `TestBed` (carried over from Week 5) | `services/course.service.spec.ts`, `components/course-card/course-card.component.spec.ts` |

### A note on Hands-On 9 (NgRx)

The exercise book asks for `@ngrx/store`. Rather than adding the full NgRx dependency
tree (store, effects, entity, dev-tools) for a single feature, `CourseStore` implements
the same core ideas with plain RxJS:

| NgRx concept | Equivalent here |
|---|---|
| Action | A public method on `CourseStore` (`loadCourses()`, `enrollInCourse()`) |
| Reducer | `patchState()` — the only place that mutates the internal `BehaviorSubject` |
| Selector | The exposed `courses$` / `loading$` observables |
| Effect | The `CourseService` HTTP calls triggered inside the action methods |

If you do want the full `@ngrx/store` + `@ngrx/effects` setup, add those packages and
convert `course.store.ts` into `course.actions.ts` / `course.reducer.ts` /
`course.selectors.ts` / `course.effects.ts` — the method names above map 1:1 onto
action types.

## Running the project

```bash
npm install

# Terminal 1 — mock REST API (Hands-on 8)
npm run mock-api

# Terminal 2 — Angular dev server
npm start
```
Open http://localhost:4200.

Try:
- `/courses` — now loads from the mock API (open the browser console to see the
  logging interceptor's request/response lines)
- `/profile` — guarded; visiting it while logged out redirects to `/login`
- `/login` — enter any non-empty username/password, then you're redirected to `/profile`
- Any unknown URL — renders the 404 page

## Testing

```bash
npm test
```
Runs `course.service.spec.ts` (HttpClientTestingModule), `course-card.component.spec.ts`,
and `header.component.spec.ts`.
