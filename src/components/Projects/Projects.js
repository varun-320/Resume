import { motion } from 'framer-motion'
import Section from '../Section/Section'
import './Projects.css'

const projects = [
  {
    title: 'Phishing Detection (URL-Based)',
    tech: 'Python · Scikit-learn · Random Forest · ML',
    highlights: [
      'Developed lexical and structural feature extraction pipelines to analyze domain length, special characters, and HTTPS usage for URL classification.',
      'Trained and evaluated Random Forest and Logistic Regression classifiers for phishing URL detection.',
      'Implemented an automated URL scanning mechanism for identifying potentially malicious and phishing URLs.',
      'Deployed the machine learning model to support batch processing and API-based URL analysis.',
    ],
  },
  {
    title: 'AI-Based Plant Detection System',
    tech: 'Python · TensorFlow · Keras · CNN',
    highlights: [
      'Trained a Convolutional Neural Network (CNN) using labeled botanical datasets for multi-class plant species classification.',
      'Developed a responsive cross-platform user interface for accessing plant identification functionality across mobile and web environments.',
      'Integrated CNN-based predictions into the application to identify plant species and provide relevant plant care recommendations.',
    ],
  },
]

export default function Projects({ id, onInView }) {
  return (
    <Section id={id} onInView={onInView}>
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-card card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className="card-title">{project.title}</h3>
            <p className="card-meta">{project.tech}</p>
            <ul>
              {project.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}