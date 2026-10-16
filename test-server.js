import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 4001

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Тестовый сервер работает!',
    timestamp: new Date().toISOString()
  })
})

app.get('/api/portfolio', (req, res) => {
  res.json({
    name: 'Зайнаб Мамбеткулова',
    title: 'Начинающий Frontend-разработчик',
    age: 15,
    city: 'Бишкек, Кыргызстан',
    phone: '+996 507 210 811',
    email: 'zainabmambetkulovva@gmail.com',
    github: 'github.com/zainabmambetkulovva'
  })
})

app.listen(PORT, () => {
  console.log('✅ Тестовый сервер запущен!')
  console.log(`🚀 Порт: ${PORT}`)
  console.log(`📝 API: http://localhost:${PORT}/api`)
  console.log('\nПроверьте:')
  console.log(`   http://localhost:${PORT}/api/health`)
  console.log(`   http://localhost:${PORT}/api/portfolio`)
})
