import Link from 'next/link'; // Import Link for internal navigation
import styles from '@/styles/irac.module.css';

export default function IRAC() {
  return (
    <main className={styles.container}>
      {/* Main heading with clear, accessible title */}
      <h1 className={styles.title}>Using the IRAC Method for Legal Problem Questions</h1>
      <p className={styles.intro}>
        The IRAC (Issue, Rule, Application, Conclusion) method is a structured approach to legal analysis widely used in UK law to address problem questions. It provides a clear framework to organize arguments and ensure all relevant legal points are covered. Below, we explain the IRAC method and apply it to a criminal law scenario involving diminished responsibility, with tips for effective legal writing.
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

      {/* Section for Sameera’s Case Example */}
      <section className={styles.example}>
        <h2 className={styles.exampleTitle}>Example: Sameera’s Criminal Liability</h2>
        <p className={styles.sectionContent}>
          Below is an IRAC analysis of a criminal law problem question involving Sameera, charged with murder but raising a defence of diminished responsibility due to her mental health history.
        </p>
        <p className={styles.sectionContent}>
          <strong>Scenario:</strong><br />
          Sameera, married to Ronnie for over 15 years with two daughters, stabbed him 20 times in the chest with a kitchen knife during breakfast on 1st May 2025, killing him. Sameera has a documented history of mental health problems and claims she cannot remember the stabbing but accepts responsibility for it. She has been charged with murder and is raising a defence of diminished responsibility.
        </p>

        {/* Issue Section */}
        <h3 className={styles.sectionHeading}>Issue</h3>
        <p className={styles.sectionContent}>
          Can Sameera successfully raise the defence of diminished responsibility to reduce her murder charge to manslaughter, given her mental health history, on 1st May 2025?
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> State the issue as a precise legal question, identifying the parties, date, and specific defence. This focuses your analysis and mirrors real-world legal problem questions.
        </div>

        {/* Rule Section */}
        <h3 className={styles.sectionHeading}>Rule</h3>
        <p className={styles.sectionContent}>
          Under UK law, murder is defined as the unlawful killing of a person with malice aforethought (intention to kill or cause grievous bodily harm). The partial defence of diminished responsibility, per section 2 of the Homicide Act 1957 (as amended by the Coroners and Justice Act 2009), allows a murder charge to be reduced to manslaughter if the defendant’s ability to: (1) understand the nature of their conduct, (2) form a rational judgment, or (3) exercise self-control was substantially impaired by an abnormality of mental functioning arising from a recognized medical condition. The burden is on the defendant to prove this defence on the balance of probabilities, often supported by medical evidence (see <em>R v Byrne</em> [1960] 2 QB 396; <em>R v Seers</em> [1984] Crim LR 351).
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Clearly outline the legal rule, including statutory provisions and case law. Break down the elements of the defence (e.g., abnormality, substantial impairment) to guide your application.
        </div>

        {/* Application Section */}
        <h3 className={styles.sectionHeading}>Application</h3>
        <p className={styles.sectionContent}>
          Sameera stabbed Ronnie 20 times, indicating an intention to kill or cause grievous bodily harm, meeting the actus reus and mens rea for murder. However, she raises diminished responsibility, claiming her mental health condition impaired her recollection of the act. Her documented history of mental health problems suggests a recognized medical condition, potentially an abnormality of mental functioning. The lack of memory and the excessive nature of the attack (20 stabs) may support substantial impairment of her ability to understand her actions or exercise self-control. However, medical expert testimony is critical to establish whether her condition meets the criteria under section 2 of the Homicide Act 1957. If the court accepts this evidence, the defence may succeed; otherwise, she risks a murder conviction.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Systematically apply each element of the rule to the facts, addressing potential weaknesses (e.g., need for medical evidence). Acknowledge alternative outcomes to show critical thinking.
        </div>

        {/* Conclusion Section */}
        <h3 className={styles.sectionHeading}>Conclusion</h3>
        <p className={styles.sectionContent}>
          If Sameera’s defence of diminished responsibility is supported by medical evidence proving substantial impairment due to an abnormality of mental functioning, her murder charge could be reduced to voluntary manslaughter under section 2 of the Homicide Act 1957. If the defence fails, she is likely to be convicted of murder, facing a mandatory life sentence.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Conclude by directly answering the issue and outlining potential outcomes (e.g., manslaughter vs. murder). Mention remedies or consequences to connect the analysis to practical legal implications.
        </div>

        {/* Reference Section */}
        <h4 className={styles.referenceHeading}>Full References</h4>
        <p className={styles.sectionContent}>
          <em>R v Byrne</em> [1960] 2 QB 396.<br />
          <em>R v Seers</em> [1984] Crim LR 351.<br />
          Homicide Act 1957, s 2 (as amended by Coroners and Justice Act 2009, s 52).
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Use OSCOLA format for citations, including cases and statutes. Provide context for each reference to clarify its relevance to the rule or defence.
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