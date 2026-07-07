import { useState, useEffect, useCallback } from 'react'
import styles from './Gallery.module.css'

// ── Gallery data ──────────────────────────────────────────────
// Add more images here by pushing new objects to this array.
// Each object needs: id, src, alt, category, caption
const galleryItems = [
  {
    id: 1,
    src: '/images/gallery-worship.png',
    alt: 'Sunday Worship Service',
    category: 'Worship',
    caption: 'Sunday Worship — congregation lifted in praise',
    size: 'large',   // large = spans 2 cols
  },
  {
    id: 2,
    src: '/images/gallery-bible-study.png',
    alt: 'Thursday Bible Study',
    category: 'Bible Study',
    caption: 'Thursday Bible Study — growing together in the Word',
    size: 'normal',
  },
  {
    id: 3,
    src: '/images/gallery-lectureship.png',
    alt: 'Annual Lectureship',
    category: 'Events',
    caption: 'Annual Lectureship — transformed by grace',
    size: 'normal',
  },
  // ── Placeholder slots — replace src with your own photos ──
  // {
  //   id: 4,
  //   src: '/images/your-photo.jpg',
  //   alt: 'Description',
  //   category: 'Community',
  //   caption: 'Your caption here',
  //   size: 'normal',
  // },
]

const categories = ['All', ...new Set(galleryItems.map(i => i.category))]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)  // index into filtered array
  const [imageLoaded, setImageLoaded] = useState({})

  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(i => i.category === activeFilter)

  // Keyboard navigation for lightbox
  const handleKey = useCallback((e) => {
    if (lightbox === null) return
    if (e.key === 'ArrowRight') setLightbox(p => (p + 1) % filtered.length)
    if (e.key === 'ArrowLeft')  setLightbox(p => (p - 1 + filtered.length) % filtered.length)
    if (e.key === 'Escape')     setLightbox(null)
  }, [lightbox, filtered.length])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  // Prevent body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  const openLightbox = (idx) => setLightbox(idx)
  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox(p => (p - 1 + filtered.length) % filtered.length)
  const next = () => setLightbox(p => (p + 1) % filtered.length)

  const activeItem = lightbox !== null ? filtered[lightbox] : null

  return (
    <section className={styles.gallery} id="gallery">
      <div className={styles.container}>

        {/* ── Header ── */}
        <div className={styles.header}>
          <span className={styles.label}>Our Life Together</span>
          <h2 className={styles.title}>Photo Gallery</h2>
          <p className={styles.subtitle}>
            Moments of worship, fellowship, and community captured from
            our congregation at Abaranje-Ikotun.
          </p>
        </div>

        {/* ── Filter Pills ── */}
        <div className={styles.filters} role="group" aria-label="Filter gallery">
          {categories.map(cat => (
            <button
              key={cat}
              id={`gallery-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              className={`${styles.filterBtn} ${activeFilter === cat ? styles.active : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Masonry Grid ── */}
        <div className={styles.grid}>
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              className={`${styles.item} ${item.size === 'large' ? styles.large : ''}`}
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              aria-label={`View: ${item.alt}`}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
            >
              <div className={styles.imgWrap}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`${styles.img} ${imageLoaded[item.id] ? styles.loaded : ''}`}
                  onLoad={() => setImageLoaded(p => ({ ...p, [item.id]: true }))}
                  loading="lazy"
                />
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <span className={styles.itemCategory}>{item.category}</span>
                    <p className={styles.itemCaption}>{item.caption}</p>
                    <div className={styles.zoomIcon}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2"/>
                        <path d="M11 8v6M8 11h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M16.5 16.5L21 21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Upload hint ── */}
        <div className={styles.uploadHint}>
          <div className={styles.uploadIcon}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 3v12M6 8l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <p>More photos will be added here — <span>check back soon!</span></p>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {activeItem && (
        <div
          className={styles.lightbox}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          id="gallery-lightbox"
        >
          {/* Close */}
          <button
            className={styles.closeBtn}
            onClick={closeLightbox}
            aria-label="Close lightbox"
            id="lightbox-close"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4l12 12M16 4L4 16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Counter */}
          <div className={styles.counter}>
            {lightbox + 1} / {filtered.length}
          </div>

          {/* Prev */}
          <button
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous image"
            id="lightbox-prev"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M14 5l-7 6 7 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Image */}
          <div className={styles.lightboxContent} onClick={e => e.stopPropagation()}>
            <img
              src={activeItem.src}
              alt={activeItem.alt}
              className={styles.lightboxImg}
            />
            <div className={styles.lightboxCaption}>
              <span className={styles.lightboxCategory}>{activeItem.category}</span>
              <p className={styles.lightboxText}>{activeItem.caption}</p>
            </div>
          </div>

          {/* Next */}
          <button
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next image"
            id="lightbox-next"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M8 5l7 6-7 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}
