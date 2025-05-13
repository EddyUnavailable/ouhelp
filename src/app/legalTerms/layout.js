
import styles from "./../styles/main.module.css";
import Link from "next/link";


export default function RootLayout({ children }) {
  return (
    <div>
      <div>
        <div className={styles.container2}>
          <aside className={styles.sideNav}>
              <Link href="/legalTerms" className={styles.navBut}>Legal Terms</Link>
              <Link href="/legalTerms/legalTerms2" className={styles.navBut}>Place Holder</Link>
              <Link href="/legalTerms/legalTerms3" className={styles.navBut}>Place Holder</Link>
              <Link href="/legalTerms/legalTerms4" className={styles.navBut}>Place Holder</Link>
              <Link href="/legalTerms/legalTerms5" className={styles.navBut}>Place Holder</Link>
              <Link href="/legalTerms/legalTerms6" className={styles.navBut}>Legal Grammar</Link>
          </aside>

            <main className={styles.mainContent2}>
              {children}
            </main>

          
        </div>
      </div>
    </div>
  );
}

