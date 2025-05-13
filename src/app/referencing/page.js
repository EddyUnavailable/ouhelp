// app/referencing-guide/page.js
import styles from '../styles/referencingGuide.module.css';

export default function Referencing() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        Referencing in Law Studies: Why It Matters and How to Do It
      </h1>

      <p>
        Referencing is a fundamental aspect of academic work—especially in law. It ensures you credit the sources of ideas, arguments, and evidence you use, while also demonstrating the depth of your research. Most importantly, it upholds academic integrity by helping you avoid plagiarism.
      </p>

      <p>
        At the Open University (OU), more emphasis is placed on the <strong>“why”</strong> of referencing than the <strong>“how.”</strong> Understanding <em>why</em> we reference builds good academic habits and supports the development of legal reasoning and writing. This is discussed in <strong>Section 8.1</strong> of your Law Undergraduate Guide (LUG). The technical formatting—the <em>how</em>—is covered in <strong>Section 8.2</strong>.
      </p>

      <p>
        The OU uses a referencing system based on <strong>Cite Them Right (CTR)</strong>, an online resource available through the OU Library. It is adapted for law modules to support clear and consistent legal referencing.
      </p>

      <p>
        A <strong>downloadable Quick Guide</strong> to Cite Them Right Referencing for Law Modules is also available via the OU Library. This is a practical tool that covers the most common citation formats you&rsquo;ll need and may be more useful day-to-day than the full CTR website.
      </p>

      <p>
        If you encounter a referencing issue not covered by the LUG or the Quick Guide, the OU offers a pragmatic approach: <strong>“It does not matter.”</strong> The key principle is <em>clarity and consistency</em>, not perfection.
      </p>

      <p>
        Developing referencing skills is part of becoming a legal thinker. In your written work, aim to demonstrate that:
      </p>
      <ul className={styles.referenceList}>
        <li>You have been <strong>consistent</strong> in your use of references throughout your work.</li>
        <li>You have provided <strong>enough information</strong> for the reader to locate your sources easily.</li>
        <li>You have made a <strong>genuine effort</strong> to follow the <em>Cite Them Right</em> style.</li>
      </ul>

      <h2 className={styles.subtitle}>Examples of Legal Referencing (Using CTR Style)</h2>

      <p><strong>In-text citation (legislation):</strong><br />
        The Human Rights Act 1998 incorporates the European Convention on Human Rights into UK law.
      </p>

      <p><strong>Full reference:</strong><br />
        Human Rights Act 1998, c.42.
      </p>

      <p><strong>In-text citation (book):</strong><br />
        As Slapper and Kelly explain, legal principles evolve alongside societal values (Slapper and Kelly, 2020).
      </p>

      <p><strong>Full reference:</strong><br />
        Slapper, G. and Kelly, D. (2020) <em>The English Legal System</em>, 20th edn, Abingdon, Routledge.
      </p>

      <p><strong>In-text citation (multiple sources):</strong><br />
        The presumption of innocence remains a fundamental principle in criminal law, reinforced through both statute and case law (Ashworth, 2019; Human Rights Act 1998, s.3).
      </p>

      <p><strong>Full references:</strong><br />
        Ashworth, A. (2019) <em>Principles of Criminal Law</em>, 9th edn, Oxford, Oxford University Press.<br />
        Human Rights Act 1998, c.42.
      </p>
    </main>
  );
}
