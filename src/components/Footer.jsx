import { useLanguage } from '../contexts/LanguageContext'
import './Footer.css'

const Footer = () => {
  const { t } = useLanguage()
  
  return (
    <footer className="footer">
      <p>{t.footer.text}</p>
    </footer>
  )
}

export default Footer
