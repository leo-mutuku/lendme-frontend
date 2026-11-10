# Contributing to LendMe Frontend

## Branches

```
feature/xyz ──PR──► dev ──PR──► main
 (one task)        (testing)   (stable)
```

- **`main`**: stable, working code only. Protected; nobody pushes to it directly.
- **`dev`**: where finished features are combined and tested.
- **`feature/...` / `fix/...`**: one short-lived branch per task.

## One-time setup

```bash
git clone https://github.com/leo-mutuku/lendme-frontend.git
cd lendme-frontend
git checkout dev
npm install
npm run dev
```

Open the URL printed in the terminal to see the app.

## For every task

1. **Start from the latest `dev`**
   ```bash
   git checkout dev
   git pull
   npm install
   ```
   Run `npm install` after pulling in case someone added a new package.
2. **Create a branch for the task**
   ```bash
   git checkout -b feature/short-description
   ```
   Use `feature/` for new work and `fix/` for bug fixes, e.g. `feature/loan-form`, `fix/login-redirect`.
3. **Write code, then check it before committing**
   ```bash
   npm run lint
   npm run build
   ```
   Fix any errors these report.
4. **Commit**
   ```bash
   git add .
   git commit -m "Add loan application form"
   ```
5. **Push your branch**
   ```bash
   git push -u origin feature/short-description
   ```
6. **Open a pull request into `dev`** on GitHub, or run:
   ```bash
   gh pr create --base dev
   ```
7. After it's reviewed and merged, delete your branch and start again from step 1.

## Releases

When `dev` is stable, a pull request is opened from `dev` into `main`.

## Environment variables

- Put local settings (such as the backend API URL) in a `.env.local` file. It is ignored by Git.
- Variables must start with `VITE_` to be available in the app, e.g. `VITE_API_URL=http://localhost:8080`.
- Anything in a `VITE_` variable is visible to anyone using the app in a browser. **Never** put secrets such as passwords or private API keys in the frontend.

## Rules

- Never work directly on `main`.
- Always start a task from an up-to-date `dev`.
- Keep branches small: one task per branch.
- Don't commit `node_modules`, `dist`, or `.env.local`.
- This repo is public. Never commit secrets.
