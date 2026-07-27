# CI/CD Pipeline (Week 6)

`​.github/workflows/ci-cd.yml` is a GitHub Actions pipeline that:

1. **Builds & tests the Angular app** (`Week6/Angular_HandsOn/student-course-portal`)
   — installs dependencies, runs the Karma/Jasmine unit tests headlessly, then
   produces a production build.
2. **Builds & tests every React app** from Week 5 and Week 6 using a matrix strategy
   (one job per app, all running in parallel) — installs dependencies, runs Jest
   tests non-interactively, then builds.
3. **Deploys** (placeholder step) — only runs after both build/test jobs succeed and
   only on pushes to `main`. Replace the placeholder with your actual deployment
   command (e.g. `aws s3 sync`, Azure Static Web Apps, or a Docker image push — see
   Week 7 for Docker/Cloud).

## Important — file placement

GitHub Actions only picks up workflows placed at the **repository root**, under
`.github/workflows/`. This file currently lives at
`Week6/CI-CD/.github/workflows/ci-cd.yml` for weekwise organisation.

When you actually push this repo to GitHub, copy (or symlink) it to the true root:

```bash
mkdir -p .github/workflows
cp Week6/CI-CD/.github/workflows/ci-cd.yml .github/workflows/ci-cd.yml
git add .github/workflows/ci-cd.yml
git commit -m "Add CI/CD pipeline"
```

## Why a matrix build for React

Since each React exercise (Week5/Week6 `react-apps/*`) is an independent
`create-react-app` project with its own `package.json`, a single `npm install` at the
repo root won't build any of them. The `strategy.matrix` block runs one job per app —
they build and fail independently, so one broken exercise doesn't block CI for the
rest.
