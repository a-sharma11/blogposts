# Jekyll Blog for GitHub Pages

This is a Jekyll-based blog site configured for GitHub Pages hosting.

## Setup Instructions

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it either:
   - `username.github.io` (for a user/organization site)
   - Any name you prefer (for a project site)

### 2. Push This Code to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial Jekyll blog setup"

# Add your GitHub repository as remote
git remote add origin https://github.com/username/repository-name.git

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section
4. Under **Source**, select:
   - **Deploy from a branch**: Choose `main` branch and `/ (root)` folder
   - OR use **GitHub Actions** if you prefer
5. Click **Save**

### 4. Configure Your Site

Edit `_config.yml` to customize:
- `title`: Your blog's title
- `description`: Your blog's description
- `author`: Your name
- `email`: Your email
- `url`: Leave empty for GitHub Pages (it will auto-detect)
- `baseurl`: Leave empty if repository is `username.github.io`, otherwise use `/repository-name`

### 5. Access Your Site

After enabling GitHub Pages, your site will be available at:
- `https://username.github.io` (if repository is `username.github.io`)
- `https://username.github.io/repository-name` (if repository has a different name)

**Note**: It may take a few minutes for the site to be published initially.

## Local Development

To test your site locally before pushing to GitHub:

1. Install Ruby and Bundler (if not already installed)
2. Install dependencies:
   ```bash
   bundle install
   ```
3. Run Jekyll server:
   ```bash
   bundle exec jekyll serve
   ```
4. Open your browser to `http://localhost:4000`

## Adding New Posts

1. Create a new file in `_posts/` directory
2. Name it: `YYYY-MM-DD-title.md`
3. Add front matter at the top:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: YYYY-MM-DD HH:MM:SS -0000
   categories: category1 category2
   ---
   ```
4. Write your content below the front matter
5. Commit and push to GitHub

## Customization

- **Layouts**: Edit files in `_layouts/` directory
- **Styling**: Edit `assets/main.css`
- **Homepage**: Edit `index.html`
- **Configuration**: Edit `_config.yml`

## Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Themes](https://jekyllthemes.io/)

