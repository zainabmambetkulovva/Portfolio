import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import pg from 'pg'

// Load environment variables
dotenv.config()

console.log('🔧 Инициализация сервера...')

const app = express()
const PORT = process.env.PORT || 4001
const { Pool } = pg

// Middleware
app.use(cors())
app.use(express.json())

console.log('✅ Middleware настроен')

// PostgreSQL connection pool
let pool
let dbConnected = false

try {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    },
    connectionTimeoutMillis: 5000,
    idleTimeoutMillis: 30000,
    max: 10
  })
  
  console.log('✅ Pool создан')
  
  // Test database connection (async)
  pool.query('SELECT NOW()')
    .then(result => {
      dbConnected = true
      console.log('✅ PostgreSQL (Neon) подключен:', result.rows[0].now)
    })
    .catch(err => {
      console.warn('⚠️ База данных недоступна:', err.message)
      console.log('💡 Сервер работает с локальными данными')
    })
    
} catch (error) {
  console.error('⚠️ Ошибка создания pool:', error.message)
  console.log('💡 Сервер продолжит работу без БД')
}

// Default data (fallback)
const defaultData = {
  name: 'Зайнаб Мамбеткулова',
  title: 'Начинающий Frontend-разработчик',
  age: 15,
  city: 'Бишкек, Кыргызстан',
  phone: '+996 507 210 811',
  email: 'zainabmambetkulovva@gmail.com',
  github: 'github.com/zainabmambetkulovva',
  instagram: '@mambetkulovaaa_',
  profile: 'Начинающий Frontend-разработчик с практическим опытом самостоятельной разработки веб-приложений и участия в командных IT-проектах. Работаю над созданием современных веб-сайтов и приложений, изучаю новые технологии и совершенствую навыки программирования.'
}

// API Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Сервер работает', 
    database: dbConnected ? 'Neon PostgreSQL (подключена)' : 'Локальные данные',
    port: PORT
  })
})

// Get portfolio data
app.get('/api/portfolio', async (req, res) => {
  if (!dbConnected || !pool) {
    return res.json(defaultData)
  }
  
  try {
    const result = await pool.query('SELECT * FROM portfolio ORDER BY id DESC LIMIT 1')
    
    if (result.rows.length === 0) {
      return res.json(defaultData)
    }
    
    res.json(result.rows[0])
  } catch (error) {
    console.error('Ошибка получения данных:', error.message)
    res.json(defaultData)
  }
})

// Get all projects
app.get('/api/projects', async (req, res) => {
  const defaultProjects = [
    {
      id: 1,
      title: 'EKIDOS TAXI — веб-приложение для заказа такси',
      description: 'Самостоятельно разработала веб-приложение для клиентов и водителей такси по принципу Яндекс Go. Реализовано отображение новых заказов в режиме реального времени для водителей.',
      tech: 'TypeScript, Python, PostgreSQL, Node.js, Express, Next.js, React Native, Tailwind CSS',
      links: [
        { url: 'https://ekidos-client.vercel.app', label: 'Клиентская версия' },
        { url: 'https://ekidos-taxi.vercel.app', label: 'Версия для водителей' }
      ]
    },
    {
      id: 2,
      title: 'MENU — веб-приложение для ресторанного меню',
      description: 'Разработала веб-приложение для отображения меню ресторана с удобным интерфейсом для просмотра блюд, цен и описаний.',
      tech: 'JavaScript, React, Vite, Supabase, PostgreSQL',
      link: 'https://menu-nu-murex.vercel.app/'
    },
    {
      id: 3,
      title: 'OKURMEN — сайт образовательного центра',
      description: 'Участвую в командной разработке сайта образовательного центра OKURMEN IT для представления информации об IT-курсах и образовательных программах.',
      tech: 'TypeScript, Next.js, Tailwind CSS',
      link: 'https://okurmen-seven.vercel.app/ky'
    },
    {
      id: 4,
      title: 'RONIN — сайт компьютерного клуба',
      description: 'Самостоятельно работаю над созданием сайта компьютерного клуба RONIN в Бишкеке с онлайн-бронированием компьютеров, просмотром характеристик и управлением тарифами.',
      tech: 'TypeScript, Next.js, React, Prisma ORM, PostgreSQL, NextAuth.js, Tailwind CSS',
      link: null
    }
  ]
  
  if (!dbConnected || !pool) {
    return res.json(defaultProjects)
  }
  
  try {
    const result = await pool.query('SELECT * FROM projects ORDER BY id')
    res.json(result.rows.length > 0 ? result.rows : defaultProjects)
  } catch (error) {
    console.error('Ошибка получения проектов:', error.message)
    res.json(defaultProjects)
  }
})

