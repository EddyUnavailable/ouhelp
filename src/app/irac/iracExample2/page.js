import Link from 'next/link'; // Import Link for potential internal navigation
import styles from '@/styles/irac.module.css';

export default function DutyOfCareIRAC() {
  return (
    <main className={styles.container}>
      {/* Main heading with clear, accessible title */}
      <h1 className={styles.title}>IRAC Method: Duty of Care in Negligence (UK Law)</h1>
      <p className={styles.intro}>
        The IRAC (Issue, Rule, Application, Conclusion) method is a structured approach to legal analysis widely used in UK law to solve hypothetical scenarios. Below is an example demonstrating how to apply IRAC to a duty of care case in negligence, with tips for effective legal writing.
      </p>

      {/* Section for Duty of Care Example */}
      <section className={styles.example}>
        <h2 className={styles.exampleTitle}>Example: Duty of Care in Negligence</h2>

        {/* Issue Section */}
        <h3 className={styles.sectionHeading}>Issue</h3>
        <p className={styles.sectionContent}>
          Does a manufacturer owe a duty of care to a consumer who did not directly purchase the product, such as in the case of Mrs. Donoghue on 26th May 1928?
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Frame the issue as a precise legal question, identifying the parties and context (e.g., date or specific scenario). This helps focus the analysis and mirrors real-world legal problem questions.
        </div>

        {/* Rule Section */}
        <h3 className={styles.sectionHeading}>Rule</h3>
        <p className={styles.sectionContent}>
          In <em>Donoghue v Stevenson</em> [1932] AC 562 (HL), the House of Lords established that a manufacturer owes a duty of care to the ultimate consumer if it is reasonably foreseeable that negligence could cause harm. This case introduced the “neighbour principle”: one must take reasonable care to avoid acts or omissions that could foreseeably injure persons closely and directly affected by those actions. The key elements for establishing a duty of care are: (1) foreseeability of harm, (2) proximity between the parties, and (3) fairness, justice, and reasonableness in imposing the duty (later refined in <em>Caparo Industries plc v Dickman</em> [1990] 2 AC 605).
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Clearly outline the legal rule, including all elements of the test, and cite authoritative cases or statutes. Mentioning subsequent cases (e.g., <em>Caparo</em>) shows how the law has evolved, enhancing the depth of your analysis.
        </div>

        {/* Application Section */}
        <h3 className={styles.sectionHeading}>Application</h3>
        <p className={styles.sectionContent}>
          In <em>Donoghue v Stevenson</em>, Mrs. Donoghue consumed ginger beer purchased by her friend on 26th May 1928. The opaque bottle contained a decomposed snail, causing her illness. The manufacturer, Stevenson, could reasonably foresee that negligence in production (e.g., failing to inspect bottles) could harm consumers like Donoghue, satisfying foreseeability. Proximity existed, as Donoghue was a consumer using the product as intended, closely affected by the manufacturer’s actions. Imposing a duty was fair, just, and reasonable, as manufacturers should ensure product safety for all end users, regardless of direct purchase. Thus, all elements of a duty of care were met, despite no contractual relationship.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Apply each element of the rule systematically to the facts, addressing foreseeability, proximity, and fairness. Acknowledge potential counterarguments (e.g., lack of contract) to demonstrate critical thinking.
        </div>

        {/* Conclusion Section */}
        <h3 className={styles.sectionHeading}>Conclusion</h3>
        <p className={styles.sectionContent}>
          The manufacturer, Stevenson, owed a duty of care to Mrs. Donoghue, despite her not purchasing the product directly, as established in <em>Donoghue v Stevenson</em> [1932] AC 562. This case laid the foundation for modern negligence law in the UK, enabling Donoghue to pursue remedies such as damages for her illness.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Summarize how the rule and application resolve the issue. Mention potential remedies (e.g., damages) to connect the analysis to practical outcomes, which is valuable for legal practice.
        </div>

        {/* Reference Section */}
        <h4 className={styles.referenceHeading}>Full Reference</h4>
        <p className={styles.sectionContent}>
          <em>Donoghue v Stevenson</em> [1932] AC 562 (HL).<br />
          <em>Caparo Industries plc v Dickman</em> [1990] 2 AC 605 (HL).
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Use a consistent citation format like OSCOLA for all references. Including related cases (e.g., <em>Caparo</em>) strengthens your analysis and provides context for the rule’s development.
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className={styles.resources}>
        <h2 className={styles.exampleTitle}>Further Tips for Using IRAC</h2>
        <ul className={styles.resourceList}>
          <li>Break down complex legal problems into smaller issues to address multiple IRACs if needed.</li>
          <li>Use clear headings and subheadings to enhance readability and structure your analysis logically.</li>
          <li>Address potential defenses or counterarguments in the application to show critical thinking.</li>
          <li>Cite authoritative sources (e.g., cases, statutes, or academic commentary) to support your rule section.</li>
          <li>Write concisely but comprehensively, avoiding unnecessary legal jargon.</li>
        </ul>
        <p>
          For more guidance on legal writing, visit the{' '}
          <a
            href="https://www.law.ox.ac.uk/oscola"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.externalLink}
          >
            OSCOLA citation guide
          </a>{' '}
          provided by the University of Oxford’s Faculty of Law or refer to textbooks such as <em>Learning Legal Skills and Reasoning</em> by Sharon Hanson.{' '}
          {/* Note: Verify external links periodically, as URLs may change. */}
          {/* Example internal link for additional examples */}
          {/* <Link href="/irac-examples/trespass" className={styles.internalLink}>
            View Trespass to Land IRAC Example
          </Link> */}
        </p>
      </section>
    </main>
  );
}