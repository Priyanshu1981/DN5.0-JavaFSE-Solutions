# Git Hands-On 3 — Branching & Merging

## Branching

```bash
# 1. Create a new branch
git branch GitNewBranch

# 2. List all local and remote branches (the "*" marks the current branch)
git branch -a

# 3. Switch to the new branch and add a file
git checkout GitNewBranch
echo "content added on GitNewBranch" > feature.txt
git add feature.txt

# 4. Commit the change on the branch
git commit -m "Add feature.txt on GitNewBranch"

# 5. Check status
git status
```

## Merging

```bash
# 1. Switch back to the trunk
git checkout main

# 2. List differences between trunk and branch (command-line diff)
git diff main GitNewBranch

# 3. Visual diff using P4Merge (requires git config --global diff.tool p4merge)
git difftool main GitNewBranch

# 4. Merge the branch into the trunk
git merge GitNewBranch

# 5. Observe the commit graph after merging
git log --oneline --graph --decorate

# 6. Delete the branch now that it's merged, then confirm
git branch -d GitNewBranch
git status
git branch -a
```
