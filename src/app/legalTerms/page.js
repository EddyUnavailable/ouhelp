"use client";

import styles from "../styles/legalTerms.module.css";

export default function LegalTerms() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Legal Terms in UK Law</h1>
      <h2 className={styles.subtitle}>Civil and Criminal Law Terms</h2>

      <h3 className={styles.sectionHeader}>Civil Law Terms</h3>
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
          <tr>
            <td>Culpability</td>
            <td>Blame or guilt</td>
            <td>Degree of blameworthiness for a criminal act</td>
            <td>"The defendant’s culpability was reduced due to diminished responsibility."</td>
          </tr>
          <tr>
            <td>Responsibility</td>
            <td>Being in charge or accountable</td>
            <td>Legal accountability for a crime</td>
            <td>"Diminished responsibility reduced the defendant’s liability for murder."</td>
          </tr>
          <tr>
            <td>Consent</td>
            <td>Permission or agreement</td>
            <td>Voluntary agreement to an act, which may negate criminal liability</td>
            <td>"Consent is a defence in certain assault cases, such as in sports."</td>
          </tr>
          <tr>
            <td>Intention</td>
            <td>A plan or aim</td>
            <td>A specific state of mind required for crimes like murder</td>
            <td>"Murder requires proof of intention to kill or cause grievous bodily harm."</td>
          </tr>
          <tr>
            <td>Recklessness</td>
            <td>Carelessness or lack of caution</td>
            <td>Conscious disregard of a known risk</td>
            <td>"Recklessness can establish mens rea in manslaughter cases."</td>
          </tr>
          <tr>
            <td>Mens rea</td>
            <td>Not commonly used</td>
            <td>The mental element of a crime (e.g., intention, recklessness)</td>
            <td>"The prosecution must prove mens rea for a conviction of theft."</td>
          </tr>
          <tr>
            <td>Actus reus</td>
            <td>Not commonly used</td>
            <td>The physical act of committing a crime</td>
            <td>"Both actus reus and mens rea must be present for a conviction."</td>
          </tr>
          <tr>
            <td>Malice</td>
            <td>Spite or ill-will</td>
            <td>In law, can mean intentional or reckless disregard for the rights of others</td>
            <td>"Malice aforethought is a key element in the offence of murder."</td>
          </tr>
          <tr>
            <td>Omission</td>
            <td>Something left out</td>
            <td>Failure to act when there is a legal duty to do so</td>
            <td>"An omission to feed a dependent child may amount to gross negligence manslaughter."</td>
          </tr>
          <tr>
            <td>Negligence</td>
            <td>Carelessness</td>
            <td>Failure to take reasonable care, leading to harm</td>
            <td>"Negligence is a key concept in both civil and criminal law."</td>
          </tr>
          <tr>
            <td>Duty of care</td>
            <td>Responsibility to look after someone</td>
            <td>Legal obligation to avoid acts or omissions which can be reasonably foreseen to cause harm</td>
            <td>"A duty of care was owed by the driver to other road users."</td>
          </tr>
          <tr>
            <td>Liability</td>
            <td>Being responsible for something</td>
            <td>Legal responsibility for one's acts or omissions</td>
            <td>"The manufacturer was found liable for the defective product under consumer protection law."</td>
          </tr>
          <tr>
            <td>Damages</td>
            <td>Harm or injury</td>
            <td>Monetary compensation awarded in civil cases</td>
            <td>"The claimant received damages for pain and suffering caused by the accident."</td>
          </tr>
          <tr>
            <td>Breach</td>
            <td>Breaking something</td>
            <td>Violation of a legal duty or contract</td>
            <td>"The court found a breach of contract by the supplier."</td>
          </tr>
          <tr>
            <td>Injunction</td>
            <td>Command or order</td>
            <td>Court order requiring a party to do or stop doing something</td>
            <td>"An injunction was granted to prevent the company from demolishing the historic building."</td>
          </tr>
        </tbody>
      </table>

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
          <tr>
            <td>Homicide</td>
            <td>Killing of a person</td>
            <td>Unlawful killing, can be murder or manslaughter</td>
            <td>"The defendant was charged with homicide after the fatal incident."</td>
          </tr>
          <tr>
            <td>Assault</td>
            <td>A physical attack</td>
            <td>Causing someone to fear immediate unlawful violence</td>
            <td>"Words and gestures alone can constitute assault in UK law."</td>
          </tr>
          <tr>
            <td>Battery</td>
            <td>Beating or physical force</td>
            <td>Actual unlawful physical contact</td>
            <td>"Pushing someone without consent may amount to battery."</td>
          </tr>
          <tr>
            <td>Theft</td>
            <td>Stealing something</td>
            <td>Dishonestly appropriating property with intent to permanently deprive</td>
            <td>"He was convicted of theft for stealing a laptop from the office."</td>
          </tr>
          <tr>
            <td>Burglary</td>
            <td>Breaking into a building to steal</td>
            <td>Entering a building as a trespasser with intent to commit theft, GBH, or unlawful damage</td>
            <td>"The suspect was charged with burglary after entering the house without permission."</td>
          </tr>
          <tr>
            <td>Robbery</td>
            <td>Violent theft</td>
            <td>Theft with the use or threat of force</td>
            <td>"He was convicted of robbery for threatening the cashier with a knife."</td>
          </tr>
          <tr>
            <td>Fraud</td>
            <td>Deception for personal gain</td>
            <td>Dishonestly making a false representation, failing to disclose information, or abusing a position</td>
            <td>"She was found guilty of fraud after using false documents to obtain a loan."</td>
          </tr>
          <tr>
            <td>Arson</td>
            <td>Deliberately setting fire to something</td>
            <td>Criminal damage by fire to property belonging to another</td>
            <td>"He was charged with arson for setting fire to the warehouse."</td>
          </tr>
          <tr>
            <td>Perjury</td>
            <td>Lying</td>
            <td>Knowingly giving false evidence under oath</td>
            <td>"The witness was prosecuted for perjury after lying in court."</td>
          </tr>
          <tr>
            <td>Conspiracy</td>
            <td>A secret plan</td>
            <td>An agreement between two or more people to commit a criminal offence</td>
            <td>"They were charged with conspiracy to defraud the government."</td>
          </tr>
          <tr>
            <td>Kidnapping</td>
            <td>Taking someone by force</td>
            <td>Unlawful taking or detaining of a person by force or fraud</td>
            <td>"He was found guilty of kidnapping after detaining the victim against their will."</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
