// app/irac-examples/dudley-stephens/page.js
import styles from '@/styles/irac.module.css';

export default function DudleyStephensIRAC() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>IRAC Example: R v Dudley and Stephens (1884) 14 QBD 273 DC</h1>

      <h2 className={styles.subtitle}>Issue</h2>
      <p>
        Whether necessity can be used as a defence to a charge of murder when individuals kill another to save their own lives.
      </p>

      <h2 className={styles.subtitle}>Rule</h2>
      <p>
        The common law principle established in <em>R v Dudley and Stephens</em> (1884) is that necessity is not a defence to murder. The court held that no circumstances justify intentionally taking an innocent life, even to preserve one's own.
      </p>

      <h2 className={styles.subtitle}>Application</h2>
      <p>
        In this case, the defendants were stranded at sea without food or water for several days. Believing death was imminent, they killed and ate the weakest crew member (a young boy) to survive. The court acknowledged their dire circumstances but rejected the necessity defence, stating that it would set a dangerous precedent allowing individuals to judge the value of lives.
      </p>

      <h2 className={styles.subtitle}>Conclusion</h2>
      <p>
        The defendants were found guilty of murder. The ruling affirmed the principle that the defence of necessity does not apply to murder under English law.
      </p>

      <h2 className={styles.subtitle}>Has This Law Been Challenged?</h2>
      <p>
        While the principle from <em>Dudley and Stephens</em> remains a foundational rule, later cases have tested the limits of the necessity defence:
      </p>

      <ul className={styles.referenceList}>
        <li>
          <strong>Re A (Conjoined Twins) [2000]</strong>: The Court of Appeal allowed doctors to separate conjoined twins, knowing one would die. This case distinguished itself from <em>Dudley and Stephens</em> by emphasising the doctors' duty to act and prevent both deaths. Necessity was accepted here under extreme medical circumstances.
        </li>
        <li>
          <strong>R v Howe [1987] AC 417</strong>: The House of Lords confirmed that duress is not a defence to murder, reinforcing the idea that some justifications, including necessity or coercion, cannot excuse intentional killing.
        </li>
      </ul>

      <p>
        These cases clarify that while <em>Dudley and Stephens</em> set a strict standard, necessity may still apply in exceptional circumstances, particularly where professional duties (e.g. medical) are involved.
      </p>

      <h2 className={styles.subtitle}>Full References</h2>
      <ul className={styles.referenceList}>
        <li>R v Dudley and Stephens (1884) 14 QBD 273 DC.</li>
        <li>Re A (Conjoined Twins) [2000] EWCA Civ 254.</li>
        <li>R v Howe [1987] AC 417.</li>
      </ul>
    </main>
  );
}
