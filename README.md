# Git & GitHub Notes

This README contains useful commands and notes for working with Git and GitHub.

## Git Basics

- **Initialize a repository**

  ```bash
  git init
  ```

- **Check status**

  ```bash
  git status
  ```

- **Add files to staging**

  ```bash
  git add <file>
  git add .
  ```

- **Commit changes**

  ```bash
  git commit -m "Commit message"
  ```

- **View commit history**
  ```bash
  git log
  ```

## Working with Remotes

- **Add a remote repository**

  ```bash
  git remote add origin <repo-url>
  ```

- **Push to remote**

  ```bash
  git push origin main
  ```

- **Clone a repository**

  ```bash
  git clone <repo-url>
  ```

- **Pull latest changes**
  ```bash
  git pull
  ```

## Branching

- **Create a new branch**

  ```bash
  git branch <branch-name>
  ```

- **Switch branches**

  ```bash
  git checkout <branch-name>
  ```

- **Create and switch**
  ```bash
  git checkout -b <branch-name>
  ```

## GitHub Tips

- Create a `.gitignore` file to exclude files from version control.
- Use Pull Requests to collaborate and review code.
- Add a license and contributing guidelines to your repository.

---
