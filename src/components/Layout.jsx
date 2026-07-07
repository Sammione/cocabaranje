import { useLocation } from 'react-router-dom'
import BibleVerseBanner from './BibleVerseBanner'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingButtons from './FloatingButtons'
import styles from './Layout.module.css'

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <div className={styles.app}>
      <BibleVerseBanner />
      <Navbar />
      {/* Home page has its own Hero that accounts for the offset; inner pages need padding */}
      <main className={isHome ? styles.mainHome : styles.main}>
        {children}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
