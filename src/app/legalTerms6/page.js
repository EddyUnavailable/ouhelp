// app/legal-terms/page.js

import styles from '../styles/legalTerms.module.css';

export default function LegalTermsPage6() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Legal Grammar Features</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Passive Voice</td>
            <td>Commonly used to depersonalise statements and emphasise the action or outcome rather than the actor.</td>
            <td>&ldquo;The contract was signed&rdquo; rather than &ldquo;John signed the contract.&rdquo;</td>
          </tr>
          <tr>
            <td>Nominalisation</td>
            <td>The transformation of verbs into nouns to convey abstract legal concepts.</td>
            <td>&ldquo;Failure to comply&rdquo; instead of &ldquo;He failed to comply.&rdquo;</td>
          </tr>
          <tr>
            <td>Modal Verbs</td>
            <td>Used to express obligation, permission, or likelihood.</td>
            <td>&ldquo;Shall,&rdquo; &ldquo;must,&rdquo; and &ldquo;may&rdquo; frequently appear in statutes and contracts.</td>
          </tr>
          <tr>
            <td>Formal Register</td>
            <td>The use of formal, impersonal language appropriate for legal documents.</td>
            <td>&ldquo;The parties hereto agree as follows...&rdquo;</td>
          </tr>
          <tr>
            <td>Complex Sentences</td>
            <td>Lengthy, multi-clause sentences used to outline specific conditions or exceptions.</td>
            <td>&ldquo;If the tenant fails to pay rent within 14 days, the landlord may terminate the lease.&rdquo;</td>
          </tr>
          <tr>
            <td>Latin Terms</td>
            <td>Traditional Latin phrases that encapsulate legal doctrines or principles.</td>
            <td>&ldquo;Habeas corpus,&rdquo; &ldquo;mens rea,&rdquo; &ldquo;prima facie&rdquo;</td>
          </tr>
          <tr>
            <td>Third-Person Usage</td>
            <td>Legal writing typically uses third-person references to maintain objectivity.</td>
            <td>&ldquo;The applicant must prove...&rdquo; instead of &ldquo;You must prove...&rdquo;</td>
          </tr>
          <tr>
            <td>Legal Conditionals</td>
            <td>Conditional clauses used to express hypothetical or contingent outcomes in legal contexts.</td>
            <td>&ldquo;If the agreement is breached, the injured party may claim damages.&rdquo;</td>
          </tr>
          <tr>
            <td>Compound Sentences</td>
            <td>Sentences that include multiple clauses to precisely specify obligations or outcomes.</td>
            <td>&ldquo;If the lessee fails to pay rent within 14 days, the landlord may terminate the lease by written notice.&rdquo;</td>
          </tr>
          <tr>
            <td>Archaic Terms</td>
            <td>Older, sometimes Latin-based terms that remain in use in formal legal writing.</td>
            <td><em>&ldquo;Hereinafter,&rdquo; &ldquo;aforesaid,&rdquo; &ldquo;inter alia,&rdquo; &ldquo;notwithstanding&rdquo;</em></td>
          </tr>
          <tr>
            <td>Precision of Terms</td>
            <td>Deliberate repetition or the use of defined terms rather than pronouns to avoid ambiguity.</td>
            <td>&ldquo;The Buyer shall deliver the goods. The Buyer shall also provide a receipt.&rdquo; (not &ldquo;They shall provide...&rdquo;)</td>
          </tr>
          <tr>
            <td>Subjunctive Mood</td>
            <td>Used to express hypothetical scenarios or situations contrary to fact.</td>
            <td>&ldquo;If the defendant <strong>be</strong> found guilty...&rdquo;</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.subtitle}>Legal Punctuation and Sentence Structures</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Semicolons</td>
            <td>Used to separate related clauses or to list complex elements clearly.</td>
            <td>&ldquo;The agreement covers: employment matters; intellectual property; and confidentiality.&rdquo;</td>
          </tr>
          <tr>
            <td>Colons</td>
            <td>Introduce lists, explanations, or quotations in legal drafting.</td>
            <td>&ldquo;The tenant shall: (a) pay rent on time; (b) maintain the property; and (c) report repairs.&rdquo;</td>
          </tr>
          <tr>
            <td>Parentheses</td>
            <td>Used to clarify or include supplementary details.</td>
            <td>&ldquo;The claimant (Mr Smith) must appear before the court on Monday.&rdquo;</td>
          </tr>
          <tr>
            <td>Capitalisation</td>
            <td>Used to denote defined terms or legally significant parties/entities.</td>
            <td>&ldquo;The Agreement shall bind the Parties to the Contract.&rdquo;</td>
          </tr>
          <tr>
            <td>Enumerated Lists</td>
            <td>Use of numbered or lettered items to organise terms systematically.</td>
            <td>&ldquo;Clause 1(a), Clause 1(b), and Clause 1(c)...&rdquo;</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
