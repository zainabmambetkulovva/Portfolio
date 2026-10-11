import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import './Contact.css'

const Contact = ({ data }) => {
  const { t } = useLanguage()
  
  return (
    <motion.section 
      id="contact" 
      className="section contact-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">{t.contact.title}</h2>
      <div className="contact-info">
        <motion.div 
          className="contact-card"
          whileHover={{ y: -5, scale: 1.05 }}
        >
          <svg className="contact-icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
          <a href="mailto:zainabmambetkulovva@gmail.com">
            zainabmambetkulovva@gmail.com
          </a>
        </motion.div>
        <motion.div 
          className="contact-card"
          whileHover={{ y: -5, scale: 1.05 }}
        >
          <svg className="contact-icon" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          <a href="tel:+996507210811">
            +996 507 210 811
          </a>
        </motion.div>
        <motion.div 
          className="contact-card"
          whileHover={{ y: -5, scale: 1.05 }}
        >
          <svg className="contact-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
          </svg>
          <a href="https://github.com/zainabmambetkulovva" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </motion.div>
        <motion.div 
          className="contact-card"
          whileHover={{ y: -5, scale: 1.05 }}
        >
          <svg className="contact-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
          </svg>
          <a href="https://instagram.com/mambetkulovaaa_" target="_blank" rel="noopener noreferrer">
            @mambetkulovaaa_
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Contact
