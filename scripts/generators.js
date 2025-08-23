// Override default Hexo generators to ensure proper page generation

// Categories generator - override the default one
hexo.extend.generator.register('category', function(locals) {
  const categories = locals.categories;
  const result = [];
  
  if (!categories || categories.length === 0) {
    // Still generate the categories index page even if no categories
    result.push({
      path: 'categories/index.html',
      data: {
        __categories: true,
        categories: []
      },
      layout: ['categories', 'index']
    });
    return result;
  }
  
  // Generate categories index page
  result.push({
    path: 'categories/index.html',
    data: {
      __categories: true,
      categories: categories
    },
    layout: ['categories', 'index']
  });
  
  // Generate individual category pages
  categories.each(function(category) {
    const posts = category.posts.sort('-date');
    
    result.push({
      path: category.path,
      data: {
        __category: true,
        category: category.name,
        posts: posts
      },
      layout: ['category', 'index']
    });
  });
  
  return result;
});

// Tags generator - override the default one
hexo.extend.generator.register('tag', function(locals) {
  const tags = locals.tags;
  const result = [];
  
  if (!tags || tags.length === 0) {
    // Still generate the tags index page even if no tags
    result.push({
      path: 'tags/index.html',
      data: {
        __tags: true,
        tags: []
      },
      layout: ['tags', 'index']
    });
    return result;
  }
  
  // Generate tags index page
  result.push({
    path: 'tags/index.html',
    data: {
      __tags: true,
      tags: tags
    },
    layout: ['tags', 'index']
  });
  
  // Generate individual tag pages
  tags.each(function(tag) {
    const posts = tag.posts.sort('-date');
    
    result.push({
      path: tag.path,
      data: {
        __tag: true,
        tag: tag.name,
        posts: posts
      },
      layout: ['tag', 'index']
    });
  });
  
  return result;
});

