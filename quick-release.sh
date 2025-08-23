#!/bin/bash

# 快速发布指南
# Quick Release Guide for Hexo Theme Halunhaku

echo "🚀 Hexo Theme Halunhaku - 快速发布指南"
echo "=================================="
echo ""

echo "📋 发布步骤:"
echo ""
echo "1. 进入主题目录:"
echo "   cd themes/halunhaku"
echo ""
echo "2. 运行自动发布脚本:"
echo "   ./scripts/release.sh"
echo ""
echo "   或者手动发布:"
echo "   git add ."
echo "   git commit -m 'chore: release v2.1.0'"
echo "   git push origin main"
echo "   git tag -a v2.1.0 -m 'Release v2.1.0'"
echo "   git push origin v2.1.0"
echo "   npm publish"
echo ""

echo "📦 当前状态:"
if [ -f "package.json" ]; then
    CURRENT_VERSION=$(node -p "require('./package.json').version")
    echo "   版本: v$CURRENT_VERSION"
    echo "   包名: hexo-theme-halunhaku"
else
    echo "   ❌ 未找到 package.json，请确保在主题目录中运行"
    exit 1
fi

echo ""
echo "🔗 发布链接:"
echo "   GitHub: https://github.com/forhalunhaku/hexo-theme-halunhaku"
echo "   NPM: https://www.npmjs.com/package/hexo-theme-halunhaku"
echo ""

echo "💡 提示:"
echo "   - 发布前请确保所有测试通过"
echo "   - 更新CHANGELOG.md记录变更"
echo "   - 确保版本号遵循语义化版本规范"
echo ""

# 检查Git状态
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  有未提交的更改:"
    git status --short
else
    echo "✅ 工作目录是干净的，可以发布"
fi

echo ""
echo "🚀 准备好了吗？运行发布脚本:"
echo "   ./scripts/release.sh"