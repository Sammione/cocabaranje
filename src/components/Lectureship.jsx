import styles from './Lectureship.module.css'

export default function Lectureship() {
  return (
    <section className={styles.lectureship} id="lectureship">
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.label}>Annual Event</span>
          <h2 className={styles.title}>Annual Lectureship 2026</h2>
          <p className={styles.date}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="3" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6 2v2M12 2v2M2 7h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            August 15, 2026
          </p>
          <p className={styles.desc}>
            Join us for our annual week-long lectureship — a powerful gathering of
            gospel preachers, teachers, and saints from across Nigeria and beyond.
            Expect deep biblical teaching, uplifting worship, and strengthened
            fellowship as we grow together in the Word of God.
          </p>
          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <span className={styles.highlightIcon}>🎤</span>
              <span>Gospel Preaching</span>
            </div>
            <div className={styles.highlight}>
              <span className={styles.highlightIcon}>🎵</span>
              <span>A Cappella Worship</span>
            </div>
            <div className={styles.highlight}>
              <span className={styles.highlightIcon}>📚</span>
              <span>Bible Classes</span>
            </div>
            <div className={styles.highlight}>
              <span className={styles.highlightIcon}>🤝</span>
              <span>Christian Fellowship</span>
            </div>
          </div>
          <div className={styles.ctaGroup}>
            <a href="#contact" className={styles.btnGold}
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              id="lectureship-register">
              Register Interest
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <div className={styles.countdown}>
              <span className={styles.countdownLabel}>📍 29, Sete Aiyede Street, Off Kwaru family way, Custom bus stop, Abaranje</span>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className={styles.decorBox}>
          <div className={styles.decorCross}>
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <path d="M60 10v100M15 60H105" stroke="white" strokeWidth="8" strokeLinecap="round"/>
            </svg>
          </div>
          <div className={styles.decorCircle1}></div>
          <div className={styles.decorCircle2}></div>
          <div className={styles.decorCard}>
            <div className={styles.decorCardInner}>
              <p className={styles.decorQuote}>"Go into all the world and preach the gospel to every creature."</p>
              <p className={styles.decorVerse}>— Mark 16:15</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
