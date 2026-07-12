import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import styles from './AboutPage.module.css'

// ── Leadership Data ────────────────────────────────────────────
// Replace names, photos, and bios with real information
const leadership = [
  {
    id: 'leader-preacher',
    name: 'Bro. Afolabi Akinyemi',
    role: 'Preacher / Evangelist',
    photo: '/images/team/preacher.png',
    bio: 'Our preacher faithfully proclaims the Word of God every Sunday, guiding the congregation in truth, love, and service to Christ.',
    email: 'preacher@churchofchristabaranje.org',
  },
  {
    id: 'leader-secretary',
    name: 'Bro. Busayo Oluyemi',
    role: 'Church Secretary',
    photo: '/images/team/secretary.png',
    bio: 'Our secretary coordinates church communications, keeps records, and ensures the smooth administration of our congregation.',
    email: 'secretary@churchofchristabaranje.org',
  },
]

// ── Church of Christ distinctives ────────────────────────────
const distinctives = [
  {
    icon: '📖',
    title: 'Bible Authority',
    text: 'We speak where the Bible speaks and remain silent where the Bible is silent. The New Testament is our only guide.',
  },
  {
    icon: '🎵',
    title: 'A Cappella Worship',
    text: 'We worship God with vocal music only — heartfelt singing in praise, honouring the New Testament pattern.',
  },
  {
    icon: '✝️',
    title: 'Weekly Communion',
    text: 'Every Sunday we partake of the Lord\'s Supper in remembrance of Jesus Christ\'s sacrifice on the cross.',
  },
  {
    icon: '💧',
    title: 'Baptism for Remission',
    text: 'We teach immersion baptism for the forgiveness of sins as the New Testament clearly teaches (Acts 2:38).',
  },
  {
    icon: '🏛️',
    title: 'No Creed but Christ',
    text: 'No human creeds, manuals or catechisms — Christ alone is head of the church (Ephesians 1:22-23).',
  },
  {
    icon: '🤝',
    title: 'Autonomy of the Church',
    text: 'Each congregation is independent, overseen by elders, following the first-century pattern of the church.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Who We Are"
        title="Founded on the Word of God"
        subtitle="A non-denominational congregation striving to follow the New Testament pattern of worship and Christian living."
      />

      {/* ── Our Story ── */}
      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyText}>
              <span className={styles.sectionLabel}>Our Story</span>
              <h2 className={styles.sectionTitle}>The Church of Christ at Abaranje-Ikotun</h2>
              <p>
                The Church of Christ at Abaranje-Ikotun is a non-denominational, autonomous congregation
                located at 29,Sete Aiyede Street, Off Kwaru family way, Custom bus stop, Abaranje, — committed to restoring
                the first-century pattern of the church as revealed in the New Testament.
              </p>
              <p>
                We believe that the Bible alone is sufficient as our guide for faith and practice.
                Every doctrine and practice is grounded in the Word of God alone, without human
                additions or subtractions.
              </p>
              <p>
                Our congregation is a warm, welcoming community of believers who love the Lord and
                love one another — committed to worship, discipleship, and community outreach across
                the Ikotun-Egbe axis of Lagos.
              </p>
              <div className={styles.verse}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 4h5v8H4zM11 4h5v8h-5z" stroke="#c9a227" strokeWidth="1.5"/>
                  <path d="M4 14h12" stroke="#c9a227" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <p><em>"The churches of Christ salute you."</em> — Romans 16:16</p>
              </div>
            </div>
            <div className={styles.storyStats}>
              {[
                { value: '30+', label: 'Years of Faith' },
                { value: '500+', label: 'Members' },
                { value: '3', label: 'Weekly Services' },
                { value: '1', label: 'Body, One Lord' },
              ].map(s => (
                <div key={s.label} className={styles.statCard}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Distinctives ── */}
      <section className={styles.distinctives}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>What Makes Us Different</span>
            <h2 className={styles.sectionTitle}>Distinctives of the Church of Christ</h2>
            <p className={styles.sectionSubtitle}>
              Restored to the pattern of the first-century church — no creed but Christ,
              no book but the Bible.
            </p>
          </div>
          <div className={styles.distinctivesGrid}>
            {distinctives.map(d => (
              <div key={d.title} className={styles.distinctiveCard}>
                <div className={styles.distinctiveIcon}>{d.icon}</div>
                <h3 className={styles.distinctiveTitle}>{d.title}</h3>
                <p className={styles.distinctiveText}>{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership Team ── */}
      <section className={styles.leadership} id="leadership">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Meet the Team</span>
            <h2 className={styles.sectionTitle}>Our Leadership</h2>
            <p className={styles.sectionSubtitle}>
              Servant leaders dedicated to shepherding the flock and proclaiming
              the truth of God's Word.
            </p>
          </div>
          <div className={styles.leadershipGrid}>
            {leadership.map(person => (
              <div key={person.id} id={person.id} className={styles.leaderCard}>
                <div className={styles.photoWrap}>
                  <img
                    src={person.photo}
                    alt={person.name}
                    className={styles.photo}
                    loading="lazy"
                  />
                  <div className={styles.photoOverlay} />
                </div>
                <div className={styles.leaderInfo}>
                  <span className={styles.leaderRole}>{person.role}</span>
                  <h3 className={styles.leaderName}>{person.name}</h3>
                  <p className={styles.leaderBio}>{person.bio}</p>
                  {person.email && (
                    <a href={`mailto:${person.email}`} className={styles.leaderEmail}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                        <path d="M1 4l6 4 6-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                      {person.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className={styles.leadershipNote}>
            * Photos and names are placeholders. Update the leadership data in <code>src/pages/AboutPage.jsx</code> with real details.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2>Come Worship With Us</h2>
          <p>Every Sunday at 8:30 AM · 29,Sete Aiyede Street, Off Kwaru family way, Custom bus stop, Abaranje,</p>
          <div className={styles.ctaBtns}>
            <Link to="/#contact" className={styles.ctaPrimary}>Get in Touch</Link>
            <Link to="/sermons" className={styles.ctaSecondary}>Watch Sermons</Link>
          </div>
        </div>
      </section>
    </>
  )
}
