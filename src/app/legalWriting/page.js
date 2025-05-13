// app/legal-writing/page.js
import styles from "./../styles/legalWriting.module.css";

export default function LegalWritingPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Improving Your Legal Writing Skills</h1>
      <p className={styles.intro}>
        Legal writing is a foundational skill in law studies and legal practice. Use
        the tips below to refine your writing and build a solid legal voice.
      </p>

      <section className={styles.tipSection}>
        <h2 className={styles.tipTitle}>1. Master IRAC and Legal Structure</h2>
        <p>
          The <strong>IRAC method</strong> (Issue, Rule, Application, Conclusion) structures your writing logically,
          making your arguments easy to follow. Practice applying it in case analyses.
        </p>
      </section>

      <section className={styles.tipSection}>
        <h2 className={styles.tipTitle}>2. Read High-Quality Legal Writing</h2>
        <p>
          Read judgments from higher UK courts and academic journals to absorb clear legal reasoning and writing style.
        </p>
      </section>

      <section className={styles.tipSection}>
        <h2 className={styles.tipTitle}>3. Use Clear, Concise Language</h2>
        <p>
          Avoid legalese unless necessary. Use short sentences, precise vocabulary, and the active voice when possible.
          <br /><br />
          <strong>Example:</strong><br />
          ❌ “It is submitted that the defendant was not liable.”<br />
          ✅ “The defendant was not liable.”
        </p>
      </section>

      <section className={styles.tipSection}>
        <h2 className={styles.tipTitle}>4. Practice Case Notes and Briefs</h2>
        <p>
          Summarize cases using your own words to strengthen analysis, recall, and clarity. Use IRAC in your summaries.
        </p>
      </section>

      <section className={styles.tipSection}>
        <h2 className={styles.tipTitle}>5. Seek Feedback</h2>
        <p>
          Share your work with tutors or peers and ask for feedback on structure, clarity, and legal analysis.
        </p>
      </section>

      <section className={styles.tipSection}>
        <h2 className={styles.tipTitle}>6. Improve Your Referencing</h2>
        <p>
          Practice citing statutes and cases using the appropriate style (e.g. Cite Them Right or OSCOLA).
        </p>
      </section>

      <section className={styles.tipSection}>
        <h2 className={styles.tipTitle}>7. Use Writing Tools Thoughtfully</h2>
        <p>
          Tools like Grammarly or Hemingway can highlight passive voice or unclear phrasing, but manual editing develops skill.
        </p>
      </section>

      <section className={styles.tipSection}>
        <h2 className={styles.tipTitle}>8. Keep a Legal Writing Journal</h2>
        <p>
          Record useful legal phrases, terminology, and feedback in a dedicated notebook to track your progress.
        </p>
      </section>
    </main>
  );
}
