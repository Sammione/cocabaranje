import { useState, useEffect, useCallback } from 'react'
import PageHero from '../components/PageHero'
import styles from './GalleryPage.module.css'

// ── Gallery Data ───────────────────────────────────────────────
// Add more images by appending objects to this array.
// Drop your image file into public/images/gallery/ and use '/images/gallery/yourfile.jpg'
const galleryItems = [
  { id: 1, src: '/images/gallery-worship.png',      alt: 'Sunday Worship Service',     category: 'Worship',    caption: 'Sunday Worship — congregation lifted in praise', size: 'large' },
  { id: 2, src: '/images/gallery-bible-study.png',  alt: 'Thursday Bible Study',       category: 'Bible Study', caption: 'Thursday Bible Study — growing together in the Word', size: 'normal' },
  { id: 3, src: '/images/gallery-lectureship.png',  alt: 'Annual Lectureship',         category: 'Events',     caption: 'Annual Lectureship — transformed by grace', size: 'normal' },
  // Add more below ↓
]

const categories = ['All', ...new Set(galleryItems.map(i => i.category))]

export default function GalleryPage() {
  const [filter, setFilter]       = useState('All')
  const [lightbox, setLightbox]   = useState(null)
  const [loaded, setLoaded]       = useState({})

  const filtered = filter === 'All' ? galleryItems : galleryItems.filter(i => i.category === filter)

  const handleKey = useCallback(e => {
    if (lightbox === null) return
    if (e.key === 'ArrowRight') setLightbox(p => (p + 1) % filtered.length)
    if (e.key === 'ArrowLeft')  setLightbox(p => (p - 1 + filtered.length) % filtered.length)
    if (e.key === 'Escape')     setLightbox(null)
  }, [lightbox, filtered.length])

  useEffect(() => { window.addEventListener('keydown', handleKey); return () => window.removeEventListener('keydown', handleKey) }, [handleKey])
  useEffect(() => { document.body.style.overflow = lightbox !== null ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [lightbox])

  const active = lightbox !== null ? filtered[lightbox] : null

  return (
    <>
      <PageHero
        label="Our Life Together"
        title="Photo Gallery"
        subtitle="Moments of worship, fellowship, and community from the Church of Christ, Abaranje-Ikotun."
      />

      <section className={styles.page}>
        <div className={styles.container}>

          {/* Filters */}
          <div className={styles.filters}>
            {categories.map(cat => (
              <button
                key={cat}
                id={`gallery-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className={styles.grid}>
            {filtered.map((item, idx) => (
              <div
                key={item.id}
                id={`gallery-item-${item.id}`}
                className={`${styles.item} ${item.size === 'large' ? styles.large : ''}`}
                onClick={() => setLightbox(idx)}
                role="button" tabIndex={0}
                aria-label={`View: ${item.alt}`}
                onKeyDown={e => e.key === 'Enter' && setLightbox(idx)}
              >
                <div className={styles.imgWrap}>
                  <img
                    src={item.src} alt={item.alt}
                    className={`${styles.img} ${loaded[item.id] ? styles.loaded : ''}`}
                    onLoad={() => setLoaded(p => ({ ...p, [item.id]: true }))}
                    loading="lazy"
                  />
                  <div className={styles.overlay}>
                    <div className={styles.overlayContent}>
                      <span className={styles.badge}>{item.category}</span>
                      <p className={styles.caption}>{item.caption}</p>
                      <div className={styles.zoomIcon}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
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

          {/* Upload hint */}
          <div className={styles.hint}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 3v10M5 8l5-5 5 5M3 16h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>
              More photos coming soon — drop images into <code>public/images/gallery/</code> and add them to
              the <code>galleryItems</code> array in <code>src/pages/GalleryPage.jsx</code>.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {active && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)} id="gallery-lightbox">
          <button className={styles.closeBtn} onClick={() => setLightbox(null)} id="lightbox-close" aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 3l12 12M15 3L3 15" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>
          <div className={styles.counter}>{lightbox + 1} / {filtered.length}</div>
          <button className={`${styles.navBtn} ${styles.prev}`} onClick={e => { e.stopPropagation(); setLightbox(p => (p-1+filtered.length)%filtered.length) }} id="lightbox-prev" aria-label="Previous">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M14 5l-7 6 7 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div className={styles.lbContent} onClick={e => e.stopPropagation()}>
            <img src={active.src} alt={active.alt} className={styles.lbImg}/>
            <div className={styles.lbCaption}>
              <span className={styles.lbBadge}>{active.category}</span>
              <p className={styles.lbText}>{active.caption}</p>
            </div>
          </div>
          <button className={`${styles.navBtn} ${styles.next}`} onClick={e => { e.stopPropagation(); setLightbox(p => (p+1)%filtered.length) }} id="lightbox-next" aria-label="Next">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M8 5l7 6-7 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      )}
    </>
  )
}
