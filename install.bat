@echo off
echo ================================
echo Установка зависимостей проекта
echo ================================
echo.

echo Устанавливаем пакеты...
call npm install

echo.
echo ================================
echo Установка завершена!
echo ================================
echo.
echo Для запуска проекта используйте:
echo   npm run dev    - запуск frontend
echo   npm run server - запуск backend
echo.
pause
