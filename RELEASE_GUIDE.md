# 🚀 主题发布指南

## 📋 发布前检查清单

### 1. **代码质量检查**
- [ ] 所有新功能都已测试
- [ ] 代码符合项目规范
- [ ] 没有控制台错误或警告
- [ ] 移动端适配正常
- [ ] 深色/浅色主题都正常工作

### 2. **文档更新**
- [ ] README.md 已更新新功能说明
- [ ] CHANGELOG.md 已记录所有变更
- [ ] 配置示例已更新
- [ ] 图片和截图是最新的

### 3. **版本控制**
- [ ] 所有文件已提交到Git
- [ ] package.json 版本号已更新
- [ ] 分支是clean状态

## 🔄 发布流程

### 自动发布 (推荐)

使用提供的发布脚本：

```bash
# 进入主题目录
cd themes/halunhaku

# 运行发布脚本
chmod +x scripts/release.sh
./scripts/release.sh
```

这个脚本会自动：
1. 检查Git状态
2. 提交未提交的更改
3. 推送到GitHub
4. 创建版本标签
5. 发布到NPM

### 手动发布

如果你喜欢手动控制每个步骤：

#### 1. **更新版本号**
```bash
# 更新package.json中的版本号
# 遵循语义化版本：MAJOR.MINOR.PATCH
# 2.1.0 -> 2.1.1 (修复)
# 2.1.0 -> 2.2.0 (新功能)
# 2.1.0 -> 3.0.0 (破坏性更改)
```

#### 2. **更新CHANGELOG**
在 `CHANGELOG.md` 顶部添加新版本记录：

```markdown
## [2.1.1] - 2025-08-23

### 🐛 Fixed
- 修复移动端菜单显示问题
- 优化响应式布局

### 🔧 Improved  
- 提升滚动性能
- 增强主题切换体验
```

#### 3. **Git提交和标签**
```bash
# 添加所有更改
git add .

# 提交更改
git commit -m "chore: release v2.1.1 - bug fixes and improvements"

# 推送到远程
git push origin main

# 创建标签
git tag -a "v2.1.1" -m "Release v2.1.1"

# 推送标签
git push origin v2.1.1
```

#### 4. **发布到NPM**
```bash
# 确保已登录NPM
npm whoami

# 如果未登录
npm login

# 发布
npm publish
```

#### 5. **创建GitHub Release**
1. 访问 [GitHub Releases](https://github.com/forhalunhaku/hexo-theme-halunhaku/releases)
2. 点击 "Create a new release"
3. 选择刚创建的标签
4. 填写Release标题和说明
5. 发布

## 📝 版本规划

### 版本号规则
遵循 [语义化版本](https://semver.org/) 规范：

- **MAJOR** (主版本): 不兼容的API修改
- **MINOR** (次版本): 向下兼容的功能性新增
- **PATCH** (修订版本): 向下兼容的问题修正

### 当前版本线路图

**v2.1.x** - 用户体验增强
- ✅ v2.1.0: 固定导航栏和导航增强
- 🔄 v2.1.1: 移动端优化和bug修复
- 📋 v2.1.2: 性能优化和A11y改进

**v2.2.x** - 功能扩展
- 📋 评论系统集成
- 📋 搜索功能增强
- 📋 社交分享功能

**v3.0.x** - 重大更新
- 📋 新的设计系统
- 📋 组件化架构
- 📋 自定义配置UI

## 🧪 测试指南

### 发布前测试

```bash
# 1. 清理缓存
hexo clean

# 2. 生成静态文件
hexo generate

# 3. 启动本地服务器
hexo server

# 4. 测试功能
# - 导航是否正常
# - 移动端菜单是否工作
# - 主题切换是否正常
# - 搜索功能是否正常
# - 响应式布局是否正确
```

### 跨浏览器测试
- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- 移动端浏览器

### 设备测试
- 桌面 (1920x1080+)
- 平板 (768px-1024px)
- 手机 (320px-767px)

## 📞 支持和反馈

### 问题报告
如果用户报告问题：

1. **收集信息**
   - Hexo版本
   - Node.js版本
   - 主题版本
   - 错误日志

2. **重现问题**
   - 在本地环境重现
   - 记录重现步骤

3. **修复和发布**
   - 修复问题
   - 编写测试用例
   - 发布修复版本

### 社区支持
- GitHub Issues: bug报告和功能请求
- GitHub Discussions: 使用问题和讨论
- Email: 直接联系维护者

## 🚀 发布后任务

1. **监控**
   - 检查NPM下载统计
   - 关注GitHub Issues
   - 收集用户反馈

2. **宣传**
   - 更新文档网站
   - 社交媒体分享
   - 社区公告

3. **维护**
   - 及时回复Issues
   - 处理Pull Requests
   - 规划下个版本

## 📈 发布统计

### 当前状态
- 📦 NPM包: `hexo-theme-halunhaku`
- 🐙 GitHub: `forhalunhaku/hexo-theme-halunhaku`
- 📊 下载量: [查看NPM统计](https://npm-stat.com/charts.html?package=hexo-theme-halunhaku)
- ⭐ Stars: [查看GitHub](https://github.com/forhalunhaku/hexo-theme-halunhaku/stargazers)

### 发布历史
- v1.0.0 (2025-07-25): 初始发布
- v2.0.0 (2025-07-27): 重大重构和功能增强
- v2.1.0 (2025-08-23): 导航和用户体验优化

---

💡 **提示**: 定期发布小版本比积累大量更改后发布大版本更好，这样用户可以更快获得改进，问题也更容易定位和修复。