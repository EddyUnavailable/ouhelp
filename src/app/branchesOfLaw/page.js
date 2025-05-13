// app/branches-of-law/page.js
import styles from "./../styles/branchesOfLaw.module.css";

export default function BranchesOfLawPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Branches of Law in the UK</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name of Law</th>
            <th>Branch</th>
            <th>Link</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Contract Law</td>
            <td>Civil</td>
            <td><a className={styles.link} href="https://www.lawteacher.net/free-law-essays/contract-law/">Learn More</a></td>
            <td>Governs agreements made between parties and the consequences of breach.</td>
          </tr>
          <tr>
            <td>Tort Law</td>
            <td>Civil</td>
            <td><a className={styles.link} href="https://www.lawteacher.net/free-law-essays/tort-law/">Learn More</a></td>
            <td>Covers civil wrongs like negligence, nuisance, and defamation.</td>
          </tr>
          <tr>
            <td>Family Law</td>
            <td>Civil</td>
            <td><a className={styles.link} href="https://www.lawteacher.net/free-law-essays/family-law/">Learn More</a></td>
            <td>Deals with marriage, divorce, custody, and adoption issues.</td>
          </tr>
          <tr>
            <td>Criminal Law</td>
            <td>Criminal</td>
            <td><a className={styles.link} href="https://www.lawteacher.net/free-law-essays/criminal-law/">Learn More</a></td>
            <td>Involves prosecution by the state for acts classified as crimes.</td>
          </tr>
          <tr>
            <td>Property Law</td>
            <td>Civil</td>
            <td><a className={styles.link} href="https://www.lawteacher.net/free-law-essays/property-law/">Learn More</a></td>
            <td>Regulates ownership, leasing, and use of land and buildings.</td>
          </tr>
          <tr>
            <td>Constitutional Law</td>
            <td>Public</td>
            <td><a className={styles.link} href="https://www.lawteacher.net/free-law-essays/constitutional-law/">Learn More</a></td>
            <td>Defines the roles and powers of government branches and fundamental rights.</td>
          </tr>
          <tr>
            <td>Administrative Law</td>
            <td>Public</td>
            <td><a className={styles.link} href="https://www.lawteacher.net/free-law-essays/administrative-law/">Learn More</a></td>
            <td>Reviews decisions and actions by government departments and agencies.</td>
          </tr>
          <tr>
            <td>Human Rights Law</td>
            <td>Public</td>
            <td><a className={styles.link} href="https://www.equalityhumanrights.com/en/human-rights/human-rights-act">Learn More</a></td>
            <td>Protects basic freedoms and rights under UK and international law.</td>
          </tr>
          <tr>
            <td>International Law</td>
            <td>Public</td>
            <td><a className={styles.link} href="https://www.lawteacher.net/free-law-essays/international-law/">Learn More</a></td>
            <td>Governs relations between states and international organizations.</td>
          </tr>
          <tr>
            <td>Environmental Law</td>
            <td>Public</td>
            <td><a className={styles.link} href="https://www.ukela.org/">Learn More</a></td>
            <td>Focuses on regulation of environmental protection and sustainability.</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
