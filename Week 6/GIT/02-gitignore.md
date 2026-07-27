# Git Hands-On 2 — .gitignore

## Objective
Ignore `.log` files and a `log/` folder so they never get committed.

## Commands

```bash
# 1. Create the files/folders that should be ignored
mkdir log
echo "sample log entry" > log/app.log
echo "another log file" > server.log

# 2. Check status BEFORE adding a .gitignore — both should show as untracked
git status

# 3. Create/append .gitignore with the rules (see .gitignore in this folder)
echo "*.log" >> .gitignore
echo "log/" >> .gitignore

# 4. Check status AFTER adding .gitignore — log/ and *.log should no longer
#    appear as untracked files
git status

# 5. Stage and commit the .gitignore file itself
git add .gitignore
git commit -m "Add .gitignore to exclude log files and log folder"

# 6. Confirm the ignored files are still on disk but untracked
git check-ignore -v server.log
git check-ignore -v log/app.log
```

## Expected result
`git status` after step 4 shows only `.gitignore` as a new/staged file — `server.log`
and the `log/` folder are no longer listed as untracked, confirming they are ignored
by both the working directory view and future `git add .` commands.
