'use client';

import Link from 'next/link';
import styles from '@/styles/referencingGuide.module.css';

export default function RentArrears() {
  return (
    <main className={styles.container} role="main">
      <h1 className={styles.title}>Rent Arrears in UK Law: Interest and Repayment Options</h1>

      {/* Table of Contents */}
      <nav className={styles.toc} aria-label="Table of Contents">
        <h2 className={styles.subtitle}>Contents</h2>
        <ul className={styles.tocList}>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#laws">Governing Laws</a></li>
          <li><a href="#interest">Can You Be Charged Interest?</a></li>
          <li><a href="#repayment">Offering a Repayment Plan</a></li>
          <li><a href="#tips">Practical Tips for Tenants</a></li>
          <li><a href="#references">References</a></li>
        </ul>
      </nav>

      {/* Introduction */}
      <section id="introduction" className={styles.section}>
        <p className={styles.intro}>
          Failing to pay rent in an assured shorthold tenancy (AST) in England or Wales can lead to interest charges and legal action, but tenants can negotiate repayment plans to clear arrears. This guide outlines the UK laws governing rent arrears, whether landlords can charge interest, and how to propose a set amount to settle debts, with practical advice for tenants facing financial difficulties.
        </p>
      </section>

      {/* Governing Laws */}
      <section id="laws" className={styles.section}>
        <h2 className={styles.subtitle}>Governing Laws</h2>
        <p className={styles.sectionContent}>
          Rent arrears for ASTs are regulated by the following legislation:
        </p>
        <ul className={styles.referenceList}>
          <li>
            <strong>Housing Act 1988, ss 8–9, Sch 2:</strong> Allows landlords to seek possession for unpaid rent under Grounds 8, 10, or 11, and courts may suspend possession if tenants propose repayment plans.{' '}
            <a
              href="https://www.legislation.gov.uk/ukpga/1988/50/contents"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalLink}
            >
              View Housing Act 1988
            </a>
          </li>
          <li>
            <strong>Tenant Fees Act 2019, s 3:</strong> Ensures charges like interest on arrears are reasonable and stipulated in the tenancy agreement.{' '}
            <a
              href="https://www.legislation.gov.uk/ukpga/2019/4/contents"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalLink}
            >
              View Tenant Fees Act 2019
            </a>
          </li>
          <li>
            <strong>Consumer Rights Act 2015, s 62:</strong> Requires tenancy agreement terms, including interest clauses, to be fair and transparent.{' '}
            <a
              href="https://www.legislation.gov.uk/ukpga/2015/15/contents"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalLink}
            >
              View Consumer Rights Act 2015
            </a>
          </li>
          <li>
            <strong>Debt Respite Scheme (Breathing Space Moratorium and Mental Health Crisis Moratorium) (England and Wales) Regulations 2020, SI 2020/1311:</strong> Provides a 60-day moratorium on creditor action, including interest accrual, for tenants in financial hardship seeking debt advice.{' '}
            <a
              href="https://www.legislation.gov.uk/uksi/2020/1311/contents"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalLink}
            >
              View Debt Respite Scheme Regulations 2020
            </a>
          </li>
        </ul>
      </section>

      {/* Can You Be Charged Interest? */}
      <section id="interest" className={styles.section}>
        <h2 className={styles.subtitle}>Can You Be Charged Interest?</h2>
        <p className={styles.sectionContent}>
          Landlords can charge interest on unpaid rent if specified in the tenancy agreement. The table below compares key aspects of interest charges:
        </p>
        <table className={styles.table} aria-label="Interest on Rent Arrears">
          <thead>
            <tr>
              <th className={styles.th}>Aspect</th>
              <th className={styles.th}>Details</th>
              <th className={styles.th}>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.td}>Legal Basis</td>
              <td className={styles.td}>Must be in the tenancy agreement; governed by Consumer Rights Act 2015, s 62.</td>
              <td className={styles.td}>Clause: “3% above Bank of England base rate (4.75%) on rent 14 days late.”</td>
            </tr>
            <tr>
              <td className={styles.td}>Rate</td>
              <td className={styles.td}>Typically 2–4% above base rate, calculated daily.</td>
              <td className={styles.td}>7.75% annual interest on £1,000 = £6.46/month.</td>
            </tr>
            <tr>
              <td className={styles.td}>Limits</td>
              <td className={styles.td}>Must be reasonable; excessive rates may be unfair (Tenant Fees Act 2019, s 3).</td>
              <td className={styles.td}>20% interest could be challenged as unfair.</td>
            </tr>
            <tr>
              <td className={styles.td}>Consequences</td>
              <td className={styles.td}>Non-payment may lead to eviction (Housing Act 1988, s 8) or CCJ.</td>
              <td className={styles.td}>£1,000 arrears + interest pursued in court.</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.tip}>
          <strong>Tip:</strong> Check your tenancy agreement for an interest clause and verify the rate is reasonable to avoid unfair charges.
        </div>
      </section>

      {/* Offering a Repayment Plan */}
      <section id="repayment" className={styles.section}>
        <h2 className={styles.subtitle}>Offering a Repayment Plan</h2>
        <p className={styles.sectionContent}>
          You can propose a set amount to clear rent arrears, which landlords may accept to avoid legal action. Key points include:
        </p>
        <ul className={styles.referenceList}>
          <li><strong>Negotiation:</strong> Offer a realistic plan (e.g., £200/month for 6 months to clear £1,200) in writing, supported by evidence of income.</li>
          <li><strong>Formal Agreement:</strong> Document the plan, signed by both parties, including any interest accrued.</li>
          <li><strong>Legal Support:</strong> Courts may suspend eviction if you show commitment to a repayment plan (Housing Act 1988, s 9).</li>
          <li><strong>Breathing Space:</strong> Apply for a 60-day moratorium under the Debt Respite Scheme Regulations 2020 to pause interest and action while seeking debt advice.</li>
        </ul>
        <p className={styles.sectionContent}>
          <strong>Example:</strong> “I propose to pay £200/month for 6 months to clear £1,200 arrears, starting 1 July 2025, based on my current income” (Shelter England, 2024).
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Formalize repayment agreements in writing and seek advice from Citizens Advice if the landlord refuses.
        </div>
      </section>

      {/* Practical Tips */}
      <section id="tips" className={styles.section}>
        <h2 className={styles.subtitle}>Practical Tips for Tenants</h2>
        <ul className={styles.referenceList}>
          <li><strong>Review Tenancy Agreement:</strong> Check for interest clauses and ensure rates comply with the Consumer Rights Act 2015.</li>
          <li><strong>Propose a Plan Early:</strong> Offer a repayment plan before arrears escalate, e.g., “£150/month for 8 months to clear £1,200.”</li>
          <li><strong>Document Communications:</strong> Use email or certified letters to propose plans and keep records of landlord responses.</li>
          <li><strong>Seek Breathing Space:</strong> Contact a debt adviser to apply for a 60-day moratorium if facing financial hardship.</li>
          <li><strong>Pay What You Can:</strong> Make partial payments to show good faith, reducing arrears even if the landlord rejects your plan.</li>
          <li><strong>Challenge Unfair Interest:</strong> Dispute excessive rates via mediation or court, citing Tenant Fees Act 2019.</li>
          <li><strong>Get Legal Advice:</strong> Consult Shelter England or Citizens Advice if facing eviction or a CCJ for arrears.</li>
        </ul>
      </section>

      {/* References */}
      <section id="references" className={styles.section}>
        <h2 className={styles.subtitle}>References</h2>
        <p className={styles.sectionContent}>
          Consumer Rights Act 2015, s 62. Available at: <a href="https://www.legislation.gov.uk/ukpga/2015/15/contents" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>legislation.gov.uk</a>.<br />
          Debt Respite Scheme (Breathing Space Moratorium and Mental Health Crisis Moratorium) (England and Wales) Regulations 2020, SI 2020/1311. Available at: <a href="https://www.legislation.gov.uk/uksi/2020/1311/contents" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>legislation.gov.uk</a>.<br />
          Housing Act 1988, ss 8–9, Sch 2. Available at: <a href="https://www.legislation.gov.uk/ukpga/1988/50/contents" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>legislation.gov.uk</a>.<br />
          Tenant Fees Act 2019, s 3. Available at: <a href="https://www.legislation.gov.uk/ukpga/2019/4/contents" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>legislation.gov.uk</a>.<br />
          Pears, R. and Shields, G. (2022) <em>Cite Them Right: The Essential Referencing Guide</em>, 12th edn, London, Bloomsbury Academic.<br />
          Shelter England, ‘Rent arrears’ (13 May 2024). Available at: <a href="https://england.shelter.org.uk" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>england.shelter.org.uk</a>.<br />
          Citizens Advice, ‘Dealing with rent arrears’ (no date). Available at: <a href="https://www.citizensadvice.org.uk" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>citizensadvice.org.uk</a>.
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
          </Link>{' '}
          <Link href="/tenancy-deposit" className={styles.internalLink}>
            View Tenancy Deposit Guide
          </Link>
        </p>
      </section>
    </main>
  );
}