
'use client';

import Link from 'next/link';
import styles from '@/styles/word.module.css';

export default function EffectAffect() {
  return (
    <main className={styles.container} role="main">
      <h1 className={styles.title}>Effect vs. Affect in UK Legal Writing</h1>

      {/* Table of Contents */}
      <nav className={styles.toc} aria-label="Table of Contents">
        <h2 className={styles.subtitle}>Contents</h2>
        <ul className={styles.tocList}>
          <li><a href="#definitions">Definitions and Grammatical Roles</a></li>
          <li><a href="#differences">Key Differences</a></li>
          <li><a href="#legal-context">Legal Context and Examples</a></li>
          <li><a href="#tips">Practical Tips for Legal Writing</a></li>
          <li><a href="#references">References</a></li>
        </ul>
      </nav>

      {/* Introduction */}
      <section id="intro" className={styles.section}>
        <p className={styles.intro}>
          In UK legal writing, <strong>effect</strong> and <strong>affect</strong> are frequently misused due to their similar meanings but distinct grammatical roles. This guide clarifies their definitions, usage, and significance in legal prose, drawing on principles from <em>Learning Legal Skills and Reasoning</em> (5th edn.) and UK legal texts. Proper use enhances clarity and professionalism in legal documents.
        </p>
      </section>

      {/* Definitions and Grammatical Roles */}
      <section id="definitions" className={styles.section}>
        <h2 className={styles.subtitle}>Definitions and Grammatical Roles</h2>

        <h3 className={styles.subheading}>Effect</h3>
        <p className={styles.sectionContent}>
          <strong>Definition:</strong> Effect is a noun referring to the result, outcome, or consequence of an action or event. In legal writing, it often describes the impact of a law, ruling, or action.
        </p>
        <p><strong>Example:</strong> “The effect of the court’s ruling was to reduce the defendant’s sentence” (<em>R v Woollin</em> [1999] 1 AC 82).</p>
        <p><strong>Grammatical Role:</strong> Noun, used as a subject, object, or complement.</p>
        <ul className={styles.list}>
          <li><strong>Subject:</strong> “The effect of the statute was significant.”</li>
          <li><strong>Object:</strong> “The court considered the effect of the precedent.”</li>
          <li><strong>Complement:</strong> “The issue was the effect of the new regulation.”</li>
        </ul>

        <h3 className={styles.subheading}>Affect</h3>
        <p className={styles.sectionContent}>
          <strong>Definition:</strong> Affect is a verb meaning to influence, alter, or impact something. In legal writing, it describes how an action or condition changes a legal outcome or party.
        </p>
        <p><strong>Example:</strong> “The defendant’s mental state did not affect the jury’s verdict” (<em>R v Byrne</em> [1960] 2 QB 396).</p>
        <p><strong>Grammatical Role:</strong> Verb, used in active or passive voice.</p>
        <ul className={styles.list}>
          <li><strong>Active:</strong> “The new law will affect sentencing guidelines.”</li>
          <li><strong>Passive:</strong> “The verdict was affected by new evidence.”</li>
        </ul>
      </section>

      {/* Key Differences */}
      <section id="differences" className={styles.section}>
        <h2 className={styles.subtitle}>Key Differences</h2>
        <p className={styles.sectionContent}>
          The table below summarizes the distinctions between effect and affect in UK legal writing:
        </p>
        <table className={styles.table} aria-label="Comparison of Effect and Affect">
          <thead>
            <tr>
              <th className={styles.th}>Aspect</th>
              <th className={styles.th}>Effect</th>
              <th className={styles.th}>Affect</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.td}><strong>Part of Speech</strong></td>
              <td className={styles.td}>Noun (outcome or result).</td>
              <td className={styles.td}>Verb (to influence or alter).</td>
            </tr>
            <tr>
              <td className={styles.td}><strong>Legal Context</strong></td>
              <td className={styles.td}>Describes results of laws or rulings (e.g., <em>R v Cunningham</em> [1957] 2 QB 396).</td>
              <td className={styles.td}>Describes influence on legal outcomes (e.g., Homicide Act 1957, s 2).</td>
            </tr>
            <tr>
              <td className={styles.td}><strong>Example</strong></td>
              <td className={styles.td}>“The effect of the ruling was a new precedent.”</td>
              <td className={styles.td}>“The evidence affected the court’s decision.”</td>
            </tr>
            <tr>
              <td className={styles.td}><strong>Practical Use</strong></td>
              <td className={styles.td}>Used to discuss consequences or impacts.</td>
              <td className={styles.td}>Used to describe actions causing change.</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.tip}>
          <strong>Tip:</strong> Use this table to choose between effect and affect when drafting legal arguments or analyzing case outcomes.
        </div>
      </section>

      {/* Legal Context and Examples */}
      <section id="legal-context" className={styles.section}>
        <h2 className={styles.subtitle}>Legal Context and Examples</h2>
        <p className={styles.sectionContent}>
          In UK legal writing, effect and affect are used precisely to maintain clarity:
        </p>
        <ul className={styles.list}>
          <li><strong>Effect:</strong> Common in discussing outcomes of judicial decisions or statutes, e.g., “The effect of <em>R v Woollin</em> [1999] 1 AC 82 was to clarify intent in murder cases.”</li>
          <li><strong>Affect:</strong> Used to describe influences on legal proceedings or outcomes, e.g., “The defendant’s diminished responsibility affected the charge under Homicide Act 1957, s 2” (<em>R v Byrne</em> [1960] 2 QB 396).</li>
        </ul>
        <p><strong>Example in Legal Writing:</strong> “The effect of the new evidence was to alter the case’s outcome, as it affected the jury’s perception of the defendant’s intent.”</p>
      </section>

      {/* Practical Tips */}
      <section id="tips" className={styles.section}>
        <h2 className={styles.subtitle}>Practical Tips for Legal Writing</h2>
        <ul className={styles.list}>
          <li>Use <strong>effect</strong> as a noun to describe outcomes, e.g., “The effect of the statute was clear.”</li>
          <li>Use <strong>affect</strong> as a verb to describe influence, e.g., “The ruling affected sentencing.”</li>
          <li>Check the part of speech by substituting: if “result” fits, use effect; if “influence” fits, use affect.</li>
          <li>Avoid confusion in formal writing by reviewing sentences for grammatical accuracy.</li>
          <li>Cite authoritative sources (e.g., <em>R v Cunningham</em> [1957] 2 QB 396) to contextualize usage.</li>
        </ul>
      </section>

      {/* References */}
      <section id="references" className={styles.section}>
        <h2 className={styles.subtitle}>References</h2>
        <p className={styles.sectionContent}>
          <em>R v Byrne</em> [1960] 2 QB 396.<br />
          <em>R v Cunningham</em> [1957] 2 QB 396.<br />
          <em>R v Woollin</em> [1999] 1 AC 82.<br />
          Homicide Act 1957, s 2 (as amended by Coroners and Justice Act 2009, s 52).<br />
          Hanson, S. (2020). <em>Learning Legal Skills and Reasoning</em> (5th edn.). Routledge.
        </p>
        <p className={styles.sectionContent}>
          For further guidance, see the{' '}
          <a
            href="https://www.law.ox.ac.uk/oscola"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.externalLink}
          >
            OSCOLA citation guide
          </a>.
          <Link href="/irac-guide" className={styles.internalLink}>
            View IRAC Guide
          </Link>
        </p>
      </section>
    </main>
  );
}
