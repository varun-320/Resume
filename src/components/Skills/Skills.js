import { motion } from 'framer-motion'
import Section from '../Section/Section'
import './Skills.css'

const skillGroups = [
  {
    label: 'Programming Languages',
    items: ['Java', 'Python', 'JavaScript', 'C', 'PHP'],
  },
  {
    label: 'Frontend Technologies',
    items: ['HTML5', 'CSS3', 'React.js', 'Next.js', 'Angular', 'Preact'],
  },
  {
    label: 'Backend Technologies',
    items: ['Node.js', 'Express.js', 'Laravel'],
  },
  {
    label: 'Databases',
    items: ['MongoDB', 'Mongoose', 'SQL'],
  },
  {
    label: 'Cloud & Deployment',
    items: ['AWS', 'Salesforce', 'Netlify', 'Render'],
  },
  {
    label: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Chrome DevTools', 'Linux'],
  },
  {
    label: 'Core Concepts',
    items: [
      'RESTful APIs',
      'JWT',
      'OAuth 2.0',
      'Middleware',
      'CORS',
      'Authentication',
      'Agile Methodology',
      'Git Branching',
    ],
  },
]

export default function Skills({ id, onInView }) {
  return (
    <Section id={id} onInView={onInView}>
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillGroups.map((group, gIndex) => (
          <motion.div
            key={group.label}
            className="skill-group card"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: gIndex * 0.06 }}
          >
            <h3 className="skill-group-label">{group.label}</h3>
            <div className="skill-tags">
              {group.items.map((item, i) => (
                <span key={i} className="skill-tag">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}