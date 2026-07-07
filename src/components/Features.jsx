import styles from './Features.module.css'

const features = [
  {
    id: 'worship',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4v24M8 12l8-8 8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 20h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 24h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Worship',
    tagline: 'Spirit & Truth',
    desc: 'Exalting God in spirit and in truth through heartfelt hymns and a cappella singing, as the New Testament commands.',
    color: '#1e56c0',
    gradient: 'linear-gradient(135deg, #1e3a8a, #1e56c0)',
  },
  {
    id: 'discipleship',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 12h12M10 16h8M10 20h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Discipleship',
    tagline: 'Grow in Grace',
    desc: 'Growing together through in-depth Bible study and authentic Christian fellowship rooted in the apostles\' teaching.',
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, #5b21b6, #7c3aed)',
  },
  {
    id: 'community',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="12" cy="10" r="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="22" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 26c0-4 3.58-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 20c2.76 0 5 1.79 5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Community',
    tagline: 'One in Christ',
    desc: 'Building strong relationships and a caring family atmosphere where every member is valued and loved.',
    color: '#059669',
    gradient: 'linear-gradient(135deg, #065f46, #059669)',
  },
  {
    id: 'mission',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 4v24M4 16h24" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 8c2 4 4 6 10 8-6 2-8 4-10 8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M26 8c-2 4-4 6-10 8 6 2 8 4 10 8" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Mission',
    tagline: 'Light to the World',
    desc: 'Sharing and preaching the gospel of Christ throughout Lagos and beyond, fulfilling the Great Commission.',
    color: '#c9a227',
    gradient: 'linear-gradient(135deg, #92400e, #c9a227)',
  },
]

export default function Features() {
  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>Our Pillars</span>
          <h2 className={styles.title}>What We Stand For</h2>
          <p className={styles.subtitle}>
            Four foundational pillars that define our life together as the
            Church of Christ at Abaranje-Ikotun.
          </p>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {features.map((feature, i) => (
            <div
              className={styles.card}
              key={feature.id}
              id={`feature-${feature.id}`}
              style={{ '--card-color': feature.color, '--card-gradient': feature.gradient, animationDelay: `${i * 0.12}s` }}
            >
              <div className={styles.cardTop} style={{ background: feature.gradient }}>
                <div className={styles.iconWrap}>
                  {feature.icon}
                </div>
                <div className={styles.cardBg}></div>
              </div>
              <div className={styles.cardBody}>
                <span className={styles.cardTag}>{feature.tagline}</span>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.desc}</p>
                <div className={styles.cardLine} style={{ background: feature.gradient }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
