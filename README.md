# IPC Solutions Homepage

Static bilingual website for an IPC solutions profile, built for GitHub Pages deployment.

## Local files

- `index.html`
- `styles.css`
- `script.js`
- `assets/`
- `.nojekyll`
- `.github/workflows/deploy.yml`

## Deploy to GitHub Pages

### Option 1: Personal homepage repository

If you want this site to be your GitHub personal homepage, create a repository named:

```text
<your-github-username>.github.io
```

Example:

```text
stevinshen.github.io
```

Then upload all files in this project to the root of that repository.

### Option 2: Normal repository + Pages

You can also publish it from a normal repository, for example:

```text
ipc-homepage
```

In that case the site URL will usually be:

```text
https://<your-github-username>.github.io/ipc-homepage/
```

## Recommended GitHub Pages setup

This project already includes:

- `.nojekyll` to avoid Jekyll processing issues
- `.github/workflows/deploy.yml` to deploy with GitHub Actions

After pushing to GitHub:

1. Open the repository on GitHub
2. Go to `Settings` -> `Pages`
3. Under `Build and deployment`, choose `Source: GitHub Actions`
4. Push to the `main` branch
5. Wait for the `Deploy Static Site to GitHub Pages` workflow to finish

## Suggested upload structure

Keep these in the repository root:

```text
index.html
styles.css
script.js
assets/
.nojekyll
.github/workflows/deploy.yml
```

## If you want to push from local terminal

Run these commands after replacing the repository URL:

```bash
git init
git add .
git commit -m "Initial homepage"
git branch -M main
git remote add origin https://github.com/<your-github-username>/<repo-name>.git
git push -u origin main
```

## Custom domain later

If you later want your own domain:

1. Add the domain in `Settings` -> `Pages`
2. Configure DNS at your domain provider
3. Optionally add a `CNAME` file
