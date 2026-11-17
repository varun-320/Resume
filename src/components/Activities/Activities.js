import { motion } from 'framer-motion'
import Section from '../Section/Section'
import './Activities.css'

const activities = [
  {
    title: 'Entrepreneurial Leadership Program',
    meta: 'Innovation Council, Canara Engineering College · 2024 · Mangalore, Karnataka',
    desc: 'Completed leadership training focused on innovation, product thinking, and collaborative problem-solving.',
  },
  {
    title: 'DSA December – Virtual Coding Challenge',
    meta: 'Coding Club, CEC · Dec 2023 · Online',
    desc: 'Participated in a month-long coding challenge, solving daily problems focused on data structures, algorithms, and time and space complexity.',
  },
  {
    title: 'Python Hands-on Workshop',
    meta: 'Canara Engineering College · Oct 2023 · Mangalore, Karnataka',
    desc: 'Participated in a practical workshop covering Python fundamentals, data structures, and algorithmic problem-solving.',
  },
]

export default function Activities({ id, onInView }) {
  return (
    <Section id={id} onInView={onInView}>
      <h2 className="section-title">Activities & Workshops</h2>
      <div className="activities-list">
        {activities.map((item, index) => (
          <motion.article
            key={item.title}
            className="activity-card card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <h3 className="card-title">{item.title}</h3>
            <p className="card-meta">{item.meta}</p>
            <p className="card-description">{item.desc}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}