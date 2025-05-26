import Link from 'next/link'; // Import Link for internal navigation
import styles from '@/styles/legalWriting.module.css';

export default function LegalWritingPage() {
  return (
    <main className={styles.container}>
      {/* Main heading with clear, accessible title */}
      <h1 className={styles.title}>Improving Your Legal Writing Skills</h1>
      <p className={styles.intro}>
        Legal writing is a critical skill for law students and practitioners, enabling clear communication of complex legal arguments. The tips below, tailored for UK legal contexts, will help you refine your writing, structure arguments effectively, and develop a professional legal voice. Each tip includes practical advice and examples to enhance your skills.
      </p>

      {/* Tip Sections */}
      <section className={styles.tipSection}>
        <h2 className={styles.tipTitle}>1. Master IRAC and Legal Structure</h2>
        <p className={styles.sectionContent}>
          The <strong>IRAC method</strong> (Issue, Rule, Application, Conclusion) provides a logical framework for structuring legal arguments, ensuring clarity and coherence. Practice applying IRAC to problem questions and case analyses to develop disciplined reasoning. For example, in <em>Donoghue v Stevenson</em> [1932] AC 562, IRAC can be used to analyze the duty of care issue systematically.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Practice IRAC with hypothetical scenarios or past exam questions. Break complex problems into multiple IRACs for clarity. See our <Link href="/irac-examples" className={styles.internalLink}>IRAC Guide</Link> for examples.
        </div>
      </section>

      <section className={styles.tipSection}>
        <h2 className={styles.tipTitle}>2. Read High-Quality Legal Writing</h2>
        <p className={styles.sectionContent}>
          Immerse yourself in judgments from UK higher courts (e.g., Supreme Court, Court of Appeal) and academic journals like the <em>Modern Law Review</em>. Analyze cases like <em>R v Dudley and Stephens</em> (1884) 14 QBD 273 DC for concise legal reasoning and persuasive style.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Annotate judgments to identify how judges structure arguments and use legal terminology. Focus on clarity and logic in landmark cases.
        </div>
      </section>

      <section className={styles.tipSection}>
        <h2 className={styles.tipTitle}>3. Use Clear, Concise Language</h2>
        <p className={styles.sectionContent}>
          Avoid unnecessary legalese and prioritize short sentences, precise vocabulary, and active voice. This enhances readability for judges, clients, or academics.
          <br /><br />
          <strong>Example:</strong><br />
          <span className={styles.exampleBad}>❌ “It is submitted that the defendant was not liable for the aforementioned breach.”</span><br />
          <span className={styles.exampleGood}>✅ “The defendant was not liable for the breach.”</span>
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Read your writing aloud to catch wordy phrases or passive voice. Replace vague terms (e.g., “aforementioned”) with specific references.
        </div>
      </section>

      <section className={styles.tipSection}>
        <h2 className={styles.tipTitle}>4. Practice Case Notes and Briefs</h2>
        <p className={styles.sectionContent}>
          Summarize cases like <em>Caparo Industries plc v Dickman</em> [1990] 2 AC 605 in your own words to improve analysis and recall. Structure summaries using IRAC to reinforce logical organization.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Write case notes regularly, focusing on key facts, issues, and holdings. Compare your summaries with peers to refine clarity and depth.
        </div>
      </section>

      <section className={styles.tipSection}>
        <h2 className={styles.tipTitle}>5. Seek Feedback</h2>
        <p className={styles.sectionContent}>
          Share essays, case notes, or problem answers with tutors, peers, or study groups. Request specific feedback on structure, clarity, and legal accuracy to identify areas for improvement.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Actively incorporate feedback by revising drafts. Ask for examples of strong legal writing to benchmark your progress.
        </div>
      </section>

      <section className={styles.tipSection}>
        <h2 className={styles.tipTitle}>6. Improve Your Referencing</h2>
        <p className={styles.sectionContent}>
          Accurate referencing is essential in legal writing. Use the OSCOLA (Oxford Standard for Citation of Legal Authorities) system for citing cases, statutes, and secondary sources. For example, cite <em>R v Byrne</em> [1960] 2 QB 396 correctly in your work.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Practice OSCOLA with tools like the <a href="https://www.law.ox.ac.uk/oscola" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>OSCOLA guide</a>. Double-check citations for accuracy and consistency.
        </div>
      </section>

      <section className={styles.tipSection}>
        <h2 className={styles.tipTitle}>7. Use Writing Tools Thoughtfully</h2>
        <p className={styles.sectionContent}>
          Tools like Grammarly or Hemingway can help identify passive voice, complex sentences, or grammatical errors. However, manual editing builds critical thinking and self-reliance in legal writing.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Use tools as a starting point, but review suggestions critically. Practice editing without tools to strengthen your writing instincts.
        </div>
      </section>

      <section className={styles.tipSection}>
        <h2 className={styles.tipTitle}>8. Keep a Legal Writing Journal</h2>
        <p className={styles.sectionContent}>
          Maintain a journal to record useful legal phrases (e.g., “reasonable foreseeability”), feedback from tutors, and common errors. This helps track progress and build a personalized resource.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Review your journal weekly to reinforce lessons learned. Include model sentences from cases like <em>Donoghue v Stevenson</em> to emulate professional style.
        </div>
      </section>

      {/* Resources Section */}
      <section className={styles.resources}>
        <h2 className={styles.exampleTitle}>Additional Resources</h2>
        <ul className={styles.resourceList}>
          <li>Explore IRAC examples to practice structured legal writing: 
            <Link href="/irac-examples" className={styles.internalLink}> IRAC Guide</Link>, 
            <Link href="/irac-examples/trespass" className={styles.internalLink}> Trespass to Land</Link>, 
            <Link href="/irac-examples/duty-of-care" className={styles.internalLink}> Duty of Care</Link>, 
            <Link href="/irac-examples/dudley-stephens" className={styles.internalLink}> Dudley and Stephens</Link>.
          </li>
          <li>Read UK Supreme Court judgments at <a href="https://www.supremecourt.uk/decided-cases/" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>supremecourt.uk</a> for exemplary legal writing.</li>
          <li>Use the <a href="https://www.law.ox.ac.uk/oscola" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>OSCOLA guide</a> for accurate referencing.</li>
          <li>Refer to textbooks like <em>Legal Skills</em> by Emily Finch and Stefan Fafinski for comprehensive writing guidance.</li>
        </ul>
        <p className={styles.sectionContent}>
          {/* Note: Verify external links periodically, as URLs may change. */}
          For further practice, apply these tips to hypothetical problem questions or real case analyses, and seek feedback to refine your skills.
        </p>
      </section>
    </main>
  );
}