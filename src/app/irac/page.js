import Link from 'next/link'; // Import Link for internal navigation
import styles from '@/styles/irac.module.css';

export default function IRAC() {
  return (
    <main className={styles.container}>
      {/* Main heading with clear, accessible title */}
      <h1 className={styles.title}>Using the IRAC Method for Legal Problem Questions</h1>
      <p className={styles.intro}>
        The IRAC (Issue, Rule, Application, Conclusion) method is a structured approach to legal analysis widely used in UK law to address problem questions. It provides a clear framework to organize arguments and ensure all relevant legal points are covered. Below, we explain the IRAC method and apply it to a theft scenario, with tips for effective legal writing.
      </p>

      {/* Section for IRAC Method Explanation */}
      <section className={styles.example}>
        <h2 className={styles.exampleTitle}>The IRAC Method</h2>
        <p className={styles.sectionContent}>
          The IRAC method helps law students and professionals systematically analyze legal problems. Each component focuses on a specific aspect of legal reasoning, ensuring clarity and coherence in your answers.
        </p>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Component</th>
              <th className={styles.th}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.td}><strong>Issue</strong></td>
              <td className={styles.td}>Identify the key legal question(s) raised by the scenario. Focus on the specific legal issue, not just the facts, to frame the analysis clearly.</td>
            </tr>
            <tr>
              <td className={styles.td}><strong>Rule</strong></td>
              <td className={styles.td}>State the relevant legal principles, statutes, or case law that apply to the issue. This establishes the legal framework for your analysis.</td>
            </tr>
            <tr>
              <td className={styles.td}><strong>Application</strong></td>
              <td className={styles.td}>Apply the legal rules to the facts of the case, analyzing how the law interacts with the specific circumstances. This is the core of your argument.</td>
            </tr>
            <tr>
              <td className={styles.td}><strong>Conclusion</strong></td>
              <td className={styles.td}>Summarize the outcome of your analysis, answering the legal issue and outlining the likely legal consequences or remedies.</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.tip}>
          <strong>Tip:</strong> Use the IRAC structure to ensure a logical flow in your answers. Practice identifying issues first, as this guides the rest of your analysis. For complex problems, you may need multiple IRACs to address distinct issues.
        </div>
      </section>

      {/* Section for Generic Theft Example */}
      <section className={styles.example}>
        <h2 className={styles.exampleTitle}>Example: Theft Liability</h2>
        <p className={styles.sectionContent}>
          Below is an IRAC analysis of a criminal law problem question involving a defendant charged with theft after taking items from a shop.
        </p>
        <p className={styles.sectionContent}>
          <strong>Scenario:</strong><br />
          On 1st May 2025, the defendant entered a shop, picked up a jacket worth £100, and left without paying. The defendant claims they believed the jacket was a free sample due to a misunderstanding about a promotional display. They have been charged with theft under the Theft Act 1968.
        </p>

        {/* Issue Section */}
        <h3 className={styles.sectionHeading}>Issue</h3>
        <p className={styles.sectionContent}>
          Can the defendant be convicted of theft under the Theft Act 1968 for taking the jacket on 1st May 2025, given their claim of believing it was a free sample?
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> State the issue as a precise legal question, identifying the parties, date, and specific offence. This focuses your analysis and mirrors real-world legal problem questions.
        </div>

        {/* Rule Section */}
        <h3 className={styles.sectionHeading}>Rule</h3>
        <p className={styles.sectionContent}>
          Under section 1 of the Theft Act 1968, theft is defined as the dishonest appropriation of property belonging to another with the intention of permanently depriving the other of it. The actus reus requires appropriation (s 3), property (s 4), and belonging to another (s 5). The mens rea requires dishonesty (s 2) and an intention to permanently deprive (s 6). Dishonesty is assessed using the test from <em>Ivey v Genting Casinos</em> [2017] UKSC 67, which considers (1) the defendant’s actual knowledge or belief about the facts and (2) whether their conduct was dishonest by the standards of ordinary reasonable people. A genuine belief in a legal right to the property (s 2(1)(a)) may negate dishonesty.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Clearly outline the legal rule, including statutory provisions and case law. Break down the elements of the offence (e.g., actus reus, mens rea) to guide your application.
        </div>

        {/* Application Section */}
        <h3 className={styles.sectionHeading}>Application</h3>
        <p className={styles.sectionContent}>
          The defendant’s act of taking the jacket constitutes appropriation under section 3, as they assumed the rights of the owner by removing it from the shop. The jacket is property (s 4) belonging to the shop (s 5). The key issue is whether the defendant acted dishonestly and intended to permanently deprive the shop of the jacket. The defendant claims they believed the jacket was a free sample due to a promotional display. If this belief was genuine, it may negate dishonesty under section 2(1)(a), as they believed they had a legal right to take it. However, under the <em>Ivey</em> test, the court will assess whether the defendant’s belief was reasonable and whether their conduct was dishonest by ordinary standards. If the promotional display was unclear, a jury might find the belief reasonable, negating dishonesty. Conversely, if evidence suggests the defendant knew payment was required, dishonesty and intention to permanently deprive are likely satisfied, supporting a theft conviction.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Systematically apply each element of the rule to the facts, addressing potential weaknesses (e.g., reasonableness of belief). Acknowledge alternative outcomes to show critical thinking.
        </div>

        {/* Conclusion Section */}
        <h3 className={styles.sectionHeading}>Conclusion</h3>
        <p className={styles.sectionContent}>
          If the defendant genuinely believed the jacket was a free sample and this belief was reasonable, they may not be convicted of theft due to a lack of dishonesty under section 2(1)(a) of the Theft Act 1968. However, if the court finds their belief unreasonable or their conduct dishonest by ordinary standards, they are likely to be convicted of theft, facing a potential fine or imprisonment.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Conclude by directly answering the issue and outlining potential outcomes (e.g., conviction vs. acquittal). Mention remedies or consequences to connect the analysis to practical legal implications.
        </div>

        {/* Reference Section */}
        <h4 className={styles.referenceHeading}>Full References</h4>
        <p className={styles.sectionContent}>
          <em>Ivey v Genting Casinos</em> [2017] UKSC 67.<br />
          Theft Act 1968, ss 1–6.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Use OSCOLA format for citations, including cases and statutes. Provide context for each reference to clarify its relevance to the rule or offence.
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
          <Link href="/irac-examples/trespass" className={styles.internalLink}>
            View Trespass to Land IRAC Example
          </Link>{' '}
          <Link href="/irac-examples/duty-of-care" className={styles.internalLink}>
            View Duty of Care IRAC Example
          </Link>{' '}
          <Link href="/irac-examples/dudley-stephens" className={styles.internalLink}>
            View Dudley and Stephens IRAC Example
          </Link>
        </p>
      </section>
    </main>
  );
}