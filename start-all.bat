@echo off
echo ================================
echo Запуск Backend и Frontend
echo ================================
echo.

echo 🚀 Запускаем Backend сервер...
start "Backend Server" cmd /k "npm run server"

timeout /t 3 /nobreak >nul

echo 🚀 Запускаем Frontend...
start "Frontend Dev Server" cmd /k "npm run dev"

echo.
echo ✅ Запущено!
echo.
echo Backend:  http://localhost:4001
echo Frontend: http://localhost:4000
echo.
echo Открывайте: http://localhost:4000
echo.
pause
