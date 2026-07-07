import styles from './PageHero.module.css'

export default function PageHero({ label, title, subtitle, bgGradient }) {
  return (
    <div
      className={styles.hero}
      style={bgGradient ? { background: bgGradient } : undefined}
    >
      <div className={styles.overlay} />
      <div className={styles.content}>
        {label && <span className={styles.label}>{label}</span>}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      {/* Decorative bottom wave */}
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none">
          <path d="M0 60V30C360 0 1080 60 1440 30V60H0Z" fill="white"/>
        </svg>
      </div>
    </div>
  )
}
