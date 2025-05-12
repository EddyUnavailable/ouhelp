// app/legal-terms/page.js

import styles from '../styles/legalTerms.module.css';

export default function LegalTermsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Legal Terms: Everyday vs. Legal Meaning</h1>
      <p className={styles.intro}>
        The table below shows how certain terms differ in everyday use and in UK legal contexts. This is useful for law students and anyone reading or writing about legal topics.
      </p>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Word</th>
            <th>Everyday Meaning</th>
            <th>Legal Meaning (UK Law)</th>
            <th>Example (UK Law Context)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Negligence</td>
            <td>Carelessness or lack of attention</td>
            <td>A breach of a legal duty of care causing harm to another person (tort law)</td>
            <td>The defendant was found liable in negligence for failing to maintain safe premises.</td>
          </tr>
          <tr>
            <td>Consideration</td>
            <td>Thoughtfulness or kindness</td>
            <td>Something of value exchanged to make a contract binding</td>
            <td>A contract without consideration is not enforceable in English law.</td>
          </tr>
          <tr>
            <td>Liability</td>
            <td>A burden or disadvantage</td>
            <td>Legal responsibility for one’s acts or omissions</td>
            <td>The company accepted liability for the faulty product under consumer protection law.</td>
          </tr>
          <tr>
            <td>Assault</td>
            <td>Physical attack</td>
            <td>Any act causing the victim to fear immediate unlawful violence (even without touching)</td>
            <td>Raising a fist in a threatening manner can constitute assault in UK criminal law.</td>
          </tr>
          <tr>
            <td>Battery</td>
            <td>Power source device (e.g., AA battery)</td>
            <td>Unlawful physical contact with another person without consent</td>
            <td>The defendant committed battery by pushing the claimant during an argument.</td>
          </tr>
          <tr>
            <td>Tort</td>
            <td>N/A</td>
            <td>A civil wrong that causes a person to suffer loss or harm (e.g., negligence, defamation)</td>
            <td>Defamation is a type of tort in English civil law.</td>
          </tr>
          <tr>
            <td>Mens rea</td>
            <td>N/A</td>
            <td>The mental element (intention or recklessness) required for a crime</td>
            <td>Mens rea must be proven to secure a conviction for theft.</td>
          </tr>
          <tr>
            <td>Actus reus</td>
            <td>N/A</td>
            <td>The physical element of a criminal offence (the act itself)</td>
            <td>Without actus reus, there can be no criminal offence.</td>
          </tr>
          <tr>
            <td>Indictment</td>
            <td>A general accusation or criticism</td>
            <td>A formal accusation of a serious crime tried on indictment (e.g., murder)</td>
            <td>The Crown Court issued an indictment for armed robbery.</td>
          </tr>
          <tr>
            <td>Malice</td>
            <td>Spite or ill-will</td>
            <td>In law, may mean intention to do harm, or in defamation, knowledge of falsity</td>
            <td>The court considered whether there was malice in the libellous statement.</td>
          </tr>
          <tr>
            <td>Due diligence</td>
            <td>Making a sensible effort</td>
            <td>Reasonable steps taken to avoid harm or breach of duty, especially in business contexts</td>
            <td>The solicitor failed to carry out due diligence on the property title.</td>
          </tr>
          <tr>
            <td>Estoppel</td>
            <td>N/A</td>
            <td>A legal principle preventing a person from contradicting a previous claim or representation</td>
            <td>Proprietary estoppel arose when the claimant relied on the promise of inheritance.</td>
          </tr>
          <tr>
            <td>Remedy</td>
            <td>A cure or treatment</td>
            <td>The means by which a court enforces a right or compensates for a breach</td>
            <td>The court awarded damages as a remedy for the breach of contract.</td>
          </tr>
        </tbody>
      </table>

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
            <td>Often used to depersonalise legal statements and focus on the action or result.</td>
            <td>"The contract was signed" rather than "John signed the contract".</td>
          </tr>
          <tr>
            <td>Nominalisation</td>
            <td>Turning verbs into nouns to create abstract legal concepts.</td>
            <td>"Failure to comply" instead of "He failed to comply".</td>
          </tr>
          <tr>
            <td>Modal Verbs</td>
            <td>Used to express obligation, permission or probability.</td>
            <td>"Shall", "must", and "may" often appear in statutes and contracts.</td>
          </tr>
          <tr>
            <td>Formal Register</td>
            <td>Use of formal and impersonal language appropriate for legal contexts.</td>
            <td>"The parties hereto agree as follows..."</td>
          </tr>
          <tr>
            <td>Complex Sentences</td>
            <td>Long, multi-clause sentences used to specify conditions and exceptions.</td>
            <td>"If the tenant fails to pay rent within 14 days, the landlord may terminate the lease."</td>
          </tr>
          <tr>
            <td>Latin Terms</td>
            <td>Traditional Latin phrases used to describe legal principles.</td>
            <td>"Habeas corpus", "mens rea", "prima facie"</td>
          </tr>
          <tr>
            <td>Third Person Usage</td>
            <td>Use of third person to avoid direct reference and maintain objectivity.</td>
            <td>"The applicant must prove..." rather than "You must prove..."</td>
          </tr>
          <tr>
            <td>Legal Conditionals</td>
            <td>Use of conditional clauses to state hypothetical or dependent legal outcomes.</td>
            <td>"If the agreement is breached, the injured party may claim damages."</td>
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
            <td>Used to separate clauses or list complex items in legal writing.</td>
            <td>"The agreement covers: employment matters; intellectual property; and confidentiality."
            </td>
          </tr>
          <tr>
            <td>Colons</td>
            <td>Used to introduce lists, explanations, or quotations in legal texts.</td>
            <td>"The tenant shall: (a) pay rent on time; (b) maintain the property; and (c) report repairs."
            </td>
          </tr>
          <tr>
            <td>Parentheses</td>
            <td>Used to clarify or add supplementary information.</td>
            <td>"The claimant (Mr Smith) must appear before the court on Monday."
            </td>
          </tr>
          <tr>
            <td>Capitalisation</td>
            <td>Often used to emphasise defined legal terms or important parties.</td>
            <td>"The Agreement shall bind the Parties to the Contract."
            </td>
          </tr>
          <tr>
            <td>Enumerated Lists</td>
            <td>Use of numbered or lettered clauses to organise conditions and terms.</td>
            <td>"Clause 1(a), Clause 1(b), and Clause 1(c)..."</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
