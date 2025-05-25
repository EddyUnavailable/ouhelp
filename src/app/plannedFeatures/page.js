"use client";

import styles from "@/styles/plannedFeatures.module.css";

export default function PlannedFeatures() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Planned Features for OU Law Learning</h1>
      <p className={styles.intro}>This page outlines future additions to enhance learning for the W111 module and beyond.</p>

      <section>
        <h2 className={styles.sectionHeader}>📚 Study Tools</h2>
        <ul>
          <li>Case Briefs Section with IRAC summaries</li>
          <li>Flashcards (with spaced repetition)</li>
          <li>Quiz Generator (MCQs, True/False, Short Answer)</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.sectionHeader}>🔍 Reference Tools</h2>
        <ul>
          <li>Legislation & Case Law Explorer</li>
          <li>Timeline Tool for legal developments</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.sectionHeader}>🗂️ Assignment Support</h2>
        <ul>
          <li>IRAC Practice Builder (structured form + export)</li>
          <li>Argument Analysis Tool (compare sides of a legal debate)</li>
          <li>Referencing Assistant (improve and expand footnote help)</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.sectionHeader}>👨‍⚖️ Real-World Links</h2>
        <ul>
          <li>Recent Case Tracker with IRAC breakdowns</li>
          <li>Embedded Legal Podcasts & Videos</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.sectionHeader}>🧠 Visual Learning</h2>
        <ul>
          <li>Flowcharts (e.g. criminal procedure, defences)</li>
          <li>Concept Maps to show relationships between terms</li>
        </ul>
      </section>
    </div>
  );
}
