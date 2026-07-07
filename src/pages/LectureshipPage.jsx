import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import styles from './LectureshipPage.module.css'

const EVENT = {
  theme: 'Transformed by Grace',
  date: 'August 14–16, 2025',
  venue: 'No. 29 Custom Bus Stop, Abaranje, Ikotun, Lagos',
  countdown: 'August 14, 2025',
}

const programme = [
  {
    day: 'Thursday, August 14',
    sessions: [
      { time: '5:00 PM', title: 'Opening Worship & Welcome', speaker: 'Congregation' },
      { time: '6:00 PM', title: 'Keynote: "The Grace That Saves"', speaker: 'Guest Preacher' },
      { time: '7:30 PM', title: 'Question & Answer Session', speaker: 'Panel' },
    ],
  },
  {
    day: 'Friday, August 15',
    sessions: [
      { time: '9:00 AM', title: 'Morning Devotion', speaker: 'Local Preacher' },
      { time: '10:00 AM', title: '"Growing in Grace" — Hebrews 5:12-14', speaker: 'Guest Preacher' },
      { time: '2:00 PM', title: '"Grace and Obedience" — Titus 2:11-12', speaker: 'Guest Preacher' },
      { time: '6:00 PM', title: 'Evening Worship & Praise', speaker: 'Congregation' },
      { time: '7:00 PM', title: '"Abounding Grace" — Romans 5:20', speaker: 'Guest Preacher' },
    ],
  },
  {
    day: 'Saturday, August 16',
    sessions: [
      { time: '9:00 AM', title: 'Morning Devotion & Communion', speaker: 'Congregation' },
      { time: '10:00 AM', title: '"Transformed by Renewing the Mind" — Romans 12:2', speaker: 'Guest Preacher' },
      { time: '12:00 PM', title: 'Closing Worship & Benediction', speaker: 'All' },
    ],
  },
]

const highlights = [
  { icon: '🎤', label: 'Guest Speakers', value: '3+' },
  { icon: '📅', label: 'Days of Study', value: '3' },
  { icon: '📖', label: 'Bible Classes', value: '8+' },
  { icon: '🙏', label: 'Worship Sessions', value: '6' },
]

export default function LectureshipPage() {
  return (
    <>
      <PageHero
        label="Annual Event 2025"
        title={`"${EVENT.theme}"`}
        subtitle={`Join us for the Annual Lectureship — ${EVENT.date}`}
      />

      <section className={styles.page}>
        <div className={styles.container}>

          {/* Event highlights row */}
          <div className={styles.highlights}>
            {highlights.map(h => (
              <div key={h.label} className={styles.highlightCard}>
                <span className={styles.hlIcon}>{h.icon}</span>
                <span className={styles.hlValue}>{h.value}</span>
                <span className={styles.hlLabel}>{h.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.mainGrid}>
            {/* Programme */}
            <div className={styles.programmeCol}>
              <h2 className={styles.colTitle}>Programme</h2>
              {programme.map(day => (
                <div key={day.day} className={styles.dayBlock}>
                  <div className={styles.dayHeader}>{day.day}</div>
                  {day.sessions.map((s, i) => (
                    <div key={i} className={styles.session}>
                      <span className={styles.sessionTime}>{s.time}</span>
                      <div className={styles.sessionInfo}>
                        <p className={styles.sessionTitle}>{s.title}</p>
                        <p className={styles.sessionSpeaker}>{s.speaker}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Info sidebar */}
            <div className={styles.sideCol}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Event Details</h3>
                <div className={styles.infoRow}>
                  <span className={styles.infoIcon}>📅</span>
                  <div>
                    <p className={styles.infoLabel}>Date</p>
                    <p className={styles.infoValue}>{EVENT.date}</p>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoIcon}>📍</span>
                  <div>
                    <p className={styles.infoLabel}>Venue</p>
                    <p className={styles.infoValue}>{EVENT.venue}</p>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoIcon}>🎟️</span>
                  <div>
                    <p className={styles.infoLabel}>Entry</p>
                    <p className={styles.infoValue}>Free — All are Welcome!</p>
                  </div>
                </div>
              </div>

              <div className={styles.ctaCard}>
                <h3>Plan to Attend?</h3>
                <p>Let us know you're coming — we'll make sure you have a seat!</p>
                <a
                  href="https://wa.me/2348023195102?text=I%20would%20like%20to%20attend%20the%20Annual%20Lectureship%202025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.whatsappBtn}
                  id="lectureship-whatsapp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M11.998 2C6.477 2 2 6.477 2 12c0 1.918.53 3.716 1.456 5.245L2.006 22l4.875-1.427A9.95 9.95 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 11.998 2z"/>
                  </svg>
                  RSVP on WhatsApp
                </a>
                <Link to="/#contact" className={styles.contactBtn}>Send a Message</Link>
              </div>

              <div className={styles.themeCard}>
                <p className={styles.themeVerse}>
                  <em>"And be not conformed to this world: but be ye transformed by the renewing of your mind."</em>
                </p>
                <span className={styles.themeRef}>— Romans 12:2</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
