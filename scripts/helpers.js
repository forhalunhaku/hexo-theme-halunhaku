// Hexo helper functions for the Stitch theme

hexo.extend.helper.register('strip_html', function(str) {
  return str ? str.replace(/<[^>]*>/g, '') : '';
});

hexo.extend.helper.register('truncate', function(str, length) {
  if (!str) return '';
  return str.length > length ? str.substring(0, length) + '...' : str;
});

hexo.extend.helper.register('get_posts_by_category', function(category, limit) {
  const posts = this.site.posts.find({categories: category});
  return limit ? posts.limit(limit) : posts;
});

hexo.extend.helper.register('get_posts_by_tag', function(tag, limit) {
  const posts = this.site.posts.find({tags: tag});
  return limit ? posts.limit(limit) : posts;
});

hexo.extend.helper.register('get_popular_posts', function(limit = 5) {
  return this.site.posts.sort('date', -1).limit(limit);
});

hexo.extend.helper.register('format_date', function(date, format) {
  return this.moment(date).format(format || 'MMMM DD, YYYY');
});

hexo.extend.helper.register('reading_time', function(content) {
  const wordsPerMinute = 200;
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes + ' min read';
});

hexo.extend.helper.register('get_excerpt', function(post, length) {
  const excerptLength = length || this.theme.excerpt_length || 150;
  if (post.excerpt) {
    return this.strip_html(post.excerpt);
  }
  return this.strip_html(post.content).substring(0, excerptLength);
});

// Fix for theme access in helpers
hexo.extend.helper.register('theme_config', function(key) {
  return this.theme[key] || this.config.theme_config[key];
});