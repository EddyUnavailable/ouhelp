// app/improve-writing/page.js
import styles from "./../styles/legalWriting.module.css";
import Link from "next/link";

export default function ImproveWritingPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Improving Legal Writing through Reading</h1>

      <section className={styles.section}>
        <p>
          Reading high-quality legal writing is one of the most effective ways to
          enhance your own writing. It teaches legal structure, vocabulary,
          argumentation, and clarity. Here’s how to benefit from it:
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Why Read High-Quality Legal Writing?</h2>
        <ul className={styles.list}>
          <li>Absorb legal terminology and structured reasoning</li>
          <li>Understand how legal arguments are developed</li>
          <li>Learn how law is applied to facts</li>
          <li>Write with precision and authority</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>What Should You Read?</h2>

        <h3 className={styles.subheading}>1. Judgments from Higher UK Courts</h3>
        <p>Focus on well-reasoned cases from:</p>
        <ul className={styles.list}>
          <li>Supreme Court of the UK</li>
          <li>Court of Appeal</li>
          <li>High Court</li>
        </ul>

        <p>Example Cases:</p>
        <ul className={styles.list}>
          <li>
            <Link href="https://www.bailii.org/uk/cases/UKHL/1993/19.html" target="_blank" rel="noopener noreferrer">
              R v Brown [1993] 2 All ER 75
            </Link> – Criminal law and consent
          </li>
          <li>
            <Link href="https://www.bailii.org/uk/cases/UKHL/1932/100.html" target="_blank" rel="noopener noreferrer">
              Donoghue v Stevenson [1932] AC 562
            </Link> – Foundational tort law
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h3 className={styles.subheading}>2. Academic Legal Journals & Textbooks</h3>
        <ul className={styles.list}>
          <li>The Modern Law Review</li>
          <li>Cambridge Law Journal</li>
          <li>Oxford Journal of Legal Studies</li>
          <li>Law Quarterly Review</li>
        </ul>

        <p>
          Recommended: <em>The English Legal System</em> by Slapper and Kelly.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Tips for Effective Reading</h2>
        <ul className={styles.list}>
          <li>Highlight and annotate as you go</li>
          <li>Summarise judgments in your own words</li>
          <li>Observe citation and referencing styles</li>
        </ul>
      </section>
    </main>
  );
}