// Get all skills
app.get('/api/skills', async (req, res) => {
  const defaultSkills = [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'JavaScript' },
    { id: 4, name: 'React' },
    { id: 5, name: 'TypeScript' },
    { id: 6, name: 'Git' },
    { id: 7, name: 'GitHub' }
  ]
  
  if (!dbConnected || !pool) {
    return res.json(defaultSkills)
  }
  
  try {
    const result = await pool.query('SELECT * FROM skills ORDER BY id')
    res.json(result.rows.length > 0 ? result.rows : defaultSkills)
  } catch (error) {
    console.error('Ошибка получения навыков:', error.message)
    res.json(defaultSkills)
  }
})

// Get all achievements
app.get('/api/achievements', async (req, res) => {
  const defaultAchievements = [
    {
      id: 1,
      title: '🏅 Золотой сертификат — OKURMEN IT',
      description: 'Получила золотой сертификат в образовательном центре OKURMEN IT.',
      items: null
    },
    {
      id: 2,
      title: '🥇 Олимпиада по математике',
      description: null,
      items: [
        'Заняла 1-е место на олимпиаде по математике в Кыргызско-Турецком лицее имени Ч. Айтматова',
        'Заняла 2-е место на следующем этапе олимпиады в Ташкенте'
      ]
    },
    {
      id: 3,
      title: '💃 Танцевальные конкурсы',
      description: 'Трижды становилась обладательницей Гран-при на танцевальных конкурсах.',
      items: null
    }
  ]
  
  if (!dbConnected || !pool) {
    return res.json(defaultAchievements)
  }
  
  try {
    const result = await pool.query('SELECT * FROM achievements ORDER BY id')
    res.json(result.rows.length > 0 ? result.rows : defaultAchievements)
  } catch (error) {
    console.error('Ошибка получения достижений:', error.message)
    res.json(defaultAchievements)
  }
})

