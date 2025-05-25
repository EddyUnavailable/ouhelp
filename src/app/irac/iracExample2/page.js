// app/irac-examples/duty-of-care/page.js
import styles from '@/styles/irac.module.css';

export default function DutyOfCareIRAC() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>IRAC Example: Duty of Care in Negligence (UK Law)</h1>

      <section>
        <h2 className={styles.subtitle}>Issue</h2>
        <p>
          Does a manufacturer owe a duty of care to a consumer who did not purchase the product directly?
        </p>
      </section>

      <section>
        <h2 className={styles.subtitle}>Rule</h2>
        <p>
          In <em>Donoghue v Stevenson</em> [1932] AC 562, the House of Lords held that a manufacturer owes a duty of care
          to the ultimate consumer if it is reasonably foreseeable that failure to take care could cause harm. This
          case established the "neighbour principle": one must take reasonable care to avoid acts or omissions that
          could foreseeably injure their "neighbours" — people closely and directly affected by one’s actions.
        </p>
      </section>

      <section>
        <h2 className={styles.subtitle}>Application</h2>
        <p>
          Donoghue drank a bottle of ginger beer purchased by her friend. The bottle contained a decomposed snail,
          which she couldn’t have seen due to the opaque bottle. She became ill. Though she didn’t buy the drink herself,
          the court found it foreseeable that the manufacturer’s negligence could harm someone in her position.
        </p>
      </section>

      <section>
        <h2 className={styles.subtitle}>Conclusion</h2>
        <p>
          A manufacturer (Stevenson) did owe a duty of care to the consumer (Donoghue), despite there being no direct
          contract. This case laid the foundation for modern negligence law in the UK.
        </p>
      </section>

      <section>
        <h2 className={styles.subtitle}>Full Reference</h2>
        <p>
          <em>Donoghue v Stevenson</em> [1932] AC 562 (HL)
        </p>
      </section>
    </main>
  );
}
