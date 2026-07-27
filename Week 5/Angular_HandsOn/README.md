# Student Course Portal — Angular Hands-On 1–5 (Week 5)

A single progressive Angular v20 standalone application built across Hands-On 1–5 of the
Angular exercise book. Hands-On 6–10 continue on top of this same project in
`Week6/Angular_HandsOn` (services, routing/guards, HttpClient, NgRx, testing).

## What's implemented, by hands-on

| Hands-On | Feature | Where |
|---|---|---|
| 1 | Project scaffold, `notes.txt` on generated files, Header/Home/CourseList/StudentProfile components | `notes.txt`, `components/header`, `pages/home`, `pages/course-list`, `pages/student-profile` |
| 2 | Interpolation, property/event/two-way binding, `ngOnInit`/`ngOnDestroy`, `ngOnChanges`, `@Input`/`@Output` | `pages/home`, `components/course-card` |
| 3 | `*ngIf`/`*ngFor`/`*ngSwitch`, `trackBy`, `[ngClass]`/`[ngStyle]`, custom `HighlightDirective`, custom `CreditLabelPipe` | `pages/course-list`, `components/course-card`, `directives/highlight.directive.ts`, `pipes/credit-label.pipe.ts` |
| 4 | Template-driven form with built-in validators and contextual error messages | `pages/enrollment-form` |
| 5 | Reactive form with `FormBuilder`, custom sync validator, async validator, `FormArray` | `pages/reactive-enrollment-form` |

## Running the project

```bash
npm install
npm start
```
Then open http://localhost:4200.

Routes:
- `/` — Home (stats, binding demo)
- `/courses` — Course listing (directives, pipes, cards)
- `/profile` — Student profile
- `/enroll` — Template-driven enrollment form
- `/enroll-reactive` — Reactive enrollment form

## Testing

```bash
npm test
```
Runs the Jasmine/Karma specs (`header.component.spec.ts`, `course-card.component.spec.ts`).

## Notes

- Uses Angular v20 standalone components (no `NgModule`), per the exercise book's guidance.
- `node_modules/` is intentionally excluded (see `.gitignore`) — run `npm install` after cloning.
