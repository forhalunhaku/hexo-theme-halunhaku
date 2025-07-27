# 发布指南 - Hexo Theme Halunhaku v2.0.0

## 📦 NPM 发布

### 准备工作
1. **确保已登录NPM**：
   ```bash
   npm login
   ```

2. **验证登录状态**：
   ```bash
   npm whoami
   ```

### 发布到NPM
```powershell
# 运行发布脚本
.\publish-npm.ps1

# 或手动发布
npm publish
```

### 验证发布
- 访问：https://www.npmjs.com/package/hexo-theme-halunhaku
- 测试安装：`npm install hexo-theme-halunhaku`

## 🎯 Hexo 官方主题库提交

### 1. Fork Hexo 网站仓库
```bash
# Fork https://github.com/hexojs/site
git clone https://github.com/YOUR_USERNAME/site.git hexo-site
cd hexo-site
```

### 2. 添加主题信息
编辑 `source/_data/themes.yml`，添加：

```yaml
- name: Halunhaku
  description: A modern, responsive Hexo theme with enhanced code blocks, perfect cover images, and Chinese text optimization
  link: https://github.com/forhalunhaku/hexo-theme-halunhaku
  preview: https://blog.halunhaku.top
  tags:
    - responsive
    - modern
    - code-highlighting
    - chinese-support
    - mobile-first
    - dark-theme
    - light-theme
```

### 3. 提交 Pull Request
```bash
git add .
git commit -m "Add Halunhaku theme"
git push origin main
# 然后在GitHub上创建PR
```

## 🌟 推广和分享

### 社区分享
1. **Hexo 社区**：
   - [Hexo Discord](https://discord.gg/hexo)
   - [Hexo 论坛](https://github.com/hexojs/hexo/discussions)

2. **技术社区**：
   - 掘金、CSDN、博客园
   - Reddit r/hexo
   - Dev.to

3. **社交媒体**：
   - Twitter/X 使用 #hexo #theme 标签
   - 微博分享

### 博客文章
写一篇详细的介绍文章，包括：
- 主题特性介绍
- 安装和配置指南
- 设计理念和技术实现
- 使用截图和演示

## 📊 发布后维护

### 监控和反馈
- 关注GitHub Issues
- 监控NPM下载量
- 收集用户反馈

### 持续更新
- 修复bug
- 添加新功能
- 保持与Hexo最新版本兼容
- 更新文档

## 🔗 重要链接

- **GitHub仓库**：https://github.com/forhalunhaku/hexo-theme-halunhaku
- **NPM包**：https://www.npmjs.com/package/hexo-theme-halunhaku
- **演示站点**：https://blog.halunhaku.top
- **文档**：README.md 和相关指南

## ✅ 发布检查清单

- [ ] NPM包发布成功
- [ ] GitHub Release创建
- [ ] 提交到Hexo官方主题库
- [ ] 更新README安装说明
- [ ] 社区分享和推广
- [ ] 监控反馈和问题

祝发布成功！🎉