import { useState, useEffect } from 'react'
import styles from './BibleVerseBanner.module.css'

const verses = [
  { text: 'I can do all things through Christ who strengthens me.', ref: 'Philippians 4:13' },
  { text: 'The Lord is my shepherd; I shall not want.', ref: 'Psalm 23:1' },
  { text: 'Trust in the Lord with all your heart and lean not on your own understanding.', ref: 'Proverbs 3:5' },
  { text: 'For God so loved the world that He gave His only Son.', ref: 'John 3:16' },
  { text: 'Be strong and courageous. Do not be afraid; the Lord your God is with you.', ref: 'Joshua 1:9' },
  { text: 'The churches of Christ salute you.', ref: 'Romans 16:16' },
  { text: 'Come to me, all who labor and are heavy laden, and I will give you rest.', ref: 'Matthew 11:28' },
]

export default function BibleVerseBanner() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCurrent(c => (c + 1) % verses.length)
        setFading(false)
      }, 500)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const verse = verses[current]

  return (
    <div className={styles.banner} id="bible-verse-banner">
      <div className={styles.inner}>
        {/* Cross icon */}
        <div className={styles.crossIcon}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Verse text */}
        <p className={`${styles.text} ${fading ? styles.fade : ''}`}>
          <em>"{verse.text}"</em>
          <span className={styles.ref}> — {verse.ref}</span>
        </p>

        {/* Dot indicators */}
        <div className={styles.dots}>
          {verses.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.activeDot : ''}`}
              onClick={() => { setFading(true); setTimeout(() => { setCurrent(i); setFading(false) }, 400) }}
              aria-label={`Verse ${i + 1}`}
              id={`verse-dot-${i}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
