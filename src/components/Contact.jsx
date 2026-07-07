import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', message: '', phone: '' })
  }

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        {/* Left Info */}
        <div className={styles.info}>
          <span className={styles.label}>Get In Touch</span>
          <h2 className={styles.title}>We'd Love to<br />Hear From You</h2>
          <div className={styles.titleLine}></div>
          <p className={styles.desc}>
            Have a question, need prayer, or want to visit?
            Reach out to us — we welcome all inquiries.
          </p>

          <div className={styles.contactItems}>
            <div className={styles.contactItem} id="contact-address">
              <div className={styles.contactIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2C7.24 2 5 4.24 5 7c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5zM10 9a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <p className={styles.contactLabel}>Address</p>
                <p className={styles.contactValue}>No. 29 Custom Bus Stop, Abaranje<br />Ikotun, Lagos, Nigeria</p>
              </div>
            </div>

            <div className={styles.contactItem} id="contact-phone">
              <div className={styles.contactIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 5a2 2 0 012-2h1.22a1 1 0 01.98.804l.535 2.674a1 1 0 01-.23.894L6.3 8.7a10.02 10.02 0 004 4l1.328-1.207a1 1 0 01.894-.23l2.674.535A1 1 0 0116 12.78V14a2 2 0 01-2 2C7.373 16 3 11.627 3 6V5z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <p className={styles.contactLabel}>Phone</p>
                <p className={styles.contactValue}>+234 802 319 5102</p>
              </div>
            </div>

            <div className={styles.contactItem} id="contact-email">
              <div className={styles.contactIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 5h14a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M3 6l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className={styles.contactLabel}>Email</p>
                <p className={styles.contactValue}>cocikotun@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className={styles.social}>
            <p className={styles.socialLabel}>Connect With Us</p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialBtn} aria-label="Facebook" id="social-facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" className={styles.socialBtn} aria-label="YouTube" id="social-youtube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.39a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
                  <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                </svg>
              </a>
              <a href="#" className={styles.socialBtn} aria-label="WhatsApp" id="social-whatsapp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M11.998 2C6.477 2 2 6.477 2 12c0 1.918.53 3.716 1.456 5.245L2.006 22l4.875-1.427A9.95 9.95 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 11.998 2zm.002 18.067a8.063 8.063 0 01-4.318-1.25l-.31-.185-3.203.937.877-3.28-.204-.34A8.066 8.066 0 013.93 12c0-4.448 3.62-8.067 8.07-8.067 4.451 0 8.07 3.619 8.07 8.067 0 4.447-3.619 8.067-8.07 8.067z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className={styles.formWrap}>
          <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.successMsg}>
                <div className={styles.successIcon}>✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you soon. God bless you!</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} id="contact-form">
                <h3 className={styles.formTitle}>Send Us a Message</h3>
                <p className={styles.formSubtitle}>We respond within 24 hours</p>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.formInput}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.formLabel}>Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+234 ..."
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.formInput}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.formInput}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="How can we help you? Prayer request, questions, or just want to say hello..."
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.formTextarea}
                  />
                </div>

                <button type="submit" className={styles.submitBtn} id="contact-submit">
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h12M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
