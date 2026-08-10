@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

set "WORKDIR=C:\AI\purplestar"
set "OUTDIR=C:\Users\K.Gao\AppData\Local\Claude-3p\local-agent-mode-sessions\7914a8e0\00000000\local_3607512d-53aa-407a-b183-e141048f6b7d\outputs\purplestar"

echo WORKDIR=%WORKDIR%
echo OUTDIR=%OUTDIR%
echo.

if not exist "%WORKDIR%" (echo [FATAL] WorkDir does not exist: %WORKDIR% & pause & exit /b 1)

echo === 1) Delete old [id] folders ===
if exist "%WORKDIR%\app\chart\[id]" (rd /s /q "%WORKDIR%\app\chart\[id]") else (echo [skip] chart\[id])
if exist "%WORKDIR%\app\chart\[id]" (echo [WARN] chart\[id] still exists) else (echo [OK] chart\[id] deleted)
if exist "%WORKDIR%\app\report\[id]" (rd /s /q "%WORKDIR%\app\report\[id]") else (echo [skip] report\[id])
if exist "%WORKDIR%\app\report\[id]" (echo [WARN] report\[id] still exists) else (echo [OK] report\[id] deleted)
echo.

echo === 2) Copy 3 new files ===
copy /Y "%OUTDIR%\app\chart\page.tsx" "%WORKDIR%\app\chart\page.tsx" >nul && echo [OK] chart\page.tsx || echo [FAIL] chart\page.tsx
copy /Y "%OUTDIR%\app\report\page.tsx" "%WORKDIR%\app\report\page.tsx" >nul && echo [OK] report\page.tsx || echo [FAIL] report\page.tsx
copy /Y "%OUTDIR%\components\ChartForm.tsx" "%WORKDIR%\components\ChartForm.tsx" >nul && echo [OK] ChartForm.tsx || echo [FAIL] ChartForm.tsx
echo.

echo === 3) Verify directory contents ===
echo   app\chart:
if exist "%WORKDIR%\app\chart\" (dir /B "%WORKDIR%\app\chart\") else (echo    [missing!])
echo   app\report:
if exist "%WORKDIR%\app\report\" (dir /B "%WORKDIR%\app\report\") else (echo    [missing!])
echo.

echo === 4) Check stale [id] dirs ===
set STALE=0
if exist "%WORKDIR%\app\chart\[id]" (echo [STALE] chart\[id] & set STALE=1) else (echo [OK] chart clean)
if exist "%WORKDIR%\app\report\[id]" (echo [STALE] report\[id] & set STALE=1) else (echo [OK] report clean)
if "!STALE!"=="1" goto :abort

echo === 5) npm run build ===
cd /d "%WORKDIR%"
call npm run build > "%WORKDIR%\build-output.txt" 2>&1
if %ERRORLEVEL% == 0 (echo ==== BUILD OK ====) else (echo ==== BUILD FAILED exit=%ERRORLEVEL% - see build-output.txt ====)
echo Done.
endlocal
exit /b 0

:abort
echo ABORT: stale [id] dirs. Delete manually then re-run.
endlocal
exit /b 1