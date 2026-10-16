import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import './Achievements.css'

const Achievements = () => {
  const { t } = useLanguage()
  
  const achievements = [
    t.achievements.math,
    t.achievements.biology,
    t.achievements.dance,
    t.achievements.study,
    t.achievements.it
  ]

  return (
    <motion.section 
      id="achievements" 
      className="section achievements-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">{t.achievements.title}</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="achievement-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <h3 className="achievement-title">{achievement.title}</h3>
            {achievement.description && (
              <p className="achievement-description">{achievement.description}</p>
            )}
            {achievement.item1 && (
              <ul className="achievement-list">
                <li>{achievement.item1}</li>
                {achievement.item2 && <li>{achievement.item2}</li>}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Achievements
