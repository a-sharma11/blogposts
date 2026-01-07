# Tailwind CSS Setup Guide

Tailwind CSS has been successfully integrated with your Jekyll blog!

## How It Works

1. **Source File**: `assets/css/input.css` - Contains Tailwind directives and custom styles
2. **Built File**: `assets/main.css` - Generated CSS file (minified) used by Jekyll
3. **Config**: `tailwind.config.js` - Tailwind configuration with your custom colors and settings

## Usage

### Building CSS

**One-time build:**
```bash
npm run build:css
```

**Watch mode (for development):**
```bash
npm run watch:css
```

This will automatically rebuild CSS when you make changes to your HTML/Markdown files.

### Using Tailwind Classes

You can now use Tailwind utility classes directly in your HTML templates and Markdown files:

```html
<!-- Example: Using Tailwind classes -->
<div class="max-w-container mx-auto px-[22px] py-[40px]">
  <h1 class="text-[clamp(28px,4vw,40px)] font-bold text-text">Title</h1>
  <p class="text-muted my-[10px]">Paragraph text</p>
  <a href="#" class="text-link hover:underline">Link</a>
</div>
```

### Custom Colors Available

- `bg-bg` - White background (#ffffff)
- `text-text` - Primary text (#121212)
- `text-muted` - Muted text (#5a5a5a)
- `border-hairline` - Subtle borders (#e9e9e9)
- `bg-soft` - Soft background (#f7f7f7)
- `text-link` - Link color (#0b57d0)

### Custom Components

Pre-built components available:
- `.container` - Max-width container with padding
- `.wrapper` - Container wrapper
- `.kicker` - Uppercase label style
- `.nav-pill` - Navigation pill button
- `.callout` - Callout box with soft background
- `.quote` - Quote box with dark border
- `.level-box` - Structured content box

### Example: Converting Existing Styles

**Before (custom CSS):**
```html
<div class="post-header">
  <h1 class="post-title">Title</h1>
</div>
```

**After (Tailwind classes):**
```html
<div class="border-b border-hairline pb-[22px] mb-[22px]">
  <h1 class="text-[clamp(28px,4vw,40px)] font-bold text-text leading-[1.15] tracking-tight">Title</h1>
</div>
```

## Workflow

1. **Development**: Run `npm run watch:css` in one terminal, and `bundle exec jekyll serve` in another
2. **Before committing**: Run `npm run build:css` to ensure CSS is up to date
3. **GitHub Pages**: The built `assets/main.css` file is committed and used by Jekyll

## Files Structure

```
blogposts/
├── assets/
│   ├── css/
│   │   └── input.css          # Source file (Tailwind directives)
│   └── main.css               # Built file (committed to git)
├── tailwind.config.js         # Tailwind configuration
├── package.json               # npm dependencies
└── _config.yml                # Jekyll config (excludes input.css)
```

## Notes

- The `input.css` file is excluded from Jekyll processing (see `_config.yml`)
- Only the built `main.css` is used by the site
- Custom colors match your minimalist design system
- All Tailwind utility classes are available

## GitHub Actions (Optional)

If you want to automate CSS building on GitHub Pages, you can add a GitHub Action:

```yaml
# .github/workflows/build.yml
name: Build CSS
on:
  push:
    branches: [ main ]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build:css
      - run: bundle install
      - run: bundle exec jekyll build
```

However, since you're building CSS locally and committing it, this is optional.

