# Портфолио Зайнаб Мамбеткуловой

Современное портфолио Frontend-разработчика с использованием React, Node.js и MongoDB.

## 🎨 Дизайн

- Нежно-зеленая и сливочная цветовая палитра
- Анимированные элементы с Framer Motion
- Адаптивный дизайн для всех устройств
- Плавные переходы и эффекты

## 🛠 Технологии

### Frontend
- React 18
- Vite
- Framer Motion (анимации)
- CSS3 (Grid, Flexbox, градиенты)

### Backend
- Node.js
- Express
- MongoDB + Mongoose
- CORS

## 📦 Установка

### 1. Установите зависимости

```bash
npm install
```

### 2. Установите и запустите MongoDB

#### Windows:
- Скачайте MongoDB Community Server: https://www.mongodb.com/try/download/community
- Установите и запустите службу MongoDB

#### Или используйте MongoDB Atlas (облачная БД):
- Зарегистрируйтесь на https://www.mongodb.com/cloud/atlas
- Создайте кластер
- Получите строку подключения и замените в `.env`

### 3. Настройте переменные окружения

Файл `.env` уже создан со следующими параметрами:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/zainab-portfolio
NODE_ENV=development
```

## 🚀 Запуск проекта

### Запустить backend сервер:
```bash
npm run server
```
Сервер запустится на http://localhost:5000

### Запустить frontend (в другом терминале):
```bash
npm run dev
```
Приложение откроется на http://localhost:3000

### Инициализировать данные в БД:
После запуска сервера, отправьте POST запрос:
```bash
curl -X POST http://localhost:5000/api/portfolio/seed
```

Или откройте в браузере и используйте инструменты разработчика для отправки запроса.

## 📁 Структура проекта

```
портфолио/
├── src/                    # Frontend код
│   ├── components/        # React компоненты
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Achievements.jsx
│   │   ├── Languages.jsx
│   │   ├── Qualities.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── server/                # Backend код
│   └── index.js          # Express сервер + MongoDB
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🔌 API Endpoints

- `GET /api/health` - Проверка работы сервера
- `GET /api/portfolio` - Получить данные портфолио
- `POST /api/portfolio` - Создать новое портфолио
- `PUT /api/portfolio/:id` - Обновить портфолио
- `POST /api/portfolio/seed` - Заполнить БД начальными данными

## 🎯 Особенности

- ✨ Плавные анимации при прокрутке
- 🎨 Современный дизайн с градиентами
- 📱 Полностью адаптивный
- 🗄️ Данные хранятся в MongoDB
- 🔄 REST API для управления данными
- ⚡ Быстрая сборка с Vite

## 📝 Разработка

Проект настроен для разработки с hot reload:
- Frontend автоматически перезагружается при изменении файлов
- Backend требует перезапуска при изменении server/index.js

## 🌐 Деплой

### Frontend (Vercel):
```bash
npm run build
# Загрузите папку dist на Vercel
```

### Backend (Heroku, Railway, или VPS):
1. Настройте MongoDB Atlas
2. Обновите переменные окружения
3. Разверните сервер

## 📧 Контакты

- Email: zainabmambetkulovva@gmail.com
- GitHub: github.com/zainabmambetkulovva
- Телефон: +996 507 210 811

---

Создано с 💚 в Бишкеке, Кыргызстан
