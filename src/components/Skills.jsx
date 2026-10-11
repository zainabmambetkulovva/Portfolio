import { motion } from 'framer-motion'
import './Skills.css'

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'GitHub']

const Skills = () => {
  return (
    <motion.section 
      id="skills" 
      className="section skills-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Технические навыки</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1, y: -5 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Skills
