@echo off
echo ================================
echo Запуск Backend Server (Node.js)
echo ================================
echo.
echo API будет доступен на http://localhost:4001
echo.
echo Запускаем сервер...
echo.

node server/index.js

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ Ошибка запуска!
    echo.
    echo Возможные причины:
    echo 1. Пакеты не установлены - выполните: npm install
    echo 2. Порт 4001 занят - закройте другие приложения
    echo 3. Ошибка в коде сервера
    echo.
    pause
)
