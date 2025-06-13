'use client';

import Link from 'next/link';
import styles from '@/styles/referencingGuide.module.css';

export default function Referencing() {
  return (
    <main className={styles.container} role="main">
      <h1 className={styles.title}>Referencing in Law Studies: Why It Matters and How to Do It</h1>

      {/* Table of Contents */}
      <nav className={styles.toc} aria-label="Table of Contents">
        <h2 className={styles.subtitle}>Contents</h2>
        <ul className={styles.tocList}>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#why-reference">Why Reference?</a></li>
          <li><a href="#ctr-style">Cite Them Right Style</a></li>
          <li><a href="#examples">Referencing Examples</a></li>
          <li><a href="#brackets">Square vs. Round Brackets</a></li>
          <li><a href="#sample">Sample Referenced Paragraph</a></li>
          <li><a href="#tips">Practical Tips</a></li>
          <li><a href="#references">References</a></li>
        </ul>
      </nav>

      {/* Introduction */}
      <section id="introduction" className={styles.section}>
        <p className={styles.intro}>
          Referencing is a cornerstone of academic legal writing in the UK, ensuring proper attribution of ideas, arguments, and evidence. It demonstrates research depth, supports legal reasoning, and upholds academic integrity by preventing plagiarism. This guide explores the importance of referencing, the use of <em>Cite Them Right</em> (CTR) style in law, and practical techniques for accurate citations.
        </p>
      </section>

      {/* Why Reference? */}
      <section id="why-reference" className={styles.section}>
        <h2 className={styles.subtitle}>Why Reference?</h2>
        <p className={styles.sectionContent}>
          Referencing serves several critical purposes in law studies:
        </p>
        <ul className={styles.referenceList}>
          <li><strong>Academic Integrity:</strong> Crediting sources avoids plagiarism and respects intellectual property.</li>
          <li><strong>Evidence of Research:</strong> Citations show engagement with authoritative sources, such as cases, statutes, and academic texts.</li>
          <li><strong>Supporting Arguments:</strong> References ground legal reasoning in established principles, enhancing credibility.</li>
          <li><strong>Traceability:</strong> Clear citations allow readers to locate and verify sources, fostering transparency.</li>
        </ul>
        <div className={styles.tip}>
          <strong>Tip:</strong> Prioritize understanding the purpose of referencing to build strong academic habits, focusing on clarity and consistency over perfection.
        </div>
      </section>

      {/* Cite Them Right Style */}
      <section id="ctr-style" className={styles.section}>
        <h2 className={styles.subtitle}>Cite Them Right Style</h2>
        <p className={styles.sectionContent}>
          UK law studies commonly use the <em>Cite Them Right</em> (CTR) referencing system, adapted for legal sources. CTR provides standardized formats for citing cases, statutes, books, and journal articles, ensuring consistency in legal writing. Access CTR guidelines through academic libraries or the official <a href="https://www.citethemrightonline.com" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>Cite Them Right website</a>.
        </p>
        <p className={styles.sectionContent}>
          Key principles of CTR for law include:
        </p>
        <ul className={styles.referenceList}>
          <li><strong>Clarity:</strong> Provide enough detail for readers to locate the source.</li>
          <li><strong>Consistency:</strong> Apply the same format throughout your work.</li>
          <li><strong>Accuracy:</strong> Reflect the exact details of the source, including publication year and case report citation.</li>
        </ul>
      </section>

      {/* Referencing Examples */}
      <section id="examples" className={styles.section}>
        <h2 className={styles.subtitle}>Referencing Examples (CTR Style)</h2>
        <p className={styles.sectionContent}><strong>Legislation (In-text):</strong><br />
          The Human Rights Act 1998 incorporates the European Convention on Human Rights into UK law.
        </p>
        <p className={styles.sectionContent}><strong>Full Reference:</strong><br />
          Human Rights Act 1998, c 42.
        </p>
        <p className={styles.sectionContent}><strong>Case Law (In-text):</strong><br />
          The principle of oblique intent was clarified in <em>R v Woollin</em> [1999] 1 AC 82.
        </p>
        <p className={styles.sectionContent}><strong>Full Reference:</strong><br />
          R v Woollin [1999] 1 AC 82.
        </p>
        <p className={styles.sectionContent}><strong>Book (In-text):</strong><br />
          Legal principles evolve with societal values (Slapper and Kelly, 2020).
        </p>
        <p className={styles.sectionContent}><strong>Full Reference:</strong><br />
          Slapper, G. and Kelly, D. (2020) <em>The English Legal System</em>, 20th edn, Abingdon, Routledge.
        </p>
        <p className={styles.sectionContent}><strong>Journal Article (In-text):</strong><br />
          The separation of powers is central to UK constitutional law (Elliott, 2018).
        </p>
        <p className={styles.sectionContent}><strong>Full Reference:</strong><br />
          Elliott, M. (2018) ‘The Supreme Court’s judgment in Miller’, <em>Public Law</em>, pp 256–267.
        </p>
        <p className={styles.sectionContent}><strong>Multiple Sources (In-text):</strong><br />
          The presumption of innocence is reinforced by statute and case law (Ashworth, 2019; <em>R v Byrne</em> [1960] 2 QB 396).
        </p>
        <p className={styles.sectionContent}><strong>Full References:</strong><br />
          Ashworth, A. (2019) <em>Principles of Criminal Law</em>, 9th edn, Oxford, Oxford University Press.<br />
          R v Byrne [1960] 2 QB 396.
        </p>
      </section>

      {/* Square vs. Round Brackets */}
      <section id="brackets" className={styles.section}>
        <h2 className={styles.subtitle}>Square vs. Round Brackets in Case Citations</h2>
        <p className={styles.sectionContent}>
          Case citations use <strong>square brackets [ ]</strong> or <strong>round brackets ( )</strong> based on the law report’s structure:
        </p>
        <ul className={styles.referenceList}>
          <li><strong>Square Brackets [ ]:</strong> Indicate the year is essential to locate the case, as the report series restarts numbering annually. Example: <em>R (Evans) v Attorney General [2015] UKSC 21</em> – The year [2015] identifies the specific case in the UK Supreme Court reports.</li>
          <li><strong>Round Brackets ( ):</strong> Used when the volume number identifies the case, with the year as context. Example: <em>Smith v Jones (2001) 75 Cr App R 60</em> – Volume 75 of the Criminal Appeal Reports is sufficient to find the case.</li>
        </ul>
        <div className={styles.tip}>
          <strong>Tip:</strong> Always replicate the brackets as they appear in the law report to ensure accuracy.
        </div>
      </section>

      {/* Sample Referenced Paragraph */}
      <section id="sample" className={styles.section}>
        <h2 className={styles.subtitle}>Sample Referenced Paragraph</h2>
        <p className={styles.sectionContent}>
          The right to environmental information has evolved through UK law, shaped by statute and judicial interpretation. The <em>Environmental Information Regulations 2004</em> establish the framework for public access to environmental data. In <em>R (Evans) v Attorney General [2015] UKSC 21</em>, the Supreme Court ruled that the executive cannot override judicial decisions without clear statutory authority, reinforcing open justice (Evans, 2015). This decision has been seen as a milestone in upholding the separation of powers (Elliott and Thomas, 2017; Loveless et al., 2023).
        </p>
        <p className={styles.sectionContent}><strong>Full References:</strong><br />
          R (Evans) v Attorney General [2015] UKSC 21.<br />
          Elliott, M. and Thomas, R. (2017) <em>Public Law</em>, 3rd edn, Oxford, Oxford University Press.<br />
          Environmental Information Regulations 2004, SI 2004/3391.<br />
          Loveless, J., Allen, M., and Derry, C. (2023) <em>Complete Criminal Law</em>, 8th edn, Oxford, Oxford University Press.
        </p>
      </section>

      {/* Practical Tips */}
      <section id="tips" className={styles.section}>
        <h2 className={styles.subtitle}>Practical Tips for Legal Referencing</h2>
        <ul className={styles.referenceList}>
          <li><strong>Use Primary Sources:</strong> Cite original cases or statutes (e.g., <em>R v Woollin</em> [1999] 1 AC 82) over secondary summaries for accuracy.</li>
          <li><strong>Organize References:</strong> Maintain a reference list or use citation management tools like Zotero to track sources.</li>
          <li><strong>Check Formatting:</strong> Verify punctuation, italics, and bracket usage against CTR examples to ensure precision.</li>
          <li><strong>Pinpoint Citations:</strong> Include specific paragraphs or pages (e.g., [2015] UKSC 21 at [45]) for precise referencing.</li>
          <li><strong>Avoid Over-Citation:</strong> Cite only what supports your argument, balancing depth with conciseness.</li>
          <li><strong>Review for Consistency:</strong> Ensure all citations follow the same style, including abbreviations and case names.</li>
          <li><strong>Consult CTR Regularly:</strong> Use the CTR website or printed guide for less common sources like EU law or international treaties.</li>
        </ul>
      </section>

      {/* References */}
      <section id="references" className={styles.section}>
        <h2 className={styles.subtitle}>References</h2>
        <p className={styles.sectionContent}>
          Ashworth, A. (2019) <em>Principles of Criminal Law</em>, 9th edn, Oxford, Oxford University Press.<br />
          Elliott, M. (2018) ‘The Supreme Court’s judgment in Miller’, <em>Public Law</em>, pp 256–267.<br />
          Elliott, M. and Thomas, R. (2017) <em>Public Law</em>, 3rd edn, Oxford, Oxford University Press.<br />
          Environmental Information Regulations 2004, SI 2004/3391.<br />
          Human Rights Act 1998, c 42.<br />
          Loveless, J., Allen, M., and Derry, C. (2023) <em>Complete Criminal Law</em>, 8th edn, Oxford, Oxford University Press.<br />
          Pears, R. and Shields, G. (2022) <em>Cite Them Right: The Essential Referencing Guide</em>, 12th edn, London, Bloomsbury Academic.<br />
          R (Evans) v Attorney General [2015] UKSC 21.<br />
          R v Byrne [1960] 2 QB 396.<br />
          R v Woollin [1999] 1 AC 82.<br />
          Slapper, G. and Kelly, D. (2020) <em>The English Legal System</em>, 20th edn, Abingdon, Routledge.
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
          </a> or{' '}
          <a
            href="https://www.citethemrightonline.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.externalLink}
          >
            Cite Them Right
          </a>.
          <Link href="/irac-guide" className={styles.internalLink}>
            View IRAC Guide
          </Link>
        </p>
      </section>
    </main>
  );
}