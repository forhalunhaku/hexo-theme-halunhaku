// Debug helper for Stitch theme

hexo.extend.console.register('debug:generators', 'Debug generator output', function(args) {
  const log = this.log;
  
  log.info('=== Debugging Stitch Theme Generators ===');
  
  // Get locals
  const locals = hexo.locals.toObject();
  
  log.info(`Posts: ${locals.posts.length}`);
  log.info(`Categories: ${locals.categories.length}`);
  log.info(`Tags: ${locals.tags.length}`);
  
  // Test categories generator
  log.info('\n--- Categories Generator ---');
  const categoriesGen = hexo.extend.generator.get('category');
  if (categoriesGen) {
    try {
      const categoryPages = categoriesGen.call(hexo, locals);
      log.info(`Generated ${categoryPages.length} category pages:`);
      categoryPages.forEach(page => {
        log.info(`  - ${page.path}`);
      });
    } catch (error) {
      log.error('Categories generator error:', error.message);
    }
  } else {
    log.error('Categories generator not found!');
  }
  
  // Test tags generator
  log.info('\n--- Tags Generator ---');
  const tagsGen = hexo.extend.generator.get('tag');
  if (tagsGen) {
    try {
      const tagPages = tagsGen.call(hexo, locals);
      log.info(`Generated ${tagPages.length} tag pages:`);
      tagPages.forEach(page => {
        log.info(`  - ${page.path}`);
      });
    } catch (error) {
      log.error('Tags generator error:', error.message);
    }
  } else {
    log.error('Tags generator not found!');
  }
  
  // List all registered generators
  log.info('\n--- All Registered Generators ---');
  const allGenerators = hexo.extend.generator.list();
  Object.keys(allGenerators).forEach(name => {
    log.info(`  - ${name}`);
  });
});

// Quick fix command
hexo.extend.console.register('fix:categories', 'Quick fix for categories issue', function(args) {
  const log = this.log;
  const fs = require('fs');
  const path = require('path');
  
  log.info('Applying quick fix for categories/tags pages...');
  
  // Check if we're in the right directory
  const themeDir = hexo.theme_dir;
  const scriptsDir = path.join(themeDir, 'scripts');
  
  if (!fs.existsSync(scriptsDir)) {
    log.error('Scripts directory not found. Make sure you\'re in the theme directory.');
    return;
  }
  
  // Force regenerate
  log.info('Clearing cache and regenerating...');
  
  return hexo.call('clean').then(() => {
    log.info('Cache cleared');
    return hexo.call('generate');
  }).then(() => {
    log.info('Site regenerated');
    log.info('Try accessing /categories/ and /tags/ now');
  }).catch(error => {
    log.error('Error during regeneration:', error.message);
  });
});