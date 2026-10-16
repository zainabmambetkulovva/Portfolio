@echo off
echo ================================
echo Проверка Backend сервера
echo ================================
echo.

echo Проверяем порт 4001...
curl -s http://localhost:4001/api/health

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Backend работает!
) else (
    echo.
    echo ❌ Backend не запущен!
    echo.
    echo Запустите backend:
    echo   1. Двойной клик на start-server.bat
    echo   ИЛИ
    echo   2. npm run server
)

echo.
pause
