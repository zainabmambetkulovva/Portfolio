import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Languages from './components/Languages'
import Qualities from './components/Qualities'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Попытка загрузки данных из API
    const controller = new AbortController()
    
    fetch('/api/portfolio', { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error('API недоступен')
        return res.json()
      })
      .then(data => {
        console.log('✅ Данные загружены из API')
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        // Если API недоступен, используем локальные данные
        if (err.name !== 'AbortError') {
          console.warn('⚠️ Backend не запущен, используем локальные данные')
          console.log('💡 Для работы с БД запустите: npm run server')
          setData({
            name: 'Зайнаб Мамбеткулова',
            title: 'Начинающий Frontend-разработчик',
            age: 15,
            city: 'Бишкек, Кыргызстан',
            phone: '+996 507 210 811',
            email: 'zainabmambetkulovva@gmail.com',
            github: 'github.com/zainabmambetkulovva'
          })
          setLoading(false)
        }
      })
    
    return () => controller.abort()
  }, [])

  if (loading) {
    return (
      <div className="loading">
        <motion.div
          className="loader"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          💻
        </motion.div>
      </div>
    )
  }

  return (
    <div className="app">
      <Hero data={data} />
      <About data={data} />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Languages />
      <Qualities />
      <Contact data={data} />
      <Footer />
    </div>
  )
}

export default App
