import Link from 'next/link'; // Import Link for potential internal navigation
import styles from '@/styles/irac.module.css';

export default function DudleyStephensIRAC() {
  return (
    <main className={styles.container}>
      {/* Main heading with clear, accessible title */}
      <h1 className={styles.title}>IRAC Method: Necessity Defence in R v Dudley and Stephens (UK Law)</h1>
      <p className={styles.intro}>
        The IRAC (Issue, Rule, Application, Conclusion) method is a structured approach to legal analysis widely used in UK law to solve hypothetical scenarios. Below is an example applying IRAC to the defence of necessity in <em>R v Dudley and Stephens</em>, with tips for effective legal writing and analysis.
      </p>

      {/* Section for Dudley and Stephens Example */}
      <section className={styles.example}>
        <h2 className={styles.exampleTitle}>Example: Necessity Defence in Murder</h2>

        {/* Issue Section */}
        <h3 className={styles.sectionHeading}>Issue</h3>
        <p className={styles.sectionContent}>
          Can the defence of necessity be used to justify murder when individuals, such as Dudley and Stephens in July 1884, kill another to save their own lives?
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Frame the issue as a specific legal question, identifying the parties and context (e.g., date or scenario). This focuses the analysis and aligns with problem-based questions in legal education.
        </div>

        {/* Rule Section */}
        <h3 className={styles.sectionHeading}>Rule</h3>
        <p className={styles.sectionContent}>
          In <em>R v Dudley and Stephens</em> (1884) 14 QBD 273 DC, the court held that necessity is not a defence to murder under English common law. The principle is that no circumstances, even extreme survival situations, justify intentionally taking an innocent life. The court emphasized that allowing necessity as a defence would create a dangerous precedent, undermining the sanctity of life. This ruling has been reinforced by cases like <em>R v Howe</em> [1987] AC 417, which similarly rejected duress as a defence to murder. However, limited exceptions have emerged in specific contexts, such as medical necessity (e.g., <em>Re A (Conjoined Twins)</em> [2000] EWCA Civ 254).
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Clearly state the rule and its scope, citing primary sources (e.g., case law). Include related cases to show the rule’s development or exceptions, enhancing the depth of your analysis.
        </div>

        {/* Application Section */}
        <h3 className={styles.sectionHeading}>Application</h3>
        <p className={styles.sectionContent}>
          In <em>R v Dudley and Stephens</em>, the defendants, Dudley and Stephens, were stranded at sea without food or water for several days in July 1884. Facing imminent death, they killed and consumed the weakest crew member, a young cabin boy, to survive. The act was intentional, and the victim was innocent, with no consent or threat justifying the killing. The court acknowledged the extreme circumstances but rejected necessity, reasoning that individuals cannot judge whose life is more valuable. This aligns with the principle that the sanctity of life takes precedence, and no legal authority supported an exception for survival-driven murder.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Apply the rule systematically to the facts, addressing each element (e.g., intentional act, innocent victim). Consider counterarguments (e.g., survival instinct) to demonstrate critical thinking, but show why they fail under the law.
        </div>

        {/* Conclusion Section */}
        <h3 className={styles.sectionHeading}>Conclusion</h3>
        <p className={styles.sectionContent}>
          Dudley and Stephens were guilty of murder, as necessity does not provide a defence to murder under English law, per <em>R v Dudley and Stephens</em> (1884) 14 QBD 273 DC. The court sentenced them to death, though this was later commuted to six months’ imprisonment, reflecting some judicial sympathy for their plight but upholding the legal principle.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Conclude by directly answering the issue and summarizing the outcome. Mention remedies or consequences (e.g., sentencing) to connect the analysis to practical legal outcomes.
        </div>

        {/* Developments and Challenges Section */}
        <h3 className={styles.sectionHeading}>Has This Law Been Challenged?</h3>
        <p className={styles.sectionContent}>
          The principle from <em>R v Dudley and Stephens</em> remains a cornerstone of English law, but later cases have tested the necessity defence’s limits:
        </p>
        <ul className={styles.resourceList}>
          <li>
            <strong>Re A (Conjoined Twins) [2000] EWCA Civ 254</strong>: The Court of Appeal permitted doctors to separate conjoined twins, knowing one would die, distinguishing this from <em>Dudley and Stephens</em>. The decision was based on medical necessity and the doctors’ duty to minimize harm, not personal survival.
          </li>
          <li>
            <strong>R v Howe [1987] AC 417</strong>: The House of Lords reaffirmed that duress, like necessity, is not a defence to murder, reinforcing the strict approach to intentional killing.
          </li>
        </ul>
        <p className={styles.sectionContent}>
          These cases show that while <em>Dudley and Stephens</em> sets a strict standard, necessity may apply in exceptional circumstances, particularly involving professional duties (e.g., medical decisions).
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Discussing related cases or developments shows how the law evolves. Use precise citations and explain distinctions to strengthen your analysis.
        </div>

        {/* Reference Section */}
        <h4 className={styles.referenceHeading}>Full References</h4>
        <p className={styles.sectionContent}>
          <em>R v Dudley and Stephens</em> (1884) 14 QBD 273 DC.<br />
          <em>Re A (Conjoined Twins)</em> [2000] EWCA Civ 254.<br />
          <em>R v Howe</em> [1987] AC 417 (HL).
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Use OSCOLA format for citations, ensuring consistency. Provide brief context for each case to clarify its relevance to the main rule.
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
          <Link href="/irac-examples/duty-of-care" className={styles.internalLink}>
            View Duty of Care IRAC Example
          </Link>{' '}
          <Link href="/irac-examples/trespass" className={styles.internalLink}>
            View Trespass to Land IRAC Example
          </Link>
        </p>
      </section>
    </main>
  );
}