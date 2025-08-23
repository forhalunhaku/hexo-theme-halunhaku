#!/bin/bash

# Hexo Theme Halunhaku - Release Script
# 自动化发布到 GitHub 和 NPM

set -e

echo "🚀 开始发布 Hexo Theme Halunhaku..."

# 获取当前版本
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo "📦 当前版本: v$CURRENT_VERSION"

# 检查是否在主题目录
if [ ! -f "package.json" ] || [ ! -d "layout" ]; then
    echo "❌ 错误: 请在主题根目录运行此脚本"
    exit 1
fi

# 检查Git状态
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  工作目录有未提交的更改，正在添加到Git..."
    git add .
    
    echo "💬 请输入提交信息 (或按Enter使用默认信息):"
    read -r COMMIT_MSG
    if [ -z "$COMMIT_MSG" ]; then
        COMMIT_MSG="chore: release v$CURRENT_VERSION - enhanced navigation and user experience"
    fi
    
    git commit -m "$COMMIT_MSG"
    echo "✅ 更改已提交"
else
    echo "✅ 工作目录是干净的"
fi

# 推送到远程仓库
echo "📤 推送到 GitHub..."
git push origin main

# 创建并推送标签
echo "🏷️  创建版本标签..."
git tag -a "v$CURRENT_VERSION" -m "Release v$CURRENT_VERSION

主要更新:
- 固定导航栏，滚动时保持可见
- 标题点击返回首页功能
- 统一移动端和桌面端按钮样式
- 增强导航链接下划线动画效果
- 改善移动端菜单可读性
- 优化滚动时的视觉反馈效果"

git push origin "v$CURRENT_VERSION"
echo "✅ 标签已推送到 GitHub"

# 检查NPM登录状态
if ! npm whoami > /dev/null 2>&1; then
    echo "🔐 请先登录 NPM:"
    npm login
fi

# 发布到NPM
echo "📦 发布到 NPM..."
npm publish

echo "🎉 发布完成!"
echo ""
echo "📋 发布总结:"
echo "   📦 版本: v$CURRENT_VERSION"
echo "   🐙 GitHub: https://github.com/forhalunhaku/hexo-theme-halunhaku/releases/tag/v$CURRENT_VERSION"
echo "   📦 NPM: https://www.npmjs.com/package/hexo-theme-halunhaku"
echo ""
echo "🔗 下一步:"
echo "   1. 在 GitHub 上编辑 Release 说明"
echo "   2. 更新文档和示例"
echo "   3. 在社区分享更新"
echo ""
echo "✨ 感谢使用 Hexo Theme Halunhaku!"