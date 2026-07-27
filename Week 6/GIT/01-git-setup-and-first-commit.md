# Git Hands-On 1 — Git Configuration & First Commit

## Objective
Set up Git on a local machine, configure Notepad++ as the default editor, and push a
first file to a remote repository.

## Commands

```bash
# 1. Verify Git is installed
git --version

# 2. Configure user identity (used in every commit)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 3. Set Notepad++ as Git's default editor (Windows path shown; adjust as needed)
git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"

# 4. Confirm configuration
git config --list

# 5. Initialise a new local repository
mkdir GitDemo && cd GitDemo
git init

# 6. Check repository status
git status

# 7. Create a file and stage it
echo "# GitDemo" > README.md
git add README.md

# 8. Commit the staged file
git commit -m "Initial commit: add README"

# 9. Link to the remote repository (created on GitHub/GitLab beforehand)
git remote add origin https://github.com/<your-username>/GitDemo.git

# 10. Push the local commit to the remote
git push -u origin main

# 11. Pull any remote changes down (e.g. if the remote had a README already)
git pull origin main
```

## Notes
- Do not use organisation credentials to sign up for a personal GitHub/GitLab account.
- `git status` should show "nothing to commit, working tree clean" immediately after
  the commit in step 8.
