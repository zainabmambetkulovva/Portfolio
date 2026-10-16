import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const { Pool } = pg

const testConnection = async () => {
  console.log('🔍 Проверка подключения к Neon PostgreSQL...\n')
  
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  })
  
  try {
    const maskedUrl = process.env.DATABASE_URL
      ? process.env.DATABASE_URL.replace(/:[^:]*@/, ':****@')
      : 'НЕ НАСТРОЕНО'
    
    console.log(`📡 Подключение к: ${maskedUrl}\n`)
    
    // Test connection
    const result = await pool.query('SELECT NOW(), version()')
    
    console.log('✅ Успешное подключение к Neon PostgreSQL!\n')
    console.log('📊 Информация о подключении:')
    console.log(`   - Время сервера: ${result.rows[0].now}`)
    console.log(`   - Версия PostgreSQL: ${result.rows[0].version.split(' ')[0]} ${result.rows[0].version.split(' ')[1]}`)
    
    // Check tables
    const tables = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name
    `)
    
    console.log(`\n📦 Таблиц в базе: ${tables.rows.length}`)
    if (tables.rows.length > 0) {
      console.log('   Список:')
      tables.rows.forEach(row => console.log(`   - ${row.table_name}`))
    } else {
      console.log('   ⚠️  Таблицы еще не созданы')
      console.log('   💡 Запустите инициализацию: curl -X POST http://localhost:5001/api/init')
    }
    
    console.log('\n🎉 Всё работает! Можете запускать проект.')
    
  } catch (error) {
    console.error('❌ Ошибка подключения к Neon PostgreSQL:\n')
    console.error(`   ${error.message}\n`)
    
    if (error.message.includes('authentication failed') || error.message.includes('password authentication failed')) {
      console.log('💡 Возможные причины:')
      console.log('   1. Неправильная строка подключения в .env')
      console.log('   2. Проверьте DATABASE_URL в файле .env')
      console.log('   3. Убедитесь что скопировали полную строку из Neon Dashboard')
    } else if (error.message.includes('no such host') || error.message.includes('ENOTFOUND')) {
      console.log('💡 Проблема с сетью:')
      console.log('   1. Проверьте интернет-соединение')
      console.log('   2. Убедитесь что Neon проект активен')
    } else if (error.message.includes('DATABASE_URL')) {
      console.log('💡 DATABASE_URL не настроен в .env файле')
    }
    
    console.log('\n📖 Подробная инструкция в файле: НАСТРОЙКА_NEON.md\n')
  } finally {
    await pool.end()
    console.log('🔌 Соединение закрыто')
    process.exit()
  }
}

testConnection()
