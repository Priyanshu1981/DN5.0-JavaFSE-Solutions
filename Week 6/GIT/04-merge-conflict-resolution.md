# Git Hands-On 4 — Merge Conflict Resolution

## Objective
Deliberately create a merge conflict (both `main` and a feature branch edit the same
file differently) and resolve it.

## Commands

```bash
# 1. Confirm master/main is clean
git checkout main
git status

# 2. Create branch "GitWork" and add hello.xml
git checkout -b GitWork
echo "<hello>branch version</hello>" > hello.xml
git add hello.xml
git status

# 3. Commit on GitWork
git commit -m "Add hello.xml on GitWork"

# 4. Switch to main and add a CONFLICTING version of the same file
git checkout main
echo "<hello>main version - different content</hello>" > hello.xml
git add hello.xml
git commit -m "Add conflicting hello.xml on main"

# 5. Observe both commits exist on divergent history
git log --oneline --graph --decorate --all

# 6. Compare the two versions before merging
git diff main GitWork -- hello.xml
git difftool main GitWork -- hello.xml   # visual diff via P4Merge

# 7. Attempt the merge — this WILL conflict
git merge GitWork
# Output: CONFLICT (content): Merge conflict in hello.xml

# 8. Inspect the conflict markers Git inserted into hello.xml:
#    <<<<<<< HEAD
#    <hello>main version - different content</hello>
#    =======
#    <hello>branch version</hello>
#    >>>>>>> GitWork
#
# Use a 3-way merge tool to resolve interactively:
git mergetool

# 9. After editing hello.xml to the agreed final content, mark it resolved
git add hello.xml

# 10. Commit the resolved merge
git commit -m "Resolve merge conflict in hello.xml between main and GitWork"

# 11. Add a backup file created by the merge tool to .gitignore, then commit
echo "*.orig" >> .gitignore
git add .gitignore
git commit -m "Ignore merge tool backup files"

# 12. Clean up
git branch -a
git branch -d GitWork
git log --oneline --graph --decorate
```

## What a conflict looks like

```
<<<<<<< HEAD
<hello>main version - different content</hello>
=======
<hello>branch version</hello>
>>>>>>> GitWork
```

Everything between `<<<<<<< HEAD` and `=======` is main's version; everything between
`=======` and `>>>>>>> GitWork` is the incoming branch's version. Resolving the
conflict means editing the file down to a single, final version and removing the
marker lines before `git add`-ing it.
