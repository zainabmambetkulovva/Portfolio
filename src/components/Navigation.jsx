import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import './Navigation.css'

const Navigation = () => {
  const { isDark, toggleTheme } = useTheme()
  const { language, changeLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <div className="logo-icon">Z</div>
          <span className="logo-text">zainabmambetkulova</span>
        </div>
        
        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={closeMobileMenu}>{t.nav.about}</a>
          <a href="#projects" onClick={closeMobileMenu}>{t.nav.projects}</a>
          <a href="#education" onClick={closeMobileMenu}>{t.nav.education}</a>
          <a href="#achievements" onClick={closeMobileMenu}>{t.nav.achievements}</a>
          <a href="#qualities" onClick={closeMobileMenu}>{t.nav.qualities}</a>
          <a href="#languages" onClick={closeMobileMenu}>{t.nav.languages}</a>
          <a href="#contact" onClick={closeMobileMenu}>{t.nav.contact}</a>
        </div>
        
        <div className="nav-controls">
          {/* Language Toggle */}
          <div className="language-toggle">
            <button 
              className={`lang-btn ${language === 'ru' ? 'active' : ''}`}
              onClick={() => changeLanguage('ru')}
              aria-label="Русский"
            >
              РУ
            </button>
            <button 
              className={`lang-btn ${language === 'ky' ? 'active' : ''}`}
              onClick={() => changeLanguage('ky')}
              aria-label="Кыргызча"
            >
              КЫ
            </button>
          </div>

          {/* Theme Toggle */}
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
              </svg>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
