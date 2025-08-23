# Hexo Theme Halunhaku - 性能和SEO优化建议

## 1. 性能优化

### Tailwind CSS 本地构建
```bash
# 安装依赖
npm install -D tailwindcss postcss autoprefixer
npm install -D @tailwindcss/typography @tailwindcss/forms

# 创建 tailwind.config.js
npx tailwindcss init -p
```

### CSS 压缩配置
```javascript
// hexo-renderer-stylus 配置
// 在 _config.yml 中添加：
stylus:
  compress: true
  sourcemaps: false
```

### 图片优化
```bash
# 安装图片优化插件
npm install hexo-imagemin --save-dev
```

### 代码压缩
```bash
# 安装 JS/CSS 压缩插件
npm install hexo-neat --save-dev
```

## 2. SEO 优化

### Meta 标签增强
在 `layout/_partial/meta.ejs` 中添加：
```html
<!-- 基础 Meta -->
<meta name="description" content="<%= page.description || config.description %>">
<meta name="keywords" content="<%= page.keywords || config.keywords %>">
<meta name="author" content="<%= config.author %>">

<!-- Open Graph -->
<meta property="og:type" content="<%= page.layout === 'post' ? 'article' : 'website' %>">
<meta property="og:title" content="<%= page.title || config.title %>">
<meta property="og:description" content="<%= page.description || config.description %>">
<meta property="og:url" content="<%= config.url + url_for(page.path) %>">
<meta property="og:site_name" content="<%= config.title %>">
<% if (page.cover || page.thumbnail) { %>
<meta property="og:image" content="<%= page.cover || page.thumbnail %>">
<% } %>

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="<%= page.title || config.title %>">
<meta name="twitter:description" content="<%= page.description || config.description %>">
<% if (page.cover || page.thumbnail) { %>
<meta name="twitter:image" content="<%= page.cover || page.thumbnail %>">
<% } %>

<!-- 结构化数据 -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "<%= page.layout === 'post' ? 'Article' : 'WebSite' %>",
  "headline": "<%= page.title || config.title %>",
  "description": "<%= page.description || config.description %>",
  <% if (page.layout === 'post') { %>
  "author": {
    "@type": "Person",
    "name": "<%= config.author %>"
  },
  "datePublished": "<%= page.date.toISOString() %>",
  "dateModified": "<%= (page.updated || page.date).toISOString() %>",
  <% } %>
  "url": "<%= config.url + url_for(page.path) %>"
}
</script>
```

### 站点地图配置
```yaml
# _config.yml
sitemap:
  path: sitemap.xml
  template: ./sitemap_template.xml
  rel: false
  tags: true
  categories: true
```

## 3. 缓存优化

### Service Worker
创建 `source/sw.js`：
```javascript
const CACHE_NAME = 'halunhaku-v1';
const urlsToCache = [
  '/',
  '/css/style.css',
  '/js/main.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      }
    )
  );
});
```

## 4. CDN 配置建议

### 国内 CDN
```yaml
# _config.yml
cdn:
  # 字体
  google_fonts: //fonts.loli.net
  # 图标
  fontawesome: //lib.baomitu.com/font-awesome/5.15.4
  # JS 库
  jquery: //lib.baomitu.com/jquery/3.6.0
```

### 静态资源优化
```yaml
# 启用 gzip 压缩
neat:
  enable: true
  html:
    enable: true
    exclude:
  css:
    enable: true
    exclude:
      - '*.min.css'
  js:
    enable: true
    mangle: true
    output:
    compress:
    exclude:
      - '*.min.js'
```

## 5. 监控和分析

### Google Analytics 4
```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Core Web Vitals 监控
```javascript
// 添加到主题 JS 中
import {getCLS, getFID, getFCP, getLCP, getTTFB} from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

## 6. 安全性优化

### CSP 配置
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https:;
">
```

### 安全头
```html
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="X-Frame-Options" content="DENY">
<meta http-equiv="X-XSS-Protection" content="1; mode=block">
```

## 7. 可访问性优化

### ARIA 标签
- 为所有交互元素添加适当的 ARIA 标签
- 确保键盘导航支持
- 提供屏幕阅读器友好的内容结构

### 色彩对比
- 确保文本与背景有足够的对比度（至少 4.5:1）
- 提供高对比度主题选项

## 8. 移动端优化

### PWA 支持
创建 `source/manifest.json`：
```json
{
  "name": "Halunhaku Blog",
  "short_name": "Halunhaku",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0c7ff2",
  "icons": [
    {
      "src": "/images/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

### 触摸优化
```css
/* 改善触摸体验 */
.touch-friendly {
  min-height: 44px;
  min-width: 44px;
  touch-action: manipulation;
}
```

这些优化建议可以显著提升你的主题性能、SEO 表现和用户体验！