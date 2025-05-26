"use client"

import Link from 'next/link'; // Import Link for internal navigation
import styles from '@/styles/partsOfSpeech.module.css';

export default function ImproveWritingPage() {
  return (
    <main className={styles.container}>
      
      {/* Main heading with clear, accessible title */}
      <h1 className={styles.title}>Improving Legal Writing through Reading</h1>
      <p className={styles.intro}>
        Reading high-quality legal writing is a powerful way to enhance your skills as a law student or practitioner. By studying judgments, academic journals, and textbooks, you can absorb legal terminology, structured reasoning, and persuasive argumentation. This guide, tailored for UK legal contexts, provides strategies to maximize your reading’s impact on your writing, with practical tips and examples from landmark cases.
      </p>

      {/* Why Read Section */}
      <section className={styles.tipSection}>
        <h2 className={styles.tipTitle}>Why Read High-Quality Legal Writing?</h2>
        <p className={styles.sectionContent}>
          Engaging with authoritative legal texts helps you develop a professional legal voice and refine your analytical skills. Reading exposes you to:
        </p>
        <ul className={styles.resourceList}>
          <li>Legal terminology and precise vocabulary, as seen in <em>Donoghue v Stevenson</em> [1932] AC 562.</li>
          <li>Structured reasoning, such as the IRAC-like analysis in UK Supreme Court judgments.</li>
          <li>Application of law to facts, demonstrated in cases like <em>R v Brown</em> [1993] 2 All ER 75.</li>
          <li>Persuasive and authoritative writing styles that enhance your credibility.</li>
        </ul>
        <div className={styles.tip}>
          <strong>Tip:</strong> Read actively by noting how authors structure arguments and use legal terms. Apply these techniques to your own writing, such as in IRAC analyses. See our <Link href="/irac-examples" className={styles.internalLink}>IRAC Guide</Link>.
        </div>
      </section>

      {/* What to Read Section */}
      <section className={styles.tipSection}>
        <h2 className={styles.tipTitle}>What Should You Read?</h2>

        <h3 className={styles.sectionHeading}>1. Judgments from Higher UK Courts</h3>
        <p className={styles.sectionContent}>
          Focus on well-reasoned judgments from the UK Supreme Court, Court of Appeal, and High Court, available via <a href="https://www.bailii.org/" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>BAILII</a> or <a href="https://www.supremecourt.uk/decided-cases/" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>supremecourt.uk</a>. These cases model clarity, legal analysis, and citation practices.
        </p>
        <p className={styles.sectionContent}>
          <strong>Example Cases:</strong>
        </p>
        <ul className={styles.resourceList}>
          <li>
            <em>R v Brown</em> [1993] 2 All ER 75 (<a href="https://www.bailii.org/uk/cases/UKHL/1993/19.html" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>BAILII</a>) – Explores criminal law and consent, showcasing precise legal reasoning.
          </li>
          <li>
            <em>Donoghue v Stevenson</em> [1932] AC 562 (<a href="https://www.bailii.org/uk/cases/UKHL/1932/100.html" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>BAILII</a>) – Foundational tort law case with clear application of duty of care.
          </li>
          <li>
            <em>R v Dudley and Stephens</em> (1884) 14 QBD 273 DC – Demonstrates ethical and legal argumentation in criminal law.
          </li>
        </ul>
        <div className={styles.tip}>
          <strong>Tip:</strong> Start with landmark cases to understand foundational principles. Summarize their reasoning in your own words to practice legal writing.
        </div>

        <h3 className={styles.sectionHeading}>2. Academic Legal Journals & Textbooks</h3>
        <p className={styles.sectionContent}>
          Journals and textbooks offer in-depth analysis and polished writing. Recommended sources include:
        </p>
        <ul className={styles.resourceList}>
          <li><em>The Modern Law Review</em> – Rigorous articles on contemporary legal issues.</li>
          <li><em>Cambridge Law Journal</em> – Scholarly insights into UK law.</li>
          <li><em>Oxford Journal of Legal Studies</em> – Theoretical and practical legal scholarship.</li>
          <li><em>Law Quarterly Review</em> – Detailed case analyses and commentary.</li>
          <li><em>The English Legal System</em> by Gary Slapper and David Kelly – Comprehensive overview with clear writing.</li>
          <li><em>Legal Skills</em> by Emily Finch and Stefan Fafinski – Practical guide to legal writing and analysis.</li>
        </ul>
        <div className={styles.tip}>
          <strong>Tip:</strong> Access journals via university libraries or platforms like Westlaw. Focus on abstracts and introductions to grasp key arguments quickly.
        </div>
      </section>

      {/* Tips for Effective Reading Section */}
      <section className={styles.tipSection}>
        <h2 className={styles.tipTitle}>Tips for Effective Reading</h2>
        <p className={styles.sectionContent}>
          To maximize the benefits of reading legal texts, adopt active reading strategies:
        </p>
        <ul className={styles.resourceList}>
          <li><strong>Annotate Actively:</strong> Highlight key terms, legal principles, and persuasive phrases in judgments like <em>R v Brown</em>.</li>
          <li><strong>Summarize Judgments:</strong> Write concise summaries using IRAC to reinforce understanding and practice writing.</li>
          <li><strong>Study Citations:</strong> Observe OSCOLA referencing in journals to improve your citation skills.</li>
          <li><strong>Compare Styles:</strong> Note differences in tone between judgments (formal) and academic articles (analytical).</li>
          <li><strong>Reflect on Structure:</strong> Analyze how authors organize arguments, such as the logical flow in <em>Donoghue v Stevenson</em>.</li>
        </ul>
        <div className={styles.tip}>
          <strong>Tip:</strong> Keep a reading journal to track insights, phrases, and structures you can emulate in your writing. Review weekly to internalize lessons.
        </div>
      </section>

      {/* Interactive Exercise Section */}
      <section className={styles.tipSection}>
        <h2 className={styles.tipTitle}>Practice Summarizing a Case</h2>
        <p className={styles.sectionContent}>
          Summarize the key points of <em>R v Brown</em> [1993] 2 All ER 75 in 100 words or less, focusing on the legal issue, holding, and reasoning. Use the text area below to draft your summary.
        </p>
        <textarea
          placeholder="Enter your summary here..."
          className={styles.textarea}
          rows={5}
        />
        <button
          type="button"
          className={styles.button}
          onClick={() => alert('Sample summary: In R v Brown [1993] 2 All ER 75, the House of Lords addressed whether consent is a defence to sado-masochistic acts causing harm. The court held that consent is not a valid defence for acts causing bodily harm, as they violate public policy. The reasoning emphasized the need to protect societal values, despite the consensual nature of the acts.')}
        >
          View Sample Summary
        </button>
        <div className={styles.tip}>
          <strong>Tip:</strong> Structure your summary using IRAC principles: identify the issue, state the holding (rule), and summarize the reasoning (application). Practice with cases from our <Link href="/irac-examples" className={styles.internalLink}>IRAC Guide</Link>.
        </div>
      </section>

      {/* Resources Section */}
      <section className={styles.resources}>
        <h2 className={styles.tipTitle}>Additional Resources</h2>
        <ul className={styles.resourceList}>
          <li>Refine your writing with our <Link href="/legal-writing" className={styles.internalLink}>Legal Writing Guide</Link> and <Link href="/grammar/parts-of-speech" className={styles.internalLink}>Parts of Speech</Link> guide.</li>
          <li>Practice structured writing with IRAC examples: 
            <Link href="/irac-examples" className={styles.internalLink}>IRAC Guide</Link>, 
            <Link href="/irac-examples/trespass" className={styles.internalLink}>Trespass to Land</Link>, 
            <Link href="/irac-examples/duty-of-care" className={styles.internalLink}>Duty of Care</Link>, 
            <Link href="/irac-examples/dudley-stephens" className={styles.internalLink}>Dudley and Stephens</Link>.
          </li>
          <li>Access judgments at <a href="https://www.supremecourt.uk/decided-cases/" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>supremecourt.uk</a> or <a href="https://www.bailii.org/" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>BAILII</a>.</li>
          <li>Use the <a href="https://www.law.ox.ac.uk/oscola" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>OSCOLA guide</a> for accurate referencing.</li>
          <li>Read textbooks like <em>The English Legal System</em> by Gary Slapper and David Kelly or <em>Legal Skills</em> by Emily Finch and Stefan Fafinski.</li>
        </ul>
        <p className={styles.sectionContent}>
          {/* Note: Verify external links periodically, as URLs may change. */}
          Regularly read and summarize legal texts to build confidence and proficiency in legal writing.
        </p>
      </section>
    </main>
  );
}