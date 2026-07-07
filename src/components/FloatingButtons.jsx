import { useState, useEffect } from 'react'
import styles from './FloatingButtons.module.css'

// Church WhatsApp number — update this to the real number
const WHATSAPP_NUMBER = '2348023195102'
const WHATSAPP_MESSAGE = 'Hello! I found your website and I\'d love to know more about the Church of Christ at Abaranje-Ikotun.'

export default function FloatingButtons() {
  const [showBackTop, setShowBackTop] = useState(false)
  const [whatsappPulse, setWhatsappPulse] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowBackTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Pulse the WhatsApp button after 3 seconds to draw attention
  useEffect(() => {
    const t = setTimeout(() => setWhatsappPulse(true), 3000)
    return () => clearTimeout(t)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <div className={styles.floatingWrap}>
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.whatsappBtn} ${whatsappPulse ? styles.pulse : ''}`}
        aria-label="Chat on WhatsApp"
        id="floating-whatsapp"
        title="Chat with us on WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M11.998 2C6.477 2 2 6.477 2 12c0 1.918.53 3.716 1.456 5.245L2.006 22l4.875-1.427A9.95 9.95 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 11.998 2zm.002 18.067a8.063 8.063 0 01-4.318-1.25l-.31-.185-3.203.937.877-3.28-.204-.34A8.066 8.066 0 013.93 12c0-4.448 3.62-8.067 8.07-8.067 4.451 0 8.07 3.619 8.07 8.067 0 4.447-3.619 8.067-8.07 8.067z"/>
        </svg>
        <span className={styles.whatsappTooltip}>Chat with us!</span>
      </a>

      {/* Back-to-top Button */}
      <button
        className={`${styles.backTopBtn} ${showBackTop ? styles.visible : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        id="back-to-top"
        title="Back to top"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 16V4M4 10l6-6 6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}
