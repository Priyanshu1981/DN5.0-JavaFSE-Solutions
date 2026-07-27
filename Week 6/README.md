# Week 6 — Angular / React, GIT, CI/CD

## Contents

- **`Angular_HandsOn/`** — continuation of the Week 5 "Student Course Portal" Angular
  project, covering Hands-On 6–10 (services/DI, routing/guards, HttpClient, state
  management, unit testing). See its own README for the full feature map.

- **`react-apps/`** — 10 independent Create React App projects covering ReactJS-HOL
  exercises 10–19:

| # | Folder | Exercise |
|---|---|---|
| 10 | `10-officespacerentalapp` | JSX elements/attributes, list rendering, conditional styling |
| 11 | `11-eventexamplesapp` | Event handling with `this`, SyntheticEvent |
| 12 | `12-ticketbookingapp` | Conditional rendering — element variables |
| 13 | `13-bloggerapp` | Conditional rendering — if/else, ternary, `&&`, returning `null` |
| 14 | `14-contextapp` | React Context API (`createContext`, Provider/Consumer, `useContext`) |
| 15 | `15-ticketraisingapp` | Controlled form components, `handleSubmit` |
| 16 | `16-mailregisterapp` | Form validation (name/email/password rules) |
| 17 | `17-fetchuserapp` | Consuming a REST API with `fetch()` in `componentDidMount` |
| 18 | `18-cohortdashboard-testing` | Unit testing with Jest + React Testing Library (Enzyme substitute — see app README note) |
| 19 | `19-gitclientapp` | Consuming GitHub's REST API with axios; mocking with Jest |

- **`GIT/`** — command-by-command walkthroughs for Git Hands-On 1–5 (config, `.gitignore`,
  branching/merging, conflict resolution, cleanup & push).

- **`CI-CD/`** — a GitHub Actions pipeline (`ci-cd.yml`) that builds/tests both the
  Angular app and every React app, with a deployment placeholder stage.

## Running a React app

```bash
cd react-apps/10-officespacerentalapp
npm install
npm start
```

## Running the Angular app

```bash
cd Angular_HandsOn/student-course-portal
npm install
npm run mock-api   # terminal 1 — mock REST backend
npm start          # terminal 2 — Angular dev server
```
