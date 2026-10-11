import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import './Languages.css'

const Languages = () => {
  const { t } = useLanguage()
  
  const languages = [
    { name: t.languages.kyrgyz, level: t.languages.kyrgyzLevel },
    { name: t.languages.russian, level: t.languages.russianLevel },
    { name: t.languages.english, level: t.languages.englishLevel }
  ]

  return (
    <motion.section 
      id="languages" 
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">{t.languages.title}</h2>
      <div className="languages-grid">
        {languages.map((lang, index) => (
          <motion.div
            key={index}
            className="language-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05, borderColor: 'var(--primary-green)' }}
          >
            <h3 className="language-name">{lang.name}</h3>
            <p className="language-level">{lang.level}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Languages
