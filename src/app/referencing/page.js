// app/referencing-guide/page.js
import styles from '../styles/referencingGuide.module.css';

export default function referencing() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Referencing in Law Studies: Why It Matters and How to Do It</h1>

      <p>Referencing is a vital part of all academic work, especially in the study of Law. It allows you to credit the sources of ideas, arguments, and evidence that you use, while also demonstrating the depth and quality of your research. More importantly, it helps maintain academic integrity by avoiding plagiarism.</p>

      <p>At the Open University (OU), more emphasis is placed on the <strong>‘why’</strong> of referencing than the <strong>‘how’</strong>. Understanding <em>why</em> we reference helps build good academic habits and supports the development of legal reasoning and writing. This is explained in <strong>Section 8.1</strong> of your Law Undergraduate Guide (LUG). The <em>how</em>—the technical formatting of citations and references—is covered in <strong>Section 8.2</strong>.</p>

      <p>The OU uses a referencing system based on <strong>Cite Them Right (CTR)</strong>, an online resource available through the OU Library. This system is specifically adapted for your law modules to support clear and consistent legal referencing.</p>

      <p>For ease of use, a <strong>downloadable and printable Quick Guide to Cite Them Right Referencing for Law Modules</strong> is available on the OU Library website. This guide simplifies the most common citation formats you will need. In many cases, you’ll find this guide more practical than the full online resource.</p>

      <p>If you encounter a referencing issue that isn’t covered by either the LUG or the Quick Guide, the OU’s guidance is pragmatic: <strong>‘It does not matter.’</strong> The key principle is clarity and consistency—not perfection.</p>

      <p>Developing referencing skills is part of becoming a legal thinker. In your written work, you should aim to show that:</p>
      <ul>
        <li>You have been <strong>consistent</strong> in your use of references throughout the work.</li>
        <li>You have provided <strong>enough information</strong> to allow the reader to find your sources easily.</li>
        <li>You have made a <strong>genuine effort</strong> to follow the style outlined in <em>Cite Them Right</em>.</li>
      </ul>

      <h2 className={styles.subtitle}>Example of Legal Referencing (Using CTR style):</h2>

      <p><strong>In-text citation (for legislation):</strong><br />
        The Human Rights Act 1998 incorporates the European Convention on Human Rights into UK law.
      </p>

      <p><strong>Full reference:</strong><br />
        Human Rights Act 1998, c.42.
      </p>

      <p><strong>In-text citation (for books):</strong><br />
        As Slapper and Kelly explain, legal principles evolve alongside societal values (Slapper and Kelly, 2020).
      </p>

      <p><strong>Full reference:</strong><br />
        Slapper, G. and Kelly, D. (2020) <em>The English Legal System</em>, 20th edn, Abingdon, Routledge.
      </p>
    </main>
  );
}
