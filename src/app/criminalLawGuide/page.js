import styles from '@/styles/guide.module.css';

export default function CriminalLawGuide() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Guide to Finding All UK Criminal Law Acts</h1>

      <div className={styles.section}>
        <h2 className={styles.heading}>Introduction</h2>
        <p>
          UK criminal law is not codified in a single document but is spread across statutes, common law, and secondary legislation.
          This guide explains how to identify relevant primary legislation forming UK criminal law.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>1. Access Legislation.gov.uk</h2>
        <ul className={styles.list}>
          <li>
            Visit: <a className={styles.link} href="https://www.legislation.gov.uk" target="_blank">legislation.gov.uk</a>
          </li>
          <li>Use keywords like “criminal”, “offences”, “justice”, or offense types like “theft”.</li>
          <li>Filter by “Acts of Parliament” and jurisdiction.</li>
          <li>Use “Changes to Legislation” to ensure the Act is up to date.</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>2. Categorize Criminal Law Areas</h2>
        <p>Search by categories such as:</p>
        <ul className={styles.list}>
          <li>Offenses Against the Person</li>
          <li>Property Crimes</li>
          <li>Sexual Offenses</li>
          <li>Public Order and Safety</li>
          <li>Drug-Related Offenses</li>
          <li>Terrorism and National Security</li>
          <li>Cybercrime</li>
          <li>Financial and Organized Crime</li>
          <li>Criminal Justice and Procedure</li>
          <li>Specialized Offenses</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>3. Include Common Law Offenses</h2>
        <ul className={styles.list}>
          <li>Examples: Murder, manslaughter, conspiracy.</li>
          <li>
            Sources: <a className={styles.link} href="https://www.bailii.org" target="_blank">BAILII</a>, Westlaw, LexisNexis, legal textbooks.
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>4. Track Amendments and Repeals</h2>
        <ul className={styles.list}>
          <li>Check if Acts are amended or repealed.</li>
          <li>
            Example: <a className={styles.link} href="https://www.legislation.gov.uk/ukpga/2020/17/contents/enacted" target="_blank">Sentencing Act 2020</a>
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>5. Consult Legal Resources</h2>
        <ul className={styles.list}>
          <li>Books: Smith, Hogan & Ormerod; Archbold.</li>
          <li>Databases: Westlaw, LexisNexis, Halsbury’s.</li>
          <li>
            Government: <a className={styles.link} href="https://www.gov.uk/government/organisations/ministry-of-justice" target="_blank">MoJ</a>, <a className={styles.link} href="https://www.cps.gov.uk/" target="_blank">CPS</a>
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>6. Monitor Emerging Legislation</h2>
        <ul className={styles.list}>
          <li>
            Watch: <a className={styles.link} href="https://bills.parliament.uk/" target="_blank">Bills at parliament.uk</a>
          </li>
          <li>Follow legal news or blogs, verify updates with official sources.</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>7. Account for Devolved Jurisdictions</h2>
        <ul className={styles.list}>
          <li>England & Wales – main coverage</li>
          <li>Scotland – distinct laws (e.g., Criminal Justice (Scotland) Act 2016)</li>
          <li>Northern Ireland – separate statutes</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>8. Additional Research Tools</h2>
        <ul className={styles.list}>
          <li><a className={styles.link} href="https://www.sentencingcouncil.org.uk/" target="_blank">Sentencing Council</a></li>
          <li><a className={styles.link} href="https://www.lawcom.gov.uk/" target="_blank">Law Commission</a> reports</li>
          <li><a className={styles.link} href="https://commonslibrary.parliament.uk/research-briefings/" target="_blank">Parliament Briefings</a></li>
          <li><a className={styles.link} href="https://www.nationalcrimeagency.gov.uk/" target="_blank">National Crime Agency</a></li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>9. Practical Tips</h2>
        <ul className={styles.list}>
          <li>Start with major Acts.</li>
          <li>Check cross-references and schedules.</li>
          <li>Stay up to date with amendments.</li>
          <li>Seek expert advice when needed.</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>10. Limitations</h2>
        <ul className={styles.list}>
          <li>No unified code; laws are scattered.</li>
          <li>Volume and complexity require careful study.</li>
          <li>Laws change frequently—monitor continuously.</li>
        </ul>
      </div>
    </main>
  );
}
