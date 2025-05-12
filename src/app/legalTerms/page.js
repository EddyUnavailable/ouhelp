"use client";

import styles from "../styles/legalTerms.module.css";

export default function LegalTerms() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Legal Terms in UK Law</h1>
      

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
            <td>Consideration</td>
            <td>Thoughtfulness or kindness</td>
            <td>Something of value exchanged to make a contract binding</td>
            <td>A contract without consideration is not enforceable in English law.</td>
          </tr>
          <tr>
            <td>Tort</td>
            <td>N/A</td>
            <td>A civil wrong that causes a person to suffer loss or harm (e.g., negligence, defamation)</td>
            <td>Defamation is a type of tort in English civil law.</td>
          </tr>
          <tr>
            <td>Indictment</td>
            <td>A general accusation or criticism</td>
            <td>A formal accusation of a serious crime tried on indictment (e.g., murder)</td>
            <td>The Crown Court issued an indictment for armed robbery.</td>
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
          <tr>
            <td>Strict liability</td>
            <td>Being responsible no matter what</td>
            <td>Offences that do not require proof of mens rea for at least part of the offence</td>
            <td>Selling alcohol to a minor is a strict liability offence, even if the seller believed the buyer was of age.</td>
          </tr>
          <tr>
            <td>Conspiracy</td>
            <td>A secret plan</td>
            <td>An agreement between two or more persons to commit a criminal offence</td>
            <td>He was charged with conspiracy to supply illegal drugs.</td>
          </tr>
          <tr>
            <td>Aiding and abetting</td>
            <td>Helping someone do something</td>
            <td>Assisting, encouraging, or facilitating the commission of a crime</td>
            <td>She was convicted of aiding and abetting the robbery by driving the getaway car.</td>
          </tr>
          <tr>
            <td>Mitigation</td>
            <td>Lessening the severity</td>
            <td>Circumstances that reduce the seriousness of the offence or sentence</td>
            <td>The judge considered his remorse as a factor in mitigation.</td>
          </tr>
          <tr>
            <td>Aggravating factors</td>
            <td>Things that make a situation worse</td>
            <td>Factors that increase the seriousness of the offence and may lead to a harsher sentence</td>
            <td>Use of a weapon was an aggravating factor in sentencing.</td>
          </tr>
          <tr>
            <td>Duress</td>
            <td>Being pressured or forced</td>
            <td>A defence where the defendant was forced to commit a crime due to threat of harm</td>
            <td>He claimed he acted under duress when threatened with violence.</td>
          </tr>
        </tbody>
      </table>

      
    </div>
  );
}
