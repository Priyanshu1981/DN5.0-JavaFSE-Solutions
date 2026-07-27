# Git Hands-On 5 — Clean Up & Push to Remote

## Objective
Finish up after the conflict-resolution exercise: sync with remote and push the
resolved history back.

## Commands

```bash
# 1. Verify main is clean (no pending changes)
git status

# 2. List all available branches
git branch -a

# 3. Pull the latest remote changes into main (in case others pushed meanwhile)
git pull origin main

# 4. Push the commits from Hands-On 4 (merge + conflict resolution) to the remote
git push origin main

# 5. Confirm the push succeeded and the remote reflects the new history
git log origin/main --oneline --graph --decorate
```

## Expected result
After `git push`, visiting the repository on GitHub/GitLab shows the merge commit
from Hands-On 4 and the resolved `hello.xml`, and `git status` reports the local
branch is up to date with `origin/main`.
