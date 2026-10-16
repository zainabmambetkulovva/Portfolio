# 🚀 Быстрый старт

## Шаг 1: Установка зависимостей

Запустите файл `install.bat` (двойной клик) или выполните в терминале:
```bash
npm install
```

Это установит все необходимые пакеты:
- React, React DOM
- Vite (сборщик)
- Framer Motion (анимации)
- Express (backend)
- MongoDB/Mongoose (база данных)
- И другие зависимости

## Шаг 2: Установка MongoDB (опционально)

### Вариант A: Локальная установка MongoDB
1. Скачайте MongoDB Community Server: https://www.mongodb.com/try/download/community
2. Установите и запустите MongoDB

### Вариант B: Использовать MongoDB Atlas (рекомендуется)
1. Зарегистрируйтесь на https://www.mongodb.com/cloud/atlas (бесплатно)
2. Создайте бесплатный кластер
3. Получите строку подключения (connection string)
4. Замените в файле `.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/zainab-portfolio
   ```

### Вариант C: Работа без БД (временно)
Сайт будет работать с жестко заданными данными в коде, даже если MongoDB не установлена.

## Шаг 3: Запуск проекта

### Способ 1: Использовать .bat файлы (Windows)

**Запустить Frontend:**
- Двойной клик на `start-dev.bat`
- Откроется на http://localhost:3000

**Запустить Backend (в другом окне):**
- Двойной клик на `start-server.bat`  
- API будет на http://localhost:5000

### Способ 2: Через терминал

Откройте **два терминала**:

**Терминал 1 - Frontend:**
```bash
npm run dev
```

**Терминал 2 - Backend:**
```bash
npm run server
```

## Шаг 4: Заполнить БД начальными данными (если используете MongoDB)

Когда backend запущен, выполните:
```bash
curl -X POST http://localhost:5000/api/portfolio/seed
```

Или откройте в браузере и в консоли разработчика (F12) выполните:
```javascript
fetch('http://localhost:5000/api/portfolio/seed', { method: 'POST' })
  .then(res => res.json())
  .then(data => console.log(data))
```

## ✅ Готово!

Откройте http://localhost:3000 в браузере и наслаждайтесь вашим портфолио!

## 🔧 Возможные проблемы

### Порт занят
Если порт 3000 или 5000 занят:
1. Измените порты в:
   - `vite.config.js` (для frontend)
   - `.env` файле (для backend)

### MongoDB не подключается
- Убедитесь, что MongoDB запущена
- Проверьте строку подключения в `.env`
- Или используйте временный режим без БД

### Ошибка при установке пакетов
```bash
npm cache clean --force
npm install
```

## 📝 Структура проекта

```
портфолио/
├── src/              # React компоненты (frontend)
├── server/           # Express API (backend)
├── install.bat       # Скрипт установки
├── start-dev.bat     # Запуск frontend
├── start-server.bat  # Запуск backend
└── README.md         # Полная документация
```

## 🎨 Что дальше?

- Отредактируйте данные в `server/index.js` (функция seed)
- Измените цвета в CSS файлах
- Добавьте свои проекты и достижения
- Разместите на Vercel или Netlify

---

Удачи! 💚
