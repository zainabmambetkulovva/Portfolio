import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import './Education.css'

const Education = () => {
  const { t } = useLanguage()
  
  const education = [
    t.education.school,
    t.education.okurmen
  ]

  return (
    <motion.section 
      id="education" 
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">{t.education.title}</h2>
      <div className="education-grid">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="education-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="education-title">{edu.title}</h3>
            <p className="education-description">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Education
