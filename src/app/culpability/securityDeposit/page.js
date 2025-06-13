'use client';

import Link from 'next/link';
import styles from '@/styles/referencingGuide.module.css';

export default function TenancyDeposit() {
  return (
    <main className={styles.container} role="main">
      <h1 className={styles.title}>Tenancy Deposits in UK Law: Your Rights and Landlord Deductions</h1>

      {/* Table of Contents */}
      <nav className={styles.toc} aria-label="Table of Contents">
        <h2 className={styles.subtitle}>Contents</h2>
        <ul className={styles.tocList}>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#laws">Governing Laws</a></li>
          <li><a href="#deductions">Permitted Deductions</a></li>
          <li><a href="#prohibited">Prohibited Deductions</a></li>
          <li><a href="#tips">Practical Tips for Tenants</a></li>
          <li><a href="#references">References</a></li>
        </ul>
      </nav>

      {/* Introduction */}
      <section id="introduction" className={styles.section}>
        <p className={styles.intro}>
          If you’re moving home in England or Wales, understanding your rights regarding your tenancy deposit is crucial. UK law regulates how landlords handle deposits for assured shorthold tenancies (ASTs), ensuring protection and fair treatment. This guide outlines the key laws, what landlords can and cannot deduct from your deposit, and practical steps to secure your refund, with direct links to relevant legislation.
        </p>
      </section>

      {/* Governing Laws */}
      <section id="laws" className={styles.section}>
        <h2 className={styles.subtitle}>Governing Laws</h2>
        <p className={styles.sectionContent}>
          For ASTs starting on or after 6 April 2007, tenancy deposits are regulated by the following legislation:
        </p>
        <ul className={styles.referenceList}>
          <li>
            <strong>Housing Act 2004, ss 212–215:</strong> Requires landlords to protect deposits in a government-approved tenancy deposit protection (TDP) scheme within 30 days and provide prescribed information to tenants. Non-compliance prevents issuing a section 21 notice and may lead to penalties of 1–3 times the deposit amount.{' '}
            <a
              href="https://www.legislation.gov.uk/ukpga/2004/34/contents"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalLink}
            >
              View Housing Act 2004
            </a>[](https://www.legislation.gov.uk/ukpga/2004/34/contents)[](https://www.legislation.gov.uk/ukpga/2004/34/part/6/chapter/4)
          </li>
          <li>
            <strong>Localism Act 2011, s 184:</strong> Extended the deposit protection deadline from 14 to 30 days, effective from 6 April 2012, and applied retrospectively to 2007. It closed loopholes allowing late protection without penalties.{' '}
            <a
              href="https://www.legislation.gov.uk/ukpga/2011/20/contents"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalLink}
            >
              View Localism Act 2011
            </a>[](https://england.landlordsguild.com/article/localism-act-and-tenancy-deposit-schemes/)
          </li>
          <li>
            <strong>Tenant Fees Act 2019, s 3:</strong> Caps deposits at five weeks’ rent (or six weeks for annual rent above £50,000) and bans prohibited fees, such as automatic cleaning charges.{' '}
            <a
              href="https://www.legislation.gov.uk/ukpga/2019/4/contents"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalLink}
            >
              View Tenant Fees Act 2019
            </a>[](https://en.wikipedia.org/wiki/Tenancy_deposit_scheme_%28England_and_Wales%29)
          </li>
          <li>
            <strong>Housing (Tenancy Deposits) (Prescribed Information) Order 2007, SI 2007/797:</strong> Details the prescribed information landlords must provide, including scheme details, deposit amount, and dispute procedures, within 30 days.{' '}
            <a
              href="https://www.legislation.gov.uk/uksi/2007/797/contents"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalLink}
            >
              View Prescribed Information Order 2007
            </a>[](https://www.legislation.gov.uk/uksi/2007/797/article/2/made)[](https://www.legislation.gov.uk/uksi/2007/797/contents/made)
          </li>
        </ul>
        <p className={styles.sectionContent}>
          These laws ensure deposits are safeguarded and disputes are resolved fairly, typically through free alternative dispute resolution (ADR) offered by TDP schemes.
        </p>
      </section>

      {/* Permitted Deductions */}
      <section id="deductions" className={styles.section}>
        <h2 className={styles.subtitle}>Permitted Deductions</h2>
        <p className={styles.sectionContent}>
          Landlords can make reasonable deductions from your deposit for breaches of the tenancy agreement, supported by evidence like inventories or photos. The table below outlines common deductions:
        </p>
        <table className={styles.table} aria-label="Permitted Deductions from Tenancy Deposits">
          <thead>
            <tr>
              <th className={styles.th}>Reason</th>
              <th className={styles.th}>Description</th>
              <th className={styles.th}>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.td}>Unpaid Rent/Bills</td>
              <td className={styles.td}>Arrears for rent or utilities specified in the agreement.</td>
              <td className={styles.td}>Deducting £500 for two weeks’ unpaid rent.</td>
            </tr>
            <tr>
              <td className={styles.td}>Damage</td>
              <td className={styles.td}>Damage beyond fair wear and tear, including accidental damage.</td>
              <td className={styles.td}>£125 for a stained five-year-old carpet (proportionate cost).</td>
            </tr>
            <tr>
              <td className={styles.td}>Missing Items</td>
              <td className={styles.td}>Replacement of items listed in the inventory.</td>
              <td className={styles.td}>£20 for missing kitchen utensils.</td>
            </tr>
            <tr>
              <td className={styles.td}>Cleaning Costs</td>
              <td className={styles.td}>Costs to restore cleanliness to move-in condition.</td>
              <td className={styles.td}>£50 for professional cleaning due to stains.</td>
            </tr>
            <tr>
              <td className={styles.td}>Garden Maintenance</td>
              <td className={styles.td}>Neglect of garden upkeep as per agreement.</td>
              <td className={styles.td}>70% of £290 for overgrown lawn, adjusted for season.</td>
            </tr>
            <tr>
              <td className={styles.td}>Unauthorized Redecoration</td>
              <td className={styles.td}>Costs to restore unapproved changes.</td>
              <td className={styles.td}>£100 to repaint walls after unapproved painting.</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.tip}>
          <strong>Tip:</strong> Always request a detailed breakdown of deductions with evidence to ensure they are reasonable and proportionate.
        </div>
      </section>

      {/* Prohibited Deductions */}
      <section id="prohibited" className={styles.section}>
        <h2 className={styles.subtitle}>Prohibited Deductions</h2>
        <p className={styles.sectionContent}>
          Landlords cannot deduct for the following, as they are either unfair or prohibited by law:
        </p>
        <ul className={styles.referenceList}>
          <li><strong>Fair Wear and Tear:</strong> Normal deterioration, e.g., worn paint or frayed carpets, based on tenancy length and household size.</li>
          <li><strong>Betterment:</strong> Upgrades, e.g., replacing a worn carpet with a luxury one.</li>
          <li><strong>Landlord’s Repairs:</strong> Damage from unrepaired issues, e.g., a leak causing floor damage.</li>
          <li><strong>Re-letting Costs:</strong> Expenses for new tenants, e.g., new appliances for betterment.</li>
          <li><strong>Prohibited Fees:</strong> Charges banned under the Tenant Fees Act 2019, e.g., automatic cleaning fees.</li>[](https://en.wikipedia.org/wiki/Tenancy_deposit_scheme_%28England_and_Wales%29)
        </ul>
      </section>

      {/* Practical Tips */}
      <section id="tips" className={styles.section}>
        <h2 className={styles.subtitle}>Practical Tips for Tenants</h2>
        <ul className={styles.referenceList}>
          <li><strong>Request Deposit in Writing:</strong> Email your landlord when moving out, stating the tenancy end date and requesting the full deposit refund (e.g., “My tenancy at [address] ended on [date]. Please refund my £[amount] deposit within 10 days”).</li>
          <li><strong>Document Condition:</strong> Take date-stamped photos/videos of the property at move-out, covering all areas, and request a signed check-out inventory.</li>
          <li><strong>Create an Inventory:</strong> If no move-in inventory exists, draft one with photos/videos to document the property’s condition.</li>
          <li><strong>Clean Thoroughly:</strong> Restore the property to its move-in cleanliness to avoid deductions; consider professional cleaning if needed.</li>
          <li><strong>Verify Deposit Protection:</strong> Check your deposit’s status on the TDP scheme’s website (e.g., DPS, MyDeposits, TDS) using your postcode, surname, tenancy start date, and deposit amount.</li>
          <li><strong>Use ADR for Disputes:</strong> If deductions are disputed, use the TDP scheme’s free ADR service, submitting evidence like photos and inventories.</li>
          <li><strong>Know Your Rights:</strong> If the deposit is unprotected or prescribed information is missing, claim compensation (1–3 times the deposit) via the county court under s 214 of the Housing Act 2004.</li>[](https://england.shelter.org.uk/professional_resources/legal/costs_of_renting/tenancy_deposits/claims_against_landlords_for_non-compliance_with_deposit_protection_rules)
        </ul>
      </section>

      {/* References */}
      <section id="references" className={styles.section}>
        <h2 className={styles.subtitle}>References</h2>
        <p className={styles.sectionContent}>
          Housing Act 2004, ss 212–215. Available at: <a href="https://www.legislation.gov.uk/ukpga/2004/34/contents" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>legislation.gov.uk</a>.<br />
          Housing (Tenancy Deposits) (Prescribed Information) Order 2007, SI 2007/797. Available at: <a href="https://www.legislation.gov.uk/uksi/2007/797/contents" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>legislation.gov.uk</a>.<br />
          Localism Act 2011, s 184. Available at: <a href="https://www.legislation.gov.uk/ukpga/2011/20/contents" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>legislation.gov.uk</a>.<br />
          Tenant Fees Act 2019, s 3. Available at: <a href="https://www.legislation.gov.uk/ukpga/2019/4/contents" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>legislation.gov.uk</a>.<br />
          Pears, R. and Shields, G. (2022) <em>Cite Them Right: The Essential Referencing Guide</em>, 12th edn, London, Bloomsbury Academic.<br />
          Shelter England, ‘What can a landlord keep from your deposit?’ (16 July 2024). Available at: <a href="https://england.shelter.org.uk" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>england.shelter.org.uk</a>.<br />[](https://england.shelter.org.uk/professional_resources/legal/costs_of_renting/tenancy_deposits/tenancy_deposit_protection)
          Citizens Advice, ‘Getting your tenancy deposit back if you rent privately’ (no date). Available at: <a href="https://www.citizensadvice.org.uk" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>citizensadvice.org.uk</a>.
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