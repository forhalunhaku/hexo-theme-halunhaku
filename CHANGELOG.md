# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-07-27

### 🎉 Major Release - Production Ready

This is a complete overhaul of the theme with significant improvements in functionality, user experience, and code quality.

### ✨ Added
- **Enhanced Code Blocks**: Professional code highlighting with single copy button
- **Complete Cover Image System**: Full image display without cropping on all pages
- **Chinese Text Optimization**: Perfect display for Chinese characters in titles
- **Advanced Copy Functionality**: Smart clipboard integration with visual feedback
- **Theme Sync System**: Automated development workflow with sync scripts
- **Comprehensive CSS Architecture**: Modular CSS system with specialized files

### 🔧 Fixed
- **Duplicate Copy Buttons**: Resolved conflicts with Hexo's built-in code highlighter
- **Cover Image Cropping**: Images now display completely with proper aspect ratios
- **Chinese Character Clipping**: Fixed line-height issues for proper text display
- **Mobile Responsiveness**: Improved layout and functionality across all devices
- **Code Block Styling**: Modern design with better syntax highlighting

### 🚀 Improved
- **Performance**: Optimized CSS loading and reduced redundancy
- **User Experience**: Smoother animations and better visual feedback
- **Developer Experience**: Streamlined development workflow with sync tools
- **Code Quality**: Cleaner, more maintainable codebase
- **Documentation**: Comprehensive guides and troubleshooting resources

### 📱 Enhanced Mobile Support
- Responsive cover images that adapt to screen size
- Touch-friendly copy buttons
- Optimized text rendering for mobile devices
- Improved navigation and layout on small screens

### 🎨 Design Improvements
- Modern code block styling with glassmorphism effects
- Better typography with proper line heights
- Enhanced hover effects and transitions
- Consistent visual hierarchy across all pages

### 🛠️ Technical Improvements
- Modular CSS architecture (`style.css`, `cover-images.css`, `code-blocks.css`, `chinese-text-fix.css`)
- Advanced JavaScript with conflict resolution
- Automated sync system for development
- Better error handling and debugging tools

### 📚 Documentation
- Complete setup and usage guides
- Troubleshooting documentation
- Development workflow instructions
- CSS customization examples

### 🔄 Breaking Changes
- Requires disabling Hexo's built-in code highlighter
- New CSS file structure (automatic with sync script)
- Updated template structure for better functionality

### 🎯 Migration Guide
1. Update Hexo configuration to disable built-in highlighter
2. Run the provided sync script to update theme files
3. Clear cache with `hexo clean` and regenerate

## [1.0.0] - 2025-07-25

### Added
- Initial release of Hexo Theme Halunhaku
- Three distinct layout styles (home, category, tag pages)
- Responsive design with Tailwind CSS
- SEO optimization with meta tags
- Built-in search functionality
- Pagination support
- Category and tag page generators
- Debug and testing tools
- Comprehensive documentation

### Features
- **Home Page**: Light theme with blue accents and grid layout
- **Category Pages**: Dark theme with purple accents and sidebar
- **Tag Pages**: Dark theme with blue-purple accents and horizontal layout
- **Post Pages**: Clean reading layout with cover image support
- **Customizable**: Color schemes and layout options
- **Developer Tools**: Built-in debugging and testing commands

### Technical
- Compatible with Hexo 6.0.0+
- Node.js 14.0.0+ support
- MIT License
- Complete EJS template system
- Helper functions and generators
- Tailwind CSS integration

[2.0.0]: https://github.com/forhalunhaku/hexo-theme-halunhaku/releases/tag/v2.0.0
[1.0.0]: https://github.com/forhalunhaku/hexo-theme-halunhaku/releases/tag/v1.0.0