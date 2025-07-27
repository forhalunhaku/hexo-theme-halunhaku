# NPM Publishing Script for Hexo Theme Halunhaku v2.0.0

Write-Host "🚀 Publishing Hexo Theme Halunhaku v2.0.0 to NPM..." -ForegroundColor Green

# Check if logged in to npm
Write-Host "Checking NPM authentication..." -ForegroundColor Cyan
npm whoami

if ($LASTEXITCODE -ne 0) {
    Write-Host "Please login to NPM first:" -ForegroundColor Yellow
    Write-Host "npm login" -ForegroundColor White
    exit 1
}

# Verify package.json
Write-Host "Verifying package.json..." -ForegroundColor Cyan
$packageJson = Get-Content "package.json" | ConvertFrom-Json
Write-Host "Package: $($packageJson.name)" -ForegroundColor White
Write-Host "Version: $($packageJson.version)" -ForegroundColor White
Write-Host "Description: $($packageJson.description)" -ForegroundColor White

# Check if version already exists
Write-Host "Checking if version already exists on NPM..." -ForegroundColor Cyan
npm view hexo-theme-halunhaku@2.0.0 2>$null

if ($LASTEXITCODE -eq 0) {
    Write-Host "Version 2.0.0 already exists on NPM!" -ForegroundColor Red
    Write-Host "Consider updating the version number." -ForegroundColor Yellow
    exit 1
}

# Run npm pack to test
Write-Host "Testing package creation..." -ForegroundColor Cyan
npm pack --dry-run

if ($LASTEXITCODE -ne 0) {
    Write-Host "Package creation failed!" -ForegroundColor Red
    exit 1
}

# Confirm publication
Write-Host ""
Write-Host "Ready to publish to NPM!" -ForegroundColor Green
Write-Host "This will publish hexo-theme-halunhaku@2.0.0" -ForegroundColor Yellow
Write-Host ""
$confirm = Read-Host "Do you want to continue? (y/N)"

if ($confirm -ne "y" -and $confirm -ne "Y") {
    Write-Host "Publication cancelled." -ForegroundColor Yellow
    exit 0
}

# Publish to NPM
Write-Host "Publishing to NPM..." -ForegroundColor Green
npm publish

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "🎉 Successfully published to NPM!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Package URL: https://www.npmjs.com/package/hexo-theme-halunhaku" -ForegroundColor Cyan
    Write-Host "Install command: npm install hexo-theme-halunhaku" -ForegroundColor White
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Yellow
    Write-Host "1. Update README with npm installation instructions" -ForegroundColor White
    Write-Host "2. Share on social media and communities" -ForegroundColor White
    Write-Host "3. Submit to Hexo themes list" -ForegroundColor White
} else {
    Write-Host "❌ Publication failed!" -ForegroundColor Red
    Write-Host "Check the error messages above." -ForegroundColor Yellow
}