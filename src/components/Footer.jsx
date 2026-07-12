import styles from './Footer.module.css'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Who We Are', href: '#about' },
  { label: 'Our Pillars', href: '#features' },
  { label: 'Services & Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Lectureship', href: '#lectureship' },
  { label: 'Contact Us', href: '#contact' },
]

const meetingTimes = [
  { name: 'Sunday Worship', time: '8:30 AM – 12:00 PM' },
  { name: 'Thursday Bible Study', time: '6:00 PM – 7:00 PM' },
  { name: 'Saturday Evangelism', time: '10:00 AM – 12:00 PM' },
]

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer} id="footer-section">
      <div className={styles.topWave}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="#0a1628"/>
        </svg>
      </div>

      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brandCol}>
            <div className={styles.logoWrap}>
              <div className={styles.logoIcon}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <rect width="36" height="36" rx="10" fill="url(#fLogoGrad)"/>
                  <path d="M18 6V30M10 18H26" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="fLogoGrad" x1="0" y1="0" x2="36" y2="36">
                      <stop stopColor="#c9a227"/>
                      <stop offset="1" stopColor="#f0c842"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <span className={styles.logoMain}>Church of Christ</span>
                <span className={styles.logoSub}>Abaranje-Ikotun, Lagos</span>
              </div>
            </div>
            <p className={styles.brandDesc}>
              A New Testament congregation committed to worshipping God
              in spirit and in truth, following the pattern of the early church.
            </p>
            <div className={styles.verse}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v12M1 7h12" stroke="#f0c842" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <em>"The churches of Christ salute you" — Romans 16:16</em>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={styles.link}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Meeting Times */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Meeting Times</h3>
            <ul className={styles.timeList}>
              {meetingTimes.map((item) => (
                <li key={item.name} className={styles.timeItem}>
                  <span className={styles.timeName}>{item.name}</span>
                  <span className={styles.timeVal}>{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2C5.07 2 3.5 3.57 3.5 5.5 3.5 8.13 7 12 7 12s3.5-3.87 3.5-6.5C10.5 3.57 8.93 2 7 2zM7 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                <span>29, Sete Aiyede Street,<br/>Off Kwaru family way,<br/>Custom bus stop, Abaranje</span>
              </li>
              <li className={styles.contactItem}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 3.5a1 1 0 011-1h.61a.5.5 0 01.49.402l.268 1.337a.5.5 0 01-.115.447l-.66.66a6.01 6.01 0 002.4 2.4l.66-.66a.5.5 0 01.447-.115l1.337.268A.5.5 0 0111 7.39v.61a1 1 0 01-1 1 7.5 7.5 0 01-7.5-7.5v-.5z" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                <span>+234 802 319 5102</span>
              </li>
              <li className={styles.contactItem}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="2" y="3" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M2 4l5 4 5-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                <span>cocikotun@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2026 The Church of Christ, Abaranje-Ikotun. All Rights Reserved.
          </p>
          <p className={styles.built}>
            Built with ♥ to the glory of God
          </p>
        </div>
      </div>
    </footer>
  )
}
