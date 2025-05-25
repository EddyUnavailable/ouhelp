import styles from '@/styles/irac.module.css';

export default function IRACExamples() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>IRAC Examples in UK Law</h1>

      <section className={styles.example}>
        <h2>Example: Trespass to Land</h2>

        <h3>Issue</h3>
        <p>Did Alex commit trespass when he entered Jamie's fenced garden without permission?</p>

        <h3>Rule</h3>
        <p>Under UK law, trespass to land occurs when a person intentionally enters land that is in possession of another without lawful justification (Entick v Carrington (1765) 19 St Tr 1029).</p>

        <h3>Application</h3>
        <p>Alex entered Jamie’s fenced garden despite a visible "Private Property" sign. He was not invited nor had legal authority. His entry was voluntary and unjustified.</p>

        <h3>Conclusion</h3>
        <p>Alex likely committed trespass to land under UK common law.</p>

        <h4>Full reference:</h4>
        <p>Entick v Carrington (1765) 19 St Tr 1029.</p>
      </section>
    </main>
  );
}
