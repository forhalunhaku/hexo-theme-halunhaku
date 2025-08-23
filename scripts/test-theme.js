// Theme testing and validation script

hexo.extend.console.register('theme:test', 'Test Stitch theme functionality', function(args) {
  const log = this.log;
  
  log.info('Testing Stitch theme...');
  
  // Test 1: Check if theme config exists
  const themeConfig = hexo.theme.config;
  if (!themeConfig) {
    log.warn('Theme config not found. Please create _config.stitch.yml');
  } else {
    log.info('✓ Theme config loaded');
  }
  
  // Test 2: Check if required layouts exist
  const requiredLayouts = ['index', 'post', 'page', 'category', 'tag'];
  const layoutDir = hexo.theme_dir + 'layout/';
  
  requiredLayouts.forEach(layout => {
    const layoutPath = layoutDir + layout + '.ejs';
    if (hexo.theme.getView(layout)) {
      log.info(`✓ Layout ${layout} found`);
    } else {
      log.error(`✗ Layout ${layout} missing`);
    }
  });
  
  // Test 3: Check if generators are registered
  const generators = hexo.extend.generator.list();
  const requiredGenerators = ['stitch_categories', 'stitch_tags'];
  
  requiredGenerators.forEach(gen => {
    if (generators[gen]) {
      log.info(`✓ Generator ${gen} registered`);
    } else {
      log.error(`✗ Generator ${gen} not found`);
    }
  });
  
  // Test 4: Check if helpers are registered
  const helpers = hexo.extend.helper.list();
  const requiredHelpers = ['strip_html', 'get_excerpt', 'reading_time'];
  
  requiredHelpers.forEach(helper => {
    if (helpers[helper]) {
      log.info(`✓ Helper ${helper} registered`);
    } else {
      log.error(`✗ Helper ${helper} not found`);
    }
  });
  
  // Test 5: Check posts and content
  const posts = hexo.locals.get('posts');
  const categories = hexo.locals.get('categories');
  const tags = hexo.locals.get('tags');
  
  log.info(`Posts: ${posts.length}`);
  log.info(`Categories: ${categories.length}`);
  log.info(`Tags: ${tags.length}`);
  
  if (posts.length === 0) {
    log.warn('No posts found. Create some posts to test the theme fully.');
  }
  
  log.info('Theme test completed!');
});

// Helper to create sample content
hexo.extend.console.register('theme:sample', 'Create sample content for testing', function(args) {
  const log = this.log;
  const fs = require('fs');
  const path = require('path');
  
  log.info('Creating sample content...');
  
  const samplePosts = [
    {
      title: 'Welcome to Stitch Theme',
      date: new Date().toISOString(),
      categories: ['General'],
      tags: ['welcome', 'theme'],
      content: `# Welcome to Stitch Theme

This is a sample post to demonstrate the Stitch theme for Hexo.

## Features

- Beautiful, responsive design
- Multiple color schemes
- Category and tag support
- SEO optimized

Enjoy blogging with Stitch!`
    },
    {
      title: 'Getting Started with Web Development',
      date: new Date(Date.now() - 86400000).toISOString(),
      categories: ['Technology', 'Tutorial'],
      tags: ['web-development', 'javascript', 'css'],
      content: `# Getting Started with Web Development

Web development is an exciting field that combines creativity with technical skills.

## What You'll Learn

1. HTML fundamentals
2. CSS styling
3. JavaScript programming
4. Modern frameworks

Start your journey today!`
    }
  ];
  
  const sourceDir = hexo.source_dir;
  const postsDir = path.join(sourceDir, '_posts');
  
  if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(postsDir, { recursive: true });
  }
  
  samplePosts.forEach((post, index) => {
    const filename = `sample-post-${index + 1}.md`;
    const filepath = path.join(postsDir, filename);
    
    const frontMatter = `---
title: ${post.title}
date: ${post.date}
categories:
${post.categories.map(cat => `  - ${cat}`).join('\n')}
tags:
${post.tags.map(tag => `  - ${tag}`).join('\n')}
---

${post.content}`;
    
    fs.writeFileSync(filepath, frontMatter);
    log.info(`Created ${filename}`);
  });
  
  log.info('Sample content created! Run "hexo generate" to build your site.');
});