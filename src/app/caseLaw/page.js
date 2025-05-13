// app/case-law/page.js
import styles from '../styles/caseLawPage.module.css';
import Link from 'next/link';

const caseLaws = [
  {
    name: "Donoghue v Stevenson (1932)",
    branch: "Tort Law",
    link: "https://en.wikipedia.org/wiki/Donoghue_v_Stevenson",
    description: "Established the modern law of negligence and the duty of care."
  },
  {
    name: "Caparo Industries plc v Dickman (1990)",
    branch: "Tort Law",
    link: "https://en.wikipedia.org/wiki/Caparo_Industries_plc_v_Dickman",
    description: "Defined the three-part test for duty of care in negligence."
  },
  {
    name: "Rylands v Fletcher (1868)",
    branch: "Tort Law",
    link: "https://en.wikipedia.org/wiki/Rylands_v_Fletcher",
    description: "Introduced the principle of strict liability for dangerous things."
  },
  {
    name: "R v Dudley and Stephens (1884)",
    branch: "Criminal Law",
    link: "https://en.wikipedia.org/wiki/R_v_Dudley_and_Stephens",
    description: "Necessity is not a defence to murder, even in extreme situations."
  },
  {
    name: "R v Cunningham (1957)",
    branch: "Criminal Law",
    link: "https://en.wikipedia.org/wiki/R_v_Cunningham_(1957)",
    description: "Established the concept of recklessness in criminal law."
  },
  {
    name: "R v Woollin (1999)",
    branch: "Criminal Law",
    link: "https://en.wikipedia.org/wiki/R_v_Woollin",
    description: "Clarified the definition of indirect (oblique) intention in murder."
  },
  {
    name: "Carlill v Carbolic Smoke Ball Co (1893)",
    branch: "Contract Law",
    link: "https://en.wikipedia.org/wiki/Carlill_v_Carbolic_Smoke_Ball_Co",
    description: "Set precedent for unilateral contracts and the intention to create legal relations."
  },
  {
    name: "Partridge v Crittenden (1968)",
    branch: "Contract Law",
    link: "https://en.wikipedia.org/wiki/Partridge_v_Crittenden",
    description: "Clarified the legal status of advertisements as invitations to treat."
  },
  {
    name: "Felthouse v Bindley (1862)",
    branch: "Contract Law",
    link: "https://en.wikipedia.org/wiki/Felthouse_v_Bindley",
    description: "Established that silence does not amount to acceptance in contract law."
  },
  {
    name: "R (Miller) v Secretary of State (2017)",
    branch: "Constitutional Law",
    link: "https://en.wikipedia.org/wiki/R_(Miller)_v_Secretary_of_State_for_Exiting_the_EU",
    description: "Parliament must authorize the triggering of Article 50 to begin Brexit."
  },
  {
    name: "Entick v Carrington (1765)",
    branch: "Constitutional Law",
    link: "https://en.wikipedia.org/wiki/Entick_v_Carrington",
    description: "Government officials must act within the law—early rule of law principle."
  },
  {
    name: "R v R (1991)",
    branch: "Criminal Law / Family Law",
    link: "https://en.wikipedia.org/wiki/R_v_R",
    description: "Recognised marital rape as a criminal offence in UK law."
  },
  {
    name: "Salomon v Salomon & Co. (1897)",
    branch: "Company Law",
    link: "https://en.wikipedia.org/wiki/Salomon_v_A_Salomon_%26_Co_Ltd",
    description: "Confirmed the separate legal personality of a company."
  },
  {
    name: "Pepper v Hart (1993)",
    branch: "Public Law",
    link: "https://en.wikipedia.org/wiki/Pepper_v_Hart",
    description: "Allowed the use of Hansard (Parliamentary debates) in statutory interpretation."
  },
  {
    name: "Ghaidan v Godin-Mendoza (2004)",
    branch: "Human Rights Law",
    link: "https://en.wikipedia.org/wiki/Ghaidan_v_Godin-Mendoza",
    description: "Extended tenancy rights under the Human Rights Act to same-sex partners."
  }
];

export default function CaseLaw() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Major UK Case Law Examples</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Case Name</th>
            <th>Law Branch</th>
            <th>Link</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {caseLaws.map((caseLaw, index) => (
            <tr key={index}>
              <td>{caseLaw.name}</td>
              <td>{caseLaw.branch}</td>
              <td>
                <Link href={caseLaw.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  View
                </Link>
              </td>
              <td>{caseLaw.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
