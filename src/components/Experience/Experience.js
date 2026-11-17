import { motion } from 'framer-motion'
import Section from '../Section/Section'
import './Experience.css'

const experiences = [
  {
    role: 'Software Developer',
    company: 'Dregali Pvt. Ltd.',
    location: 'Onsite / Mangalore, Karnataka',
    period: 'Jun 2026 – Nov 2026',
    title: 'Internal CRM & Automated Messaging Pipeline',
    points: [
      'Building and customizing internal CRM modules using Laravel, Preact, and SQL.',
      'Developed an automated WhatsApp messaging pipeline to deliver notifications and transactional messages.',
      'Developing and maintaining full-stack applications using the MERN stack and modern web technologies.',
      'Performed Manual and Automated testing across APIs and web modules to ensure reliability, bug-free deployments, and consistent user workflows.',
    ],
  },
  {
    role: 'Full Stack Intern',
    company: 'Dregali Pvt. Ltd.',
    location: 'Onsite / Mangalore, Karnataka',
    period: 'Feb 2025 – May 2025',
    title: 'Multi-Vendor E-Commerce Platform',
    points: [
      'Built a full-stack multi-vendor e-commerce platform using the MERN stack, featuring product listings, shopping cart, and order management.',
      'Implemented JWT-based authentication, multi-vendor functionality, admin dashboard, cart, wishlist, and real-time order tracking.',
      'Integrated Cloudinary for media storage and implemented a user review and rating moderation workflow.',
      'Designed responsive user interfaces using Tailwind CSS and React Router for seamless client-side navigation.',
      'Deployed the frontend on Netlify and backend on Render with environment-based configurations.',
    ],
    link: 'https://mern-stack-projects.netlify.app/',
  },
]

export default function Experience({ id, onInView }) {
  return (
    <Section id={id} onInView={onInView}>
      <h2 className="section-title">Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <motion.article
            key={index}
            className="exp-card card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="exp-header">
              <div>
                <h3 className="card-title">{exp.role}</h3>
                <p className="card-subtitle">
                  {exp.company} · {exp.title}
                </p>
                <p className="card-meta">
                  {exp.period} · {exp.location}
                </p>
              </div>
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  View Live
                </a>
              )}
            </div>
            <ul>
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}