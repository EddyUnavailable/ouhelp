// app/legal-terms/page.js

import styles from "../../styles/legalTerms.module.css";

export default function CriminalLaw() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Civil and Criminal Law Terms</h2>
      <h3 className={styles.sectionHeader}>Criminal Law Terms</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Word</th>
            <th>Everyday Meaning</th>
            <th>Legal Meaning (UK Law)</th>
            <th>Example (Legal Context)</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              word: "Homicide",
              everyday: "Killing of a person",
              legal: "Unlawful killing, can be murder or manslaughter",
              example: "The defendant was charged with homicide after the fatal incident.",
            },
            {
              word: "Assault",
              everyday: "A physical attack",
              legal: "Causing someone to fear immediate unlawful violence",
              example: "Words and gestures alone can constitute assault in UK law.",
            },
            {
              word: "Battery",
              everyday: "Beating or physical force",
              legal: "Actual unlawful physical contact",
              example: "Pushing someone without consent may amount to battery.",
            },
            {
              word: "Theft",
              everyday: "Stealing something",
              legal: "Dishonestly appropriating property with intent to permanently deprive",
              example: "He was convicted of theft for stealing a laptop from the office.",
            },
            {
              word: "Burglary",
              everyday: "Breaking into a building to steal",
              legal:
                "Entering a building as a trespasser with intent to commit theft, GBH, or unlawful damage",
              example:
                "The suspect was charged with burglary after entering the house without permission.",
            },
            {
              word: "Robbery",
              everyday: "Violent theft",
              legal: "Theft with the use or threat of force",
              example: "He was convicted of robbery for threatening the cashier with a knife.",
            },
            {
              word: "Fraud",
              everyday: "Deception for personal gain",
              legal:
                "Dishonestly making a false representation, failing to disclose information, or abusing a position",
              example:
                "She was found guilty of fraud after using false documents to obtain a loan.",
            },
            {
              word: "Arson",
              everyday: "Deliberately setting fire to something",
              legal: "Criminal damage by fire to property belonging to another",
              example: "He was charged with arson for setting fire to the warehouse.",
            },
            {
              word: "Perjury",
              everyday: "Lying",
              legal: "Knowingly giving false evidence under oath",
              example: "The witness was prosecuted for perjury after lying in court.",
            },
            {
              word: "Conspiracy",
              everyday: "A secret plan",
              legal: "An agreement between two or more people to commit a criminal offence",
              example: "They were charged with conspiracy to defraud the government.",
            },
            {
              word: "Kidnapping",
              everyday: "Taking someone by force",
              legal: "Unlawful taking or detaining of a person by force or fraud",
              example:
                "He was found guilty of kidnapping after detaining the victim against their will.",
            },
          ].map((term, index) => (
            <tr key={index}>
              <td>{term.word}</td>
              <td>{term.everyday}</td>
              <td>{term.legal}</td>
              <td>{term.example}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
