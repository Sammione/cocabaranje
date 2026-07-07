import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const handleParallax = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY
        heroRef.current.style.backgroundPositionY = `${scrollY * 0.3}px`
      }
    }
    window.addEventListener('scroll', handleParallax, { passive: true })
    return () => window.removeEventListener('scroll', handleParallax)
  }, [])

  return (
    <section className={styles.hero} id="home" ref={heroRef}>
      {/* Light modern overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.badge}>
          Welcome to
        </div>

        <h1 className={styles.title}>
          A Place of Peace<br />& Community
        </h1>

        <p className={styles.verse}>
          Join us for Sunday Worship, Bible Study, and fellowship in Abaranje-Ikotun.
        </p>

        <div className={styles.ctaGroup}>
          <a href="#about" className={styles.btnPrimary}>
            Discover Our Story
          </a>
          <a href="#contact" className={styles.btnOutline}>
            Plan a Visit
          </a>
        </div>
      </div>
    </section>
  )
}
