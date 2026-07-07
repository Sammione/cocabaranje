import styles from './MapSection.module.css'

export default function MapSection() {
  return (
    <section className={styles.mapSection} id="map">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>Find Us</span>
          <h2 className={styles.title}>We're Easy to Find</h2>
          <p className={styles.subtitle}>
            Come worship with us at Abaranje-Ikotun, Lagos.
            We'd love to see you this Sunday!
          </p>
        </div>

        <div className={styles.content}>
          {/* Info cards */}
          <div className={styles.infoCol}>
            <div className={styles.infoCard} id="map-address-card">
              <div className={styles.infoIcon}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 2C8.24 2 6 4.24 6 7c0 4.13 5 11 5 11s5-6.87 5-11c0-2.76-2.24-5-5-5zM11 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className={styles.infoTitle}>Our Address</h3>
                <p className={styles.infoText}>No. 29 Custom Bus Stop<br/>Abaranje, Ikotun, Lagos<br/>Nigeria</p>
              </div>
            </div>

            <div className={styles.infoCard} id="map-sunday-card">
              <div className={styles.infoIcon}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M11 6v5l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h3 className={styles.infoTitle}>Sunday Service</h3>
                <p className={styles.infoText}>Every Sunday<br/>8:30 AM – 12:00 PM</p>
              </div>
            </div>

            <div className={styles.infoCard} id="map-parking-card">
              <div className={styles.infoIcon}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="3" y="3" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 15V7h4a3 3 0 010 6H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className={styles.infoTitle}>Landmark</h3>
                <p className={styles.infoText}>Near Custom Bus Stop<br/>Off Ikotun-Igando Road</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Abaranje+Ikotun+Lagos+Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directionsBtn}
              id="map-directions-btn"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2l7 7-7 7M2 9h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Get Directions
            </a>
          </div>

          {/* Map embed */}
          <div className={styles.mapCol}>
            <div className={styles.mapFrame}>
              <iframe
                title="Church of Christ Abaranje-Ikotun Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5!2d3.279!3d6.601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93b1b7b7b7b7%3A0x1234!2sAbaranje%2C+Ikotun%2C+Lagos!5e0!3m2!1sen!2sng!4v1683000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Map overlay label */}
              <div className={styles.mapLabel}>
                <div className={styles.mapLabelDot}></div>
                <span>Church of Christ, Abaranje-Ikotun</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