// Initialize database and seed data
app.post('/api/init', async (req, res) => {
  if (!pool) {
    return res.status(500).json({ 
      success: false,
      message: 'База данных недоступна' 
    })
  }
  
  const client = await pool.connect()
  
  try {
    await client.query('BEGIN')
    
    console.log('🔧 Создание таблиц...')
    
    // Create tables
    await client.query(`
      CREATE TABLE IF NOT EXISTS portfolio (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        age INTEGER,
        city VARCHAR(255),
        phone VARCHAR(50),
        email VARCHAR(255),
        github VARCHAR(255),
        profile TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)
    
    await client.query(`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)
    
    await client.query(`
      CREATE TABLE IF NOT EXISTS skills (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)
    
    await client.query(`
      CREATE TABLE IF NOT EXISTS achievements (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        items JSONB,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)
    
    await client.query(`
      CREATE TABLE IF NOT EXISTS education (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)
    
    await client.query(`
      CREATE TABLE IF NOT EXISTS languages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        level VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)
    
    await client.query(`
      CREATE TABLE IF NOT EXISTS qualities (
        id SERIAL PRIMARY KEY,
        text TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)
    
    console.log('✅ Таблицы созданы')
    console.log('🔧 Заполнение данными...')
    
    // Clear existing data
    await client.query('DELETE FROM portfolio')
    await client.query('DELETE FROM projects')
    await client.query('DELETE FROM skills')
    await client.query('DELETE FROM achievements')
    await client.query('DELETE FROM education')
    await client.query('DELETE FROM languages')
    await client.query('DELETE FROM qualities')
    
    // Insert portfolio data
    await client.query(`
      INSERT INTO portfolio (name, title, age, city, phone, email, github, profile)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `, [
      'Зайнаб Мамбеткулова',
      'Начинающий Frontend-разработчик',
      15,
      'Бишкек, Кыргызстан',
      '+996 507 210 811',
      'zainabmambetkulovva@gmail.com',
      'github.com/zainabmambetkulovva',
      'Начинающий Frontend-разработчик, интересующийся созданием современных веб-сайтов и веб-приложений.'
    ])
    
    // Insert projects
    const projects = [
      ['RONIN — сайт компьютерного клуба', 'Самостоятельно работаю над созданием сайта компьютерного клуба с возможностью онлайн-бронирования компьютеров. Занимаюсь разработкой проекта и реализацией его функциональности.'],
      ['OKURMEN — образовательная платформа', 'Участвую в командной разработке образовательной платформы. Работаю над проектом в составе команды и развиваю навыки совместной разработки.'],
      ['EKIDOS TAXI — веб-проект', 'Участвую в разработке веб-проекта, связанного с сервисом такси.']
    ]
    
    for (const [title, description] of projects) {
      await client.query('INSERT INTO projects (title, description) VALUES ($1, $2)', [title, description])
    }
    
    // Insert skills
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'GitHub']
    for (const skill of skills) {
      await client.query('INSERT INTO skills (name) VALUES ($1)', [skill])
    }
    
    // Insert achievements
    const achievements = [
      ['🏅 Золотой сертификат — OKURMEN IT', 'Получила золотой сертификат в образовательном центре OKURMEN IT.', null],
      ['🥇 Олимпиада по математике', null, JSON.stringify([
        'Заняла 1-е место на олимпиаде по математике в Кыргызско-Турецком лицее имени Ч. Айтматова',
        'Заняла 2-е место на следующем этапе олимпиады в Ташкенте'
      ])],
      ['💃 Танцевальные конкурсы', 'Трижды становилась обладательницей Гран-при на танцевальных конкурсах.', null]
    ]
    
    for (const [title, description, items] of achievements) {
      await client.query('INSERT INTO achievements (title, description, items) VALUES ($1, $2, $3)', [title, description, items])
    }
    
    // Insert education
    const education = [
      ['Средняя общеобразовательная школа № 78, Бишкек', 'Учусь в 9-м классе.'],
      ['Образовательный центр OKURMEN', 'Работаю над проектами в студии, получаю практический опыт и развиваю навыки веб-разработки.']
    ]
    
    for (const [title, description] of education) {
      await client.query('INSERT INTO education (title, description) VALUES ($1, $2)', [title, description])
    }
    
    // Insert languages
    const languages = [
      ['Кыргызский', 'Свободное владение'],
      ['Русский', 'Свободное владение'],
      ['Английский', 'B1 (средний уровень)']
    ]
    
    for (const [name, level] of languages) {
      await client.query('INSERT INTO languages (name, level) VALUES ($1, $2)', [name, level])
    }
    
    // Insert qualities
    const qualities = [
      '✨ Быстро обучаюсь',
      '🤝 Умею работать самостоятельно и в команде',
      '📋 Ответственно подхожу к выполнению задач',
      '📈 Стремлюсь к профессиональному развитию',
      '💻 Интересуюсь современными IT-технологиями',
      '🎯 Обладаю целеустремлённостью и дисциплиной'
    ]
    
    for (const quality of qualities) {
      await client.query('INSERT INTO qualities (text) VALUES ($1)', [quality])
    }
    
    await client.query('COMMIT')
    
    dbConnected = true
    
    console.log('✅ База данных заполнена!')
    
    res.json({ 
      success: true, 
      message: '✅ База данных инициализирована и заполнена!' 
    })
    
  } catch (error) {
    await client.query('ROLLBACK')
    console.error('❌ Ошибка инициализации БД:', error)
    res.status(500).json({ 
      success: false, 
      message: 'Ошибка инициализации БД', 
      error: error.message 
    })
  } finally {
    client.release()
  }
})

// Update portfolio
app.put('/api/portfolio/:id', async (req, res) => {
  if (!pool) {
    return res.status(500).json({ message: 'База данных недоступна' })
  }
  
  const { id } = req.params
  const { name, title, age, city, phone, email, github, profile } = req.body
  
  try {
    const result = await pool.query(
      `UPDATE portfolio 
       SET name=$1, title=$2, age=$3, city=$4, phone=$5, email=$6, github=$7, profile=$8, updated_at=CURRENT_TIMESTAMP
       WHERE id=$9
       RETURNING *`,
      [name, title, age, city, phone, email, github, profile, id]
    )
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Портфолио не найдено' })
    }
    
    res.json(result.rows[0])
  } catch (error) {
    console.error('Ошибка обновления портфолио:', error)
    res.status(500).json({ message: error.message })
  }
})

// Start server
app.listen(PORT, () => {
  console.log('\n' + '='.repeat(50))
  console.log('✅ Сервер успешно запущен!')
  console.log('='.repeat(50))
  console.log(`🚀 Порт: ${PORT}`)
  console.log(`📝 API: http://localhost:${PORT}/api`)
  console.log(`🗄️  База данных: ${dbConnected ? 'Подключена (Neon PostgreSQL)' : 'Локальные данные'}`)
  console.log('='.repeat(50))
  console.log('\n📍 Доступные endpoints:')
  console.log(`   GET  http://localhost:${PORT}/api/health`)
  console.log(`   GET  http://localhost:${PORT}/api/portfolio`)
  console.log(`   GET  http://localhost:${PORT}/api/projects`)
  console.log(`   GET  http://localhost:${PORT}/api/skills`)
  console.log(`   GET  http://localhost:${PORT}/api/achievements`)
  console.log(`   POST http://localhost:${PORT}/api/init`)
  console.log('\n💡 Для инициализации БД откройте:')
  console.log(`   http://localhost:${PORT}/api/init\n`)
})

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('\n🔌 SIGTERM получен, закрываем соединения...')
  if (pool) {
    pool.end(() => {
      console.log('✅ Pool закрыт')
      process.exit(0)
    })
  } else {
    process.exit(0)
  }
})

process.on('SIGINT', () => {
  console.log('\n\n🔌 Остановка сервера...')
  if (pool) {
    pool.end(() => {
      console.log('✅ Соединения закрыты')
      process.exit(0)
    })
  } else {
    process.exit(0)
  }
})
