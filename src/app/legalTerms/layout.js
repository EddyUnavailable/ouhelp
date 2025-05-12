
import styles from "../styles/legalTerms.module.css";
import Link from "next/link";


export default function RootLayout({ children }) {
  return (
    <div>
      <div>
        <div className={styles.container}>
          <aside className={styles.sideBar}>
            <nav className={styles.navbar}>
              <Link href="/" className={styles.navbarLink}>Home</Link>
              <Link href="/legalTerms/criminalLaw" className={styles.navbarLink}>Criminal Law</Link>
              <Link href="/legalTerms/legalTerms3" className={styles.navbarLink}>Legal Terms3</Link>
              <Link href="/legalTerms/legalTerms4" className={styles.navbarLink}>Legal Terms4</Link>
              <Link href="/legalTerms/legalTerms5" className={styles.navbarLink}>Legal Terms5</Link>
              <Link href="/legalTerms/legalTerms6" className={styles.navbarLink}>Legal Terms6</Link>
              <Link href="/legalTerms/culpability" className={styles.navbarLink}>Culpability</Link>
            </nav>
          </aside>

          <main className={styles.mainContent}>
            {children}
          </main>

          <footer className={styles.footer}>
            <p>© 2025 Your App Name. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

