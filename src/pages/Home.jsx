import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Schedule from '../components/Schedule'
import Contact from '../components/Contact'
import MapSection from '../components/MapSection'
import styles from './Home.module.css'

// Quick-access page cards
const pageCards = [
  {
    id: 'card-about',
    to: '/about',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="10" r="5" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 28c0-5.52 4.48-10 10-10s10 4.48 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Who We Are',
    desc: 'Our story, beliefs & leadership team',
  },
  {
    id: 'card-sermons',
    to: '/sermons',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="6" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M13 12l8 4-8 4V12z" fill="currentColor"/>
      </svg>
    ),
    label: 'Sermons',
    desc: 'Watch our messages on YouTube',
  },
  {
    id: 'card-gallery',
    to: '/gallery',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="2" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="10.5" cy="10.5" r="3.5" stroke="currentColor" strokeWidth="2"/>
        <path d="M2 22l8-8 5 5 5-5 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Gallery',
    desc: 'Photos from worship & events',
  },
  {
    id: 'card-lectureship',
    to: '/lectureship',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="26" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 12h12M10 17h12M10 22h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Lectureship',
    desc: 'Annual event — details & programme',
  },
]

export default function Home() {
  return (
    <>
      {/* Full hero — no top padding needed (layout handles it for inner pages) */}
      <div style={{ marginTop: '-136px' }}>
        <Hero />
      </div>

      {/* Quick-access page cards */}
      <section className={styles.quickLinks} id="quick-links">
        <div className={styles.container}>
          <div className={styles.qlHeader}>
            <span className={styles.qlLabel}>Explore Our Site</span>
            <h2 className={styles.qlTitle}>Everything You Need</h2>
          </div>
          <div className={styles.cardGrid}>
            {pageCards.map(card => (
              <Link key={card.id} to={card.to} className={styles.card} id={card.id}>
                <div className={styles.cardIcon}>{card.icon}</div>
                <h3 className={styles.cardLabel}>{card.label}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
                <span className={styles.cardArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Features />
      <Schedule />
      <Contact />
      <MapSection />
    </>
  )
}
