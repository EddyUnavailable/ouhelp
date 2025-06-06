
import styles from "@/styles/layout.module.css";
import Link from "next/link";



export default function IRACLayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <div className={styles.containerAside}>
           <aside className={styles.aside}>
              <Link href="/" className={styles.navBut}>Home</Link>
              <Link href="/irac/iracExample1" className={styles.navBut}>Example 1</Link>
              <Link href="/irac/iracExample2" className={styles.navBut}>Example 2</Link>
              <Link href="/irac/iracExample3" className={styles.navBut}>Example 3</Link>
              <Link href="/irac/iracExample4" className={styles.navBut}>Example 4</Link>
              <Link href="/irac/iracExample5" className={styles.navBut}>Example 5</Link>
              <Link href="/irac/iracExample6" className={styles.navBut}>Example 6</Link>
              <Link href="/irac/iracExample7" className={styles.navBut}>Example 7</Link>
              <Link href="/irac/iracExample8" className={styles.navBut}>Example 8</Link>
              <Link href="/irac/iracExample9" className={styles.navBut}>Example 9</Link>
              <Link href="/irac/iracExample10" className={styles.navBut}>Example 10</Link>
            </aside>
           

          <main className={styles.mainContent}>
            {children}
          </main>

          
        </div>
      </div>
    </div>
  );
}

