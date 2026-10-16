console.log('🔍 Диагностика проекта...\n')

// Проверка package.json
try {
  const pkg = await import('./package.json', { assert: { type: 'json' } })
  console.log('✅ package.json найден')
  console.log('   Зависимости:', Object.keys(pkg.default.dependencies).join(', '))
} catch (err) {
  console.log('❌ Ошибка чтения package.json:', err.message)
}

// Проверка установленных пакетов
console.log('\n📦 Проверка установленных пакетов:')
const requiredPackages = ['express', 'cors', 'dotenv', 'pg', 'react', 'vite']

for (const packageName of requiredPackages) {
  try {
    await import(packageName)
    console.log(`   ✅ ${packageName}`)
  } catch (err) {
    console.log(`   ❌ ${packageName} - НЕ УСТАНОВЛЕН`)
  }
}

// Проверка .env
console.log('\n⚙️  Проверка .env:')
try {
  const fs = await import('fs')
  const envContent = fs.readFileSync('.env', 'utf-8')
  console.log('   ✅ Файл .env найден')
  if (envContent.includes('DATABASE_URL')) {
    console.log('   ✅ DATABASE_URL настроен')
  } else {
    console.log('   ❌ DATABASE_URL не найден')
  }
} catch (err) {
  console.log('   ❌ Файл .env не найден')
}

// Проверка портов
console.log('\n🔌 Проверка портов:')
try {
  const net = await import('net')
  
  const checkPort = (port) => {
    return new Promise((resolve) => {
      const server = net.createServer()
      server.listen(port, () => {
        server.close()
        resolve(true)
      })
      server.on('error', () => {
        resolve(false)
      })
    })
  }
  
  const port4000 = await checkPort(4000)
  const port4001 = await checkPort(4001)
  
  console.log(`   ${port4000 ? '✅' : '❌'} Порт 4000 ${port4000 ? 'свободен' : 'занят'}`)
  console.log(`   ${port4001 ? '✅' : '❌'} Порт 4001 ${port4001 ? 'свободен' : 'занят'}`)
} catch (err) {
  console.log('   ❌ Ошибка проверки портов')
}

console.log('\n' + '='.repeat(50))
console.log('\n💡 РЕКОМЕНДАЦИИ:\n')

console.log('1. Если пакеты не установлены:')
console.log('   npm install\n')

console.log('2. Если порты заняты:')
console.log('   Закройте другие приложения на портах 4000 и 4001\n')

console.log('3. После исправления запустите:')
console.log('   npm run server  (backend)')
console.log('   npm run dev     (frontend)\n')
