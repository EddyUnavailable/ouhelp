'use client';

import styles from './style/word.module.css';

export default function CulpabilityVsResponsibilityPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Culpability vs Responsibility</h1>

      <p><strong>Grammatical and Semantic Analysis: Culpability vs. Responsibility</strong></p>
      <p>
        In <em>Complete Criminal Law</em> (8th edn.), “culpability” and “responsibility” are legal terms used to describe aspects of a defendant’s mental state or liability in criminal law. While they overlap, they have distinct meanings and grammatical uses, particularly in the context of UK criminal law (e.g., murder, manslaughter, and partial defences).
      </p>

      <h2 className={styles.subtitle}>1. Culpability</h2>
      <p><strong>Definition in Legal Context:</strong> Culpability refers to the degree of blameworthiness or fault attributable to a defendant for committing a criminal act. It encompasses the mental state (mens rea) and circumstances that make the defendant morally or legally blameworthy.</p>
      <p>Example: “The defendant’s culpability was reduced due to an abnormality of mental functioning.”</p>
      <p><strong>Grammatical Role:</strong> Culpability is a noun derived from “culpable.” It can function as a subject, object, or complement in sentences.</p>
      <ul>
        <li><strong>Subject:</strong> “Culpability depends on the defendant’s intention or foresight of harm.”</li>
        <li><strong>Object:</strong> “The court assessed the defendant’s culpability before sentencing.”</li>
        <li><strong>Complement:</strong> “The issue was the degree of culpability involved.”</li>
      </ul>

      <h2 className={styles.subtitle}>2. Responsibility</h2>
      <p><strong>Definition in Legal Context:</strong> Responsibility refers to being accountable for a criminal act, often focusing on the defendant’s capacity to be held liable. It includes both criminal liability and moral accountability.</p>
      <p>Example: “Diminished responsibility requires evidence that the defendant’s mental functioning impaired their responsibility for the killing.”</p>
      <p><strong>Grammatical Role:</strong> Responsibility is also a noun, derived from “responsible,” used as subject, object, or complement.</p>
      <ul>
        <li><strong>Subject:</strong> “Responsibility for the act was disputed due to the defendant’s mental state.”</li>
        <li><strong>Object:</strong> “The defence argued that the defendant lacked responsibility.”</li>
        <li><strong>Complement:</strong> “The question was whether responsibility could be attributed.”</li>
      </ul>

      <h2 className={styles.subtitle}>3. Key Differences in Legal Writing</h2>
      <p><strong>Focus:</strong></p>
      <ul>
        <li><strong>Culpability:</strong> Centers on blameworthiness and fault. Example: “The defendant’s recklessness indicated lower culpability than intent.”</li>
        <li><strong>Responsibility:</strong> Centers on accountability and capacity. Example: “Diminished responsibility reduced the defendant’s liability.”</li>
      </ul>

      <p><strong>Context in Complete Criminal Law:</strong></p>
      <ul>
        <li><strong>Culpability:</strong> Appears in mens rea and sentencing discussions (e.g., intent vs. recklessness).</li>
        <li><strong>Responsibility:</strong> Often tied to defences like diminished responsibility (Chapter 7 on homicide).</li>
      </ul>

      <h2 className={styles.subtitle}>4. Grammatical and Stylistic Nuances in Legal Texts</h2>
      <p>Though often interchangeable in casual usage, legal writing draws a clear distinction. Legal writers use:</p>
      <ul>
        <li><strong>Culpability</strong> to stress fault or blame.</li>
        <li><strong>Responsibility</strong> to focus on liability or mental capacity.</li>
      </ul>

      <p><strong>Example:</strong> “Diminished responsibility reduces the defendant’s responsibility, thereby lowering their culpability from murder to manslaughter.”</p>

      <h2 className={styles.subtitle}>5. Connection to Grammar and Legal Prose</h2>
      <p>Legal prose in <em>Complete Criminal Law</em> uses “culpability” and “responsibility” precisely, reflecting formal tone and syntactic roles. Each appears in structured sentences to avoid ambiguity.</p>

      <h2 className={styles.subtitle}>Conclusion</h2>
      <ul>
        <li><strong>Culpability:</strong> Emphasizes blameworthiness. Example: “The defendant’s culpability was high due to direct intent.”</li>
        <li><strong>Responsibility:</strong> Emphasizes accountability and legal capacity. Example: “Diminished responsibility reduced the defendant’s liability.”</li>
      </ul>
      <p>Both are uncountable nouns and play essential roles in legal analysis, especially when distinguishing degrees of fault and liability in formal writing.</p>
    </div>
  );
}
