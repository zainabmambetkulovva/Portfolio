import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import './Projects.css'

const Projects = () => {
  const { t } = useLanguage()
  
  const projects = [
    {
      ...t.projects.project1,
      links: [
        { url: 'https://ekidos-client.vercel.app', label: t.projects.project1.link1 },
        { url: 'https://ekidos-taxi.vercel.app', label: t.projects.project1.link2 }
      ]
    },
    {
      ...t.projects.project2,
      link: 'https://menu-nu-murex.vercel.app/'
    },
    {
      ...t.projects.project3,
      link: 'https://okurmen-seven.vercel.app/ky'
    },
    {
      ...t.projects.project4
    }
  ]

  return (
    <motion.section 
      id="projects" 
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">{t.projects.title}</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            {project.tech && (
              <div className="project-tech">
                {t.projects.technologies} {project.tech}
              </div>
            )}
            {project.links && (
              <div className="project-links">
                {project.links.map((linkObj, i) => (
                  <a 
                    key={i}
                    href={linkObj.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                    </svg>
                    {linkObj.label}
                  </a>
                ))}
              </div>
            )}
            {project.link && (
              <div className="project-links">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                  </svg>
                  {t.projects.viewProject}
                </a>
              </div>
            )}
            {!project.link && !project.links && (
              <div className="project-links">
                <div className="project-in-progress">
                  {t.projects.inProgress}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Projects
