@echo off
setlocal enabledelayedexpansion

set CF_ACCOUNT=b223a70bd22f72520da28f44807e7b6b
set CF_PROJECT=purplestar

echo === 1. git status ===
git status --short
echo.

echo === 2. git add all ===
git add -A
if errorlevel 1 (
  echo git add failed
  exit /b 1
)

echo === 3. git commit ===
git commit -m "fix(seo): serve sitemap.xml via Pages Function to bypass Cloudflare nosniff header (GSC fix)"
if errorlevel 1 (
  echo nothing to commit or commit failed
  exit /b 1
)

echo === 4. git push origin main ===
git push origin main
if errorlevel 1 (
  echo git push failed - check token / network
  exit /b 1
)
echo.
echo === Push OK! Cloudflare Pages auto-deploy triggered ===
echo Waiting 60s for Cloudflare to pick up the webhook...
ping -n 61 127.0.0.1 >nul

echo.
echo === 5. Get CF API token (optional, for deploy polling) ===
set /p CF_TOKEN="Enter Cloudflare API token (Enter to skip polling): "
if "%CF_TOKEN%"=="" goto :verify_og

echo.
echo === 6. Wait for Cloudflare Pages deploy to finish ===
for /L %%i in (1,1,8) do (
  curl.exe -sS --ssl-no-revoke -H "Authorization: Bearer %CF_TOKEN%" ^
    "https://api.cloudflare.com/client/v4/accounts/%CF_ACCOUNT%/pages/projects/%CF_PROJECT%/deployments?per_page=1" ^
    > %TEMP%\cf_deploy.json
  for /f "tokens=*" %%s in ('powershell -Command "(Get-Content '%TEMP%\cf_deploy.json' -Raw | ConvertFrom-Json).result[0].latest_stage.status"') do set STATUS=%%s
  for /f "tokens=*" %%u in ('powershell -Command "(Get-Content '%TEMP%\cf_deploy.json' -Raw | ConvertFrom-Json).result[0].url"') do set URL=%%u
  echo Iteration %%i: !STATUS! at !URL!
  if "!STATUS!"=="success" goto :deployed
  if "!STATUS!"=="failure" goto :failed
  ping -n 16 127.0.0.1 >nul
)
goto :deployed

:deployed
echo.
echo === DEPLOYED ===
echo Site: https://purplestar.cc
echo Latest deploy: !URL!

:verify_og
echo.
echo === 7. Verify OG meta tags deployed ===
curl.exe -sS https://purplestar.cc/learn/is-ziwei-doushu-accurate/ | findstr "og:title og:image twitter:card"
echo.
curl.exe -sS https://purplestar.cc/learn/ziwei-doushu-14-main-stars/ | findstr "og:title og:image twitter:card"
echo.
curl.exe -sS https://purplestar.cc/learn/ | findstr "og:title og:image twitter:card"
echo.
echo === DONE ===
exit /b 0

:failed
echo.
echo Deploy failed, check Cloudflare dashboard.
exit /b 1
