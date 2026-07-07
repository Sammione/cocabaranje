import { useState } from 'react'
import PageHero from '../components/PageHero'
import styles from './SermonsPage.module.css'

// ── Sermon Data ────────────────────────────────────────────────
// Add real YouTube video IDs to each entry.
// videoId: the part after watch?v= in the YouTube URL
// e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ → videoId: 'dQw4w9WgXcQ'
const sermons = [
  {
    id: 'sermon-1',
    videoId: '',          // ← Replace with real YouTube video ID
    title: 'Walking in the Light',
    preacher: 'Bro. [Preacher Name]',
    date: 'Sunday, June 29, 2025',
    category: 'Sunday Worship',
    description: 'A powerful message from 1 John 1 on living a life that reflects the light of Jesus Christ.',
  },
  {
    id: 'sermon-2',
    videoId: '',
    title: 'The Power of Prayer',
    preacher: 'Bro. [Preacher Name]',
    date: 'Sunday, June 22, 2025',
    category: 'Sunday Worship',
    description: 'Exploring James 5:16 and what it means to have an effective, fervent prayer life as a Christian.',
  },
  {
    id: 'sermon-3',
    videoId: '',
    title: 'Baptism: A New Beginning',
    preacher: 'Bro. [Preacher Name]',
    date: 'Wednesday, June 18, 2025',
    category: 'Bible Study',
    description: 'A study of Acts 2:38 and Romans 6 — understanding what baptism means in the Christian life.',
  },
  {
    id: 'sermon-4',
    videoId: '',
    title: 'The Lord\'s Supper',
    preacher: 'Bro. [Preacher Name]',
    date: 'Sunday, June 15, 2025',
    category: 'Sunday Worship',
    description: 'Examining 1 Corinthians 11 and why we partake of communion every first day of the week.',
  },
  {
    id: 'sermon-5',
    videoId: '',
    title: 'A Cappella: Singing from the Heart',
    preacher: 'Bro. [Preacher Name]',
    date: 'Wednesday, June 11, 2025',
    category: 'Bible Study',
    description: 'Why the Church of Christ worships with vocal music only — an in-depth look at Ephesians 5:19.',
  },
  {
    id: 'sermon-6',
    videoId: '',
    title: 'Lectureship Special: Transformed by Grace',
    preacher: 'Guest Speaker',
    date: 'Saturday, August 16, 2025',
    category: 'Special',
    description: 'Annual Lectureship keynote — a special address on the transforming power of God\'s grace in our lives.',
  },
]

const categories = ['All', 'Sunday Worship', 'Bible Study', 'Special']
const YOUTUBE_CHANNEL = 'https://www.youtube.com/@ChurchofChristAbaranjeIkotun'

function SermonCard({ sermon }) {
  const hasVideo = Boolean(sermon.videoId)
  const thumbUrl = hasVideo
    ? `https://img.youtube.com/vi/${sermon.videoId}/hqdefault.jpg`
    : null

  return (
    <div className={styles.card} id={sermon.id}>
      {/* Thumbnail */}
      <div className={styles.thumb}>
        {hasVideo ? (
          <img src={thumbUrl} alt={sermon.title} className={styles.thumbImg} loading="lazy" />
        ) : (
          <div className={styles.thumbPlaceholder}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="20" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
              <path d="M20 16l16 8-16 8V16z" fill="rgba(255,255,255,0.5)"/>
            </svg>
            <span>Video coming soon</span>
          </div>
        )}
        <div className={styles.playOverlay}>
          <div className={styles.playBtn}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 5l10 5-10 5V5z" fill="white"/>
            </svg>
          </div>
        </div>
        <span className={styles.categoryBadge}>{sermon.category}</span>
      </div>

      {/* Info */}
      <div className={styles.cardBody}>
        <p className={styles.date}>{sermon.date}</p>
        <h3 className={styles.title}>{sermon.title}</h3>
        <p className={styles.preacher}>— {sermon.preacher}</p>
        <p className={styles.desc}>{sermon.description}</p>

        {hasVideo ? (
          <a
            href={`https://www.youtube.com/watch?v=${sermon.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.watchBtn}
            id={`${sermon.id}-watch`}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="1" y="3" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M7 6.5l5 2.5-5 2.5V6.5z" fill="currentColor"/>
            </svg>
            Watch on YouTube
          </a>
        ) : (
          <span className={styles.comingSoon}>🕐 Video will be uploaded soon</span>
        )}
      </div>
    </div>
  )
}

export default function SermonsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? sermons
    : sermons.filter(s => s.category === activeFilter)

  return (
    <>
      <PageHero
        label="Messages & Teaching"
        title="Sermons"
        subtitle="Listen to God's Word proclaimed every Sunday and Wednesday. All messages are available on our YouTube channel."
      />

      <section className={styles.page}>
        <div className={styles.container}>

          {/* YouTube channel banner */}
          <div className={styles.channelBanner}>
            <div className={styles.ytIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/>
              </svg>
            </div>
            <div className={styles.channelInfo}>
              <p className={styles.channelTitle}>Church of Christ — Abaranje-Ikotun</p>
              <p className={styles.channelSub}>Subscribe to get notified of new sermons every week</p>
            </div>
            <a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.subscribeBtn}
              id="youtube-subscribe-btn"
            >
              Subscribe
            </a>
          </div>

          {/* Filter pills */}
          <div className={styles.filters}>
            {categories.map(cat => (
              <button
                key={cat}
                id={`sermon-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className={`${styles.filterBtn} ${activeFilter === cat ? styles.active : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sermon grid */}
          <div className={styles.grid}>
            {filtered.map(sermon => (
              <SermonCard key={sermon.id} sermon={sermon} />
            ))}
          </div>

          {/* Add sermons hint */}
          <div className={styles.hint}>
            <p>
              📌 <strong>To add a sermon:</strong> open <code>src/pages/SermonsPage.jsx</code>,
              find the <code>sermons</code> array, and paste the YouTube video ID into the <code>videoId</code> field.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
