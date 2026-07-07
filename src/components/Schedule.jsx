import { useState } from 'react'
import styles from './Schedule.module.css'

const meetingTimes = [
  {
    day: 'Sun',
    fullDay: 'Sunday',
    name: 'Lord\'s Supper & Worship',
    time: '8:30 AM – 12:00 PM',
    icon: '✝',
    highlight: true,
  },
  {
    day: 'Thu',
    fullDay: 'Thursday',
    name: 'Bible Study',
    time: '6:00 PM – 7:00 PM',
    icon: '📖',
    highlight: false,
  },
  {
    day: 'Sat',
    fullDay: 'Saturday',
    name: 'Evangelism Outreach',
    time: '10:00 AM – 12:00 PM',
    icon: '🌍',
    highlight: false,
  },
]

const events = [
  {
    id: 'annual-lectureship',
    month: 'AUG',
    day: '15',
    year: '2026',
    name: 'Annual Lectureship',
    desc: 'A week-long celebration of sound doctrine, gospel preaching, and Christian fellowship.',
    badge: 'Upcoming',
    badgeColor: '#c9a227',
  },
  {
    id: 'sing-to-lord',
    month: 'OCT',
    day: '02',
    year: '2026',
    name: 'Sing To The Lord',
    desc: 'An evening of beautiful a cappella worship and praise with congregations across Lagos.',
    badge: 'Music',
    badgeColor: '#1e56c0',
  },
  {
    id: 'youth-fellowship',
    month: 'EVERY',
    day: 'SAT',
    year: 'Monthly',
    name: 'Youth Fellowship',
    desc: 'Last Saturday of every month — growing the next generation in faith, purpose, and community.',
    badge: 'Youth',
    badgeColor: '#059669',
  },
]

export default function Schedule() {
  const [activeTab, setActiveTab] = useState('times')

  return (
    <section className={styles.schedule} id="events">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>Plan Your Visit</span>
          <h2 className={styles.title}>Services & Events</h2>
          <p className={styles.subtitle}>
            We'd love to have you join us. Here's when we gather
            and what's coming up at Abaranje.
          </p>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'times' ? styles.active : ''}`}
            onClick={() => setActiveTab('times')}
            id="tab-meeting-times"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 4v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Meeting Times
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'events' ? styles.active : ''}`}
            onClick={() => setActiveTab('events')}
            id="tab-upcoming-events"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M5 2v2M11 2v2M2 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Upcoming Events
          </button>
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* Meeting Times */}
          {activeTab === 'times' && (
            <div className={styles.timesGrid}>
              {meetingTimes.map((item, i) => (
                <div
                  className={`${styles.timeCard} ${item.highlight ? styles.highlightCard : ''}`}
                  key={i}
                  id={`meeting-${item.day.toLowerCase()}`}
                >
                  <div className={styles.timeDayBadge}>
                    <span className={styles.timeDayShort}>{item.day}</span>
                    <span className={styles.timeDayFull}>{item.fullDay}</span>
                  </div>
                  <div className={styles.timeInfo}>
                    <h3 className={styles.timeName}>{item.name}</h3>
                    <p className={styles.timeHours}>{item.time}</p>
                  </div>
                  <div className={styles.timeIcon}>{item.icon}</div>
                </div>
              ))}

              {/* Info box */}
              <div className={styles.infoBox}>
                <div className={styles.infoIcon}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M11 8v4M11 14v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className={styles.infoTitle}>All Are Welcome</p>
                  <p className={styles.infoText}>
                    Whether it's your first time or you've been with us for years,
                    come as you are. We would love to worship with you.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Upcoming Events */}
          {activeTab === 'events' && (
            <div className={styles.eventsList}>
              {events.map((event) => (
                <div className={styles.eventCard} key={event.id} id={`event-${event.id}`}>
                  <div className={styles.eventDate}>
                    <span className={styles.eventMonth}>{event.month}</span>
                    <span className={styles.eventDay}>{event.day}</span>
                    <span className={styles.eventYear}>{event.year}</span>
                  </div>
                  <div className={styles.eventInfo}>
                    <span
                      className={styles.eventBadge}
                      style={{ background: `${event.badgeColor}20`, color: event.badgeColor }}
                    >
                      {event.badge}
                    </span>
                    <h3 className={styles.eventName}>{event.name}</h3>
                    <p className={styles.eventDesc}>{event.desc}</p>
                  </div>
                  <div className={styles.eventArrow}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10h12M11 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
