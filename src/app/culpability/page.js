
'use client';

import Link from 'next/link';
import styles from '@/styles/word.module.css';

export default function Culpability() {
  return (
    <main className={styles.container} role="main">
      <h1 className={styles.title}>Culpability vs. Responsibility in UK Criminal Law</h1>

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
          In UK criminal law, <strong>culpability</strong> and <strong>responsibility</strong> are critical terms used to assess a defendant’s mental state and liability, particularly in offences like murder and manslaughter. While related, they have distinct meanings and applications. This guide, informed by <em>Complete Criminal Law</em> (8th edn.), explores their definitions, grammatical roles, legal significance, and practical use in legal writing.
        </p>
      </section>

      {/* Definitions and Grammatical Roles */}
      <section id="definitions" className={styles.section}>
        <h2 className={styles.subtitle}>Definitions and Grammatical Roles</h2>

        <h3 className={styles.subheading}>Culpability</h3>
        <p className={styles.sectionContent}>
          <strong>Definition:</strong> Culpability refers to the degree of blameworthiness or fault attributable to a defendant for a criminal act, focusing on their mental state (mens rea) and the circumstances of the offence. It determines the extent of moral or legal blame.
        </p>
        <p><strong>Example:</strong> “The defendant’s culpability was reduced due to lack of intent” (<em>R v Woollin</em> [1999] 1 AC 82).</p>
        <p><strong>Grammatical Role:</strong> A noun derived from “culpable,” used as a subject, object, or complement.</p>
        <ul className={styles.list}>
          <li><strong>Subject:</strong> “Culpability depends on the defendant’s foresight of harm.”</li>
          <li><strong>Object:</strong> “The court evaluated the defendant’s culpability.”</li>
          <li><strong>Complement:</strong> “Sentencing hinges on the degree of culpability.”</li>
        </ul>

        <h3 className={styles.subheading}>Responsibility</h3>
        <p className={styles.sectionContent}>
          <strong>Definition:</strong> Responsibility refers to a defendant’s accountability for a criminal act, emphasizing their capacity to be held liable, often tied to mental capacity or defences like diminished responsibility.
        </p>
        <p><strong>Example:</strong> “Diminished responsibility reduced the defendant’s liability from murder to manslaughter” (Homicide Act 1957, s 2).</p>
        <p><strong>Grammatical Role:</strong> A noun derived from “responsible,” used similarly as a subject, object, or complement.</p>
        <ul className={styles.list}>
          <li><strong>Subject:</strong> “Responsibility was contested due to the defendant’s mental impairment.”</li>
          <li><strong>Object:</strong> “The defence argued the defendant lacked responsibility.”</li>
          <li><strong>Complement:</strong> “The issue was whether responsibility could be established.”</li>
        </ul>
      </section>

      {/* Key Differences */}
      <section id="differences" className={styles.section}>
        <h2 className={styles.subtitle}>Key Differences</h2>
        <p className={styles.sectionContent}>
          The table below compares culpability and responsibility, highlighting their roles in UK criminal law:
        </p>
        <table className={styles.table} aria-label="Comparison of Culpability and Responsibility">
          <thead>
            <tr>
              <th className={styles.th}>Aspect</th>
              <th className={styles.th}>Culpability</th>
              <th className={styles.th}>Responsibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.td}><strong>Focus</strong></td>
              <td className={styles.td}>Blameworthiness and fault (mens rea, e.g., intent or recklessness).</td>
              <td className={styles.td}>Accountability and capacity to be held liable.</td>
            </tr>
            <tr>
              <td className={styles.td}><strong>Legal Context</strong></td>
              <td className={styles.td}>Mens rea, sentencing (e.g., <em>R v Cunningham</em> [1957] 2 QB 396).</td>
              <td className={styles.td}>Defences like diminished responsibility (Homicide Act 1957, s 2).</td>
            </tr>
            <tr>
              <td className={styles.td}><strong>Example</strong></td>
              <td className={styles.td}>“Recklessness indicates lower culpability than intent.”</td>
              <td className={styles.td}>“Diminished responsibility reduced liability to manslaughter.”</td>
            </tr>
            <tr>
              <td className={styles.td}><strong>Practical Use</strong></td>
              <td className={styles.td}>Guides sentencing and fault assessment.</td>
              <td className={styles.td}>Determines eligibility for partial defences.</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.tip}>
          <strong>Tip:</strong> Use the table to quickly distinguish between culpability and responsibility when analyzing cases or drafting legal arguments.
        </div>
      </section>

      {/* Legal Context and Examples */}
      <section id="legal-context" className={styles.section}>
        <h2 className={styles.subtitle}>Legal Context and Examples</h2>
        <p className={styles.sectionContent}>
          In <em>Complete Criminal Law</em> (8th edn.), culpability and responsibility are pivotal in analyzing offences and defences:
        </p>
        <ul className={styles.list}>
          <li><strong>Culpability:</strong> Used in mens rea discussions, e.g., distinguishing intent (<em>R v Woollin</em> [1999] 1 AC 82) from recklessness (<em>R v Cunningham</em> [1957] 2 QB 396). It influences sentencing severity.</li>
          <li><strong>Responsibility:</strong> Central to partial defences like diminished responsibility under section 2 of the Homicide Act 1957, where mental impairment reduces liability from murder to manslaughter (<em>R v Byrne</em> [1960] 2 QB 396).</li>
        </ul>
        <p><strong>Example in Legal Writing:</strong> “The defendant’s diminished responsibility (Homicide Act 1957, s 2) reduced their liability, lowering culpability from murder to manslaughter due to impaired mental functioning.”</p>
      </section>

      {/* Practical Tips */}
      <section id="tips" className={styles.section}>
        <h2 className={styles.subtitle}>Practical Tips for Legal Writing</h2>
        <ul className={styles.list}>
          <li>Use <strong>culpability</strong> when discussing fault or blame, e.g., in mens rea or sentencing arguments.</li>
          <li>Use <strong>responsibility</strong> when addressing liability or capacity, e.g., in defences like diminished responsibility.</li>
          <li>Cite cases or statutes (e.g., <em>R v Woollin</em> [1999] 1 AC 82) to ground your analysis in authority.</li>
          <li>Avoid interchangeable use in formal writing to maintain precision.</li>
          <li>Structure sentences to reflect the terms’ syntactic roles (subject, object, complement) for clarity.</li>
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
          Loveless, J., Allen, M., & Derry, C. (2023). <em>Complete Criminal Law</em> (8th edn.). Oxford University Press.
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


