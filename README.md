# Hexo Theme Halunhaku

[![npm version](https://badge.fury.io/js/hexo-theme-halunhaku.svg)](https://badge.fury.io/js/hexo-theme-halunhaku)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Hexo Version](https://img.shields.io/badge/hexo-%3E%3D%206.0.0-blue.svg)](https://hexo.io)
[![GitHub](https://img.shields.io/github/stars/forhalunhaku/hexo-theme-halunhaku?style=social)](https://github.com/forhalunhaku/hexo-theme-halunhaku)

A modern, responsive Hexo theme with multiple layout styles inspired by contemporary design patterns.

![Theme Preview](https://via.placeholder.com/800x400/0c7ff2/ffffff?text=Hexo+Theme+Halunhaku+Preview)

## 🎨 Demo

- [Live Demo](https://your-demo-site.com) (Replace with your demo URL)
- [Documentation](https://your-docs-site.com) (Replace with your docs URL)

## Features

- 🎨 **Multiple Layout Styles**: Different color schemes for home, category, and tag pages
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Fast Loading**: Built with Tailwind CSS via CDN
- 🎯 **SEO Friendly**: Semantic HTML structure
- 🌙 **Dark/Light Themes**: Different color schemes for different page types
- 📝 **Clean Typography**: Beautiful reading experience with Newsreader font

## Installation

### Method 1: NPM (Recommended)
```bash
cd your-hexo-site
npm install hexo-theme-halunhaku
```

### Method 2: Git Clone
```bash
cd your-hexo-site
git clone https://github.com/forhalunhaku/hexo-theme-halunhaku themes/halunhaku
```

### Configuration
1. Update your site's `_config.yml`:
```yaml
theme: halunhaku
```

2. Copy theme configuration:
```bash
cp themes/halunhaku/_config.example.yml _config.halunhaku.yml
```

3. Generate and serve:
```bash
hexo clean && hexo generate && hexo server
```

## Configuration

Copy the theme's `_config.yml` to your site root and customize:

```yaml
# Theme settings
theme_style: "light" # light, dark, auto

# Site settings
site_title: "Your Blog Title"
site_subtitle: "Your blog subtitle"

# Navigation
menu:
  Home: /
  Categories: /categories/
  Tags: /tags/

# Layout settings
posts_per_page: 6
excerpt_length: 150
```

## Page Layouts

### Home Page (Light Theme)
- Clean, bright design with blue accents
- Grid layout for posts
- Pagination support

### Category Pages (Dark Theme)
- Dark theme with purple accents
- Two-column layout with sidebar
- Popular posts and category navigation

### Tag Pages (Dark Theme)
- Dark theme with blue-purple accents
- Horizontal post layout
- Tag cloud and recent posts sidebar

### Post Pages
- Clean, readable layout
- Support for cover images
- Navigation between posts
- Tag display

## Front Matter

Add these fields to your post front matter for best results:

```yaml
---
title: Your Post Title
date: 2024-01-01
categories:
  - Technology
tags:
  - web-development
  - design
cover: /images/post-cover.jpg
excerpt: A brief description of your post
---
```

## Customization

### Color Schemes

Edit the `color_schemes` section in `_config.yml`:

```yaml
color_schemes:
  home:
    primary: "#0c7ff2"
    secondary: "#f3f4f6"
    background: "#ffffff"
    text_primary: "#111827"
    text_secondary: "#6b7280"
    border: "#e5e7eb"
```

### Adding Custom CSS

Create a `source/css/custom.css` file in your theme directory for additional styles.

## Development

To modify the theme:

1. Edit EJS templates in the `layout/` directory
2. Modify styles in `source/css/style.css`
3. Add helper functions in `scripts/helpers.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use and modify as needed.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Testing the Theme

Use the built-in test commands to verify everything is working:

```bash
# Test theme functionality
hexo theme:test

# Create sample content for testing
hexo theme:sample
```

## Troubleshooting

### Common Issues

1. **"Cannot GET /categories/" Error**
   - Make sure `scripts/generators.js` is in your theme directory
   - Restart Hexo server: `hexo clean && hexo server`
   - Check that you have posts with categories

2. **Colors not displaying correctly**
   - Verify `_config.halunhaku.yml` exists in site root
   - Check color scheme configuration
   - Restart server after config changes

3. **Posts not showing**
   - Ensure posts have proper front matter
   - Check date format in posts
   - Verify posts are in `source/_posts/` directory

4. **Theme not loading**
   - Confirm `theme: halunhaku` in main `_config.yml`
   - Check theme directory name matches exactly
   - Verify all theme files are present

### Debug Mode

Enable debug mode in your `_config.yml`:

```yaml
debug: true
```

### Getting Help

1. Run `hexo theme:test` to diagnose issues
2. Check your theme configuration in `_config.halunhaku.yml`
3. Open an issue on GitHub with:
   - Your Hexo version (`hexo version`)
   - Your Node.js version (`node --version`)
   - Error messages or screenshots
   - Your configuration files

## Support

If you encounter any issues or have questions, please open an issue on GitHub.