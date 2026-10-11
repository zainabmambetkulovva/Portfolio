import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import './About.css'

const About = () => {
  const { t } = useLanguage()
  
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">{t.about.title}</h2>
        
        <div className="about-content">
          <motion.div 
            className="achievements-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="achievements-title">{t.about.achievementsTitle}</h3>
            <ul className="achievement-list">
              <li>
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                <span>{t.about.achievement1}</span>
              </li>
              <li>
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                <span>{t.about.achievement2}</span>
              </li>
              <li>
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                <span>{t.about.achievement3}</span>
              </li>
              <li>
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                <span>{t.about.achievement4}</span>
              </li>
              <li>
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                <span>{t.about.achievement5}</span>
              </li>
              <li>
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                <span>{t.about.achievement6}</span>
              </li>
            </ul>
          </motion.div>

          <div className="skills-section">
            <div className="skills-category">
              <div className="skills-category-title">{t.about.skillsTitle}</div>
              <div className="skills-tags">
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitHub</span>
              </div>
            </div>

            <div className="languages-box">
              <div className="languages-title">{t.about.languagesTitle}</div>
              <div className="language-item">
                <span className="language-name">{t.languages.kyrgyz}</span>
                <span className="language-level">{t.languages.kyrgyzLevel}</span>
              </div>
              <div className="language-item">
                <span className="language-name">{t.languages.russian}</span>
                <span className="language-level">{t.languages.russianLevel}</span>
              </div>
              <div className="language-item">
                <span className="language-name">{t.languages.english}</span>
                <span className="language-level">{t.languages.englishLevel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
