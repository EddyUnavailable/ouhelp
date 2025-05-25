import styles from '@/styles/irac.module.css';

export default function IRACExamples() {
  return (
    <main className={styles.container}>
      {/* Main heading with clear, accessible title */}
      <h1 className={styles.title}>IRAC Method: Examples in UK Law</h1>
      <p className={styles.intro}>
        The IRAC (Issue, Rule, Application, Conclusion) method is a structured approach to legal analysis widely used in UK law to solve hypothetical scenarios. Below is an example demonstrating how to apply IRAC to a trespass to land case, with tips for effective legal writing.
      </p>

      {/* Section for Trespass to Land Example */}
      <section className={styles.example}>
        <h2 className={styles.exampleTitle}>Example: Trespass to Land</h2>

        {/* Issue Section */}
        <h3 className={styles.sectionHeading}>Issue</h3>
        <p className={styles.sectionContent}>
          Did Alex commit trespass to land by entering Jamie’s fenced garden without permission on 15th May 2025?
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Clearly state the legal issue as a question, focusing on the specific act and parties involved. Including a date adds context and realism to the scenario, which is useful for law students practicing hypothetical questions.
        </div>

        {/* Rule Section */}
        <h3 className={styles.sectionHeading}>Rule</h3>
        <p className={styles.sectionContent}>
          Under UK common law, trespass to land occurs when a person intentionally or negligently enters or remains on land in the possession of another without lawful justification. The key elements are: (1) intentional or negligent entry, (2) land in possession of another, and (3) lack of lawful authority or consent (see <em>Entick v Carrington</em> [1765] 19 St Tr 1029). The claimant need not prove damage, as trespass is actionable per se. Additionally, a visible sign (e.g., “Private Property”) can indicate lack of implied consent.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> When stating the rule, cite primary sources (e.g., case law or statutes) and break down the legal test into clear elements. This helps structure your application and ensures all relevant points are addressed.
        </div>

        {/* Application Section */}
        <h3 className={styles.sectionHeading}>Application</h3>
        <p className={styles.sectionContent}>
          Alex entered Jamie’s fenced garden on 15th May 2025, despite a visible “Private Property” sign. The garden is enclosed and clearly in Jamie’s possession, satisfying the requirement of land owned by another. Alex’s entry was voluntary, as there is no evidence suggesting it was accidental, fulfilling the intentional entry element. The “Private Property” sign indicates a lack of implied consent, and Alex had no legal authority (e.g., statutory right or invitation) to enter. Therefore, all elements of trespass to land are met.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> In the application, systematically apply each element of the rule to the facts. Use clear, concise language and avoid speculation. If facts are ambiguous, acknowledge this and consider alternative arguments (e.g., potential defenses like necessity).
        </div>

        {/* Conclusion Section */}
        <h3 className={styles.sectionHeading}>Conclusion</h3>
        <p className={styles.sectionContent}>
          Based on the facts and applicable law, Alex likely committed trespass to land under UK common law by entering Jamie’s garden without permission. Jamie could seek remedies such as an injunction or nominal damages, as no actual harm is required.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> The conclusion should directly answer the issue, summarizing the findings. Mention potential remedies or next steps to show practical implications, which is especially helpful for students learning to think like practitioners.
        </div>

        {/* Reference Section */}
        <h4 className={styles.referenceHeading}>Full Reference</h4>
        <p className={styles.sectionContent}>
          <em>Entick v Carrington</em> [1765] 19 St Tr 1029.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Always provide full citations for cases or statutes in a consistent format (e.g., OSCOLA). Including a brief explanation of the case’s significance (e.g., establishing trespass as actionable per se) can enhance understanding.
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className={styles.resources}>
        <h2 className={styles.exampleTitle}>Further Tips for Using IRAC</h2>
        <ul className={styles.resourceList}>
          <li>Practice breaking down complex legal problems into smaller issues to address multiple IRACs if needed.</li>
          <li>Use headings and subheadings to improve readability and structure your analysis logically.</li>
          <li>Anticipate counterarguments or defenses in the application section to demonstrate critical thinking.</li>
          <li>Refer to authoritative sources like case law, statutes, or academic commentary to strengthen your rule section.</li>
          <li>Keep your writing concise but comprehensive, avoiding unnecessary jargon.</li>
        </ul>
        <p>
          For more guidance on legal writing, consider resources like the <a href="https://www.law.ox.ac.uk/oscola

" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>OSCOLA citation guide</a> or textbooks such as <em>Learning Legal Skills and Reasoning</em> by Sharon Hanson.
        </p>
      </section>
    </main>
  );
}