import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Home',        to: '/',             type: 'route' },
  { label: 'Who We Are',  to: '/about',        type: 'route' },
  { label: 'Sermons',     to: '/sermons',      type: 'route' },
  { label: 'Gallery',     to: '/gallery',      type: 'route' },
  { label: 'Lectureship', to: '/lectureship',  type: 'route' },
  { label: 'Contact',     to: '/#contact',     type: 'hash'  },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const navigate  = useNavigate()
  const location  = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => setMenuOpen(false), [location.pathname])

  const handleHashLink = (e, hash) => {
    e.preventDefault()
    setMenuOpen(false)
    if (location.pathname === '/') {
      // Already on home — just scroll
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Navigate home then scroll after render
      navigate('/')
      setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 300)
    }
  }

  const renderLink = (link, mobile = false) => {
    const cls = mobile ? styles.mobileLink : styles.navLink

    if (link.type === 'hash') {
      return (
        <a
          key={link.label}
          href={link.to}
          className={cls}
          onClick={(e) => handleHashLink(e, '#contact')}
        >
          {link.label}
        </a>
      )
    }

    return (
      <NavLink
        key={link.label}
        to={link.to}
        end={link.to === '/'}
        className={({ isActive }) => `${cls} ${isActive ? styles.activeLink : ''}`}
        onClick={() => setMenuOpen(false)}
      >
        {link.label}
      </NavLink>
    )
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} id="navbar">
      <div className={styles.container}>

        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="10" fill="url(#logoGrad)"/>
              <path d="M18 6V30M10 18H26" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="36" y2="36">
                  <stop stopColor="#c9a227"/>
                  <stop offset="1" stopColor="#f0c842"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoMain}>Church of Christ</span>
            <span className={styles.logoSub}>Abaranje-Ikotun</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navLinks}>
            {navLinks.map((link) => <li key={link.label}>{renderLink(link)}</li>)}
          </ul>
        </nav>

        {/* CTA */}
        <Link to="/about" className={styles.joinBtn} id="nav-join-btn">
          Join Us
        </Link>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="hamburger-btn"
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        <ul className={styles.mobileLinks}>
          {navLinks.map((link) => <li key={link.label}>{renderLink(link, true)}</li>)}
          <li>
            <Link to="/about" className={styles.mobileJoinBtn} onClick={() => setMenuOpen(false)}>
              Join Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
