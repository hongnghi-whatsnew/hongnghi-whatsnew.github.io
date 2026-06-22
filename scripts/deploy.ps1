# Deploy trang thong bao PM ERP len IIS (Windows PowerShell).
# Chay tren may chu IIS (hoac duoc CI goi). Build bang Node roi doi thu muc kieu atomic.
#
#   powershell -ExecutionPolicy Bypass -File scripts\deploy.ps1
#
$ErrorActionPreference = 'Stop'

# >>> SUA DUONG DAN NAY cho dung site IIS cua ban <<<
$SitePath = 'D:\inetpub\mdf-whatsnew'

$RepoRoot = Split-Path -Parent $PSScriptRoot
$Parent   = Split-Path -Parent $SitePath
$Leaf     = Split-Path -Leaf   $SitePath
$Stamp    = Get-Date -Format 'yyyyMMddHHmmss'
$Staging  = Join-Path $Parent "${Leaf}_staging_$Stamp"
$BackupLeaf = "${Leaf}_backup_$Stamp"

Write-Host '==> Build (node build.mjs)...' -ForegroundColor Cyan
Push-Location $RepoRoot
try {
    & node build.mjs
    if ($LASTEXITCODE -ne 0) { throw "Build that bai (exit $LASTEXITCODE)." }
} finally {
    Pop-Location
}

$Dist = Join-Path $RepoRoot 'dist'
if (-not (Test-Path $Dist)) { throw "Khong thay thu muc dist/. Build that bai?" }

Write-Host "==> Copy sang staging: $Staging" -ForegroundColor Cyan
New-Item -ItemType Directory -Path $Staging -Force | Out-Null
Copy-Item -Path (Join-Path $Dist '*') -Destination $Staging -Recurse -Force

Write-Host '==> Doi thu muc (atomic swap)...' -ForegroundColor Cyan
if (Test-Path $SitePath) {
    Rename-Item -Path $SitePath -NewName $BackupLeaf
}
Rename-Item -Path $Staging -NewName $Leaf

# Giu 3 ban backup gan nhat, xoa cu hon.
Get-ChildItem -Path $Parent -Directory -Filter "${Leaf}_backup_*" |
    Sort-Object Name -Descending |
    Select-Object -Skip 3 |
    Remove-Item -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "==> XONG. Da deploy vao: $SitePath" -ForegroundColor Green
Write-Host "    Rollback: doi ten thu muc '${Leaf}_backup_*' gan nhat thanh '$Leaf'."
