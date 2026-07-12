import styles from './About.module.css'

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2C14 2 6 7 6 14a8 8 0 0016 0C22 7 14 2 14 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M14 10v8M10 14h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Rooted in Scripture',
    desc: 'Every doctrine and practice is grounded in the Word of God alone, without human additions or subtractions.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M5 24c0-4.418 4.03-8 9-8s9 3.582 9 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Christ-Centered',
    desc: 'Jesus Christ is the head of the church and the center of all worship, fellowship, and community life.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 14h20M14 4l10 10-10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'A Cappella Worship',
    desc: 'We worship with vocal music and heartfelt praise, honoring the New Testament pattern of singing to God.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4z" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 8v6l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'New Testament Church',
    desc: 'Restored to the pattern of the first-century church with no creeds but Christ and no book but the Bible.',
  },
]

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        {/* Left Column */}
        <div className={styles.left}>
          <span className={styles.label}>Who We Are</span>
          <h2 className={styles.title}>
            Founded on the
            <br />
            <span className={styles.highlight}>Word of God</span>
          </h2>
          <div className={styles.titleLine}></div>
          <p className={styles.desc}>
            The Church of Christ at Abaranje-Ikotun is a non-denominational
            congregation that strives to follow the New Testament pattern of
            worship and Christian living. We believe in speaking where the Bible
            speaks and remaining silent where the Bible is silent.
          </p>
          <p className={styles.desc}>
            Located at 29,Sete Aiyede Street, Off Kwaru family way, Custom bus stop, Abaranje, — we are
            a welcoming community of believers committed to love, truth, and service.
          </p>

          <div className={styles.locationCard}>
            <div className={styles.locationIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2C7.24 2 5 4.24 5 7c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5z" fill="currentColor" opacity="0.2"/>
                <path d="M10 2C7.24 2 5 4.24 5 7c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5zM10 9a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <div>
              <p className={styles.locationTitle}>Our Location</p>
              <p className={styles.locationAddr}>29,Sete Aiyede Street, Off Kwaru family way, Custom bus stop, Abaranje,</p>
            </div>
          </div>
        </div>

        {/* Right Column — Values */}
        <div className={styles.right}>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div className={styles.valueCard} key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
