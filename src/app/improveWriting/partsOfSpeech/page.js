"use client"

import Link from 'next/link'; // Import Link for internal navigation
import styles from '@/styles/partsOfSpeech.module.css';

export default function PartsOfSpeech() {
  return (
    <main className={styles.container}>
      {/* Main heading with clear, accessible title */}
      <h1 className={styles.title}>The 8 Parts of Speech in Legal Writing</h1>
      <p className={styles.intro}>
        Understanding the eight parts of speech is essential for crafting clear and precise legal writing. These grammatical categories—noun, pronoun, verb, adjective, adverb, preposition, conjunction, and interjection—help structure sentences effectively, ensuring your legal arguments are coherent and professional. Below, each part is explained with examples from legal contexts, tips for application, and connections to legal writing skills.
      </p>

      {/* Parts of Speech Sections */}
      <section className={styles.partSection}>
        <h2 className={styles.partTitle}>1. Noun</h2>
        <p className={styles.sectionContent}>
          <strong>Description:</strong> A noun represents a person, place, thing, or idea, serving as the subject or object in a sentence.
        </p>
        <p className={styles.sectionContent}>
          <strong>Legal Example:</strong> In <em>Donoghue v Stevenson</em> [1932] AC 562, the <strong>manufacturer</strong> owed a duty of care to the <strong>consumer</strong>.
        </p>
        <p className={styles.sectionContent}>
          <strong>Explanation:</strong> “Manufacturer” and “consumer” are nouns identifying the parties in the case, anchoring the sentence’s legal context.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Use specific nouns in legal writing (e.g., “defendant” instead of “person”) to enhance clarity and precision. Avoid vague nouns that obscure meaning.
        </div>
      </section>

      <section className={styles.partSection}>
        <h2 className={styles.partTitle}>2. Pronoun</h2>
        <p className={styles.sectionContent}>
          <strong>Description:</strong> A pronoun replaces a noun to avoid repetition, maintaining sentence flow.
        </p>
        <p className={styles.sectionContent}>
          <strong>Legal Example:</strong> The <strong>court</strong> held that <strong>it</strong> lacked jurisdiction.
        </p>
        <p className={styles.sectionContent}>
          <strong>Explanation:</strong> “It” replaces “court,” reducing redundancy while keeping the sentence clear.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Use pronouns sparingly in legal writing to avoid ambiguity. Ensure the pronoun’s referent (e.g., “court”) is clear to the reader.
        </div>
      </section>

      <section className={styles.partSection}>
        <h2 className={styles.partTitle}>3. Verb</h2>
        <p className={styles.sectionContent}>
          <strong>Description:</strong> A verb expresses an action, occurrence, or state of being, driving the sentence’s meaning.
        </p>
        <p className={styles.sectionContent}>
          <strong>Legal Example:</strong> The defendant <strong>breached</strong> the contract by failing to deliver.
        </p>
        <p className={styles.sectionContent}>
          <strong>Explanation:</strong> “Breached” is the verb, indicating the defendant’s action central to the legal issue.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Prefer active voice verbs (e.g., “breached”) over passive voice (e.g., “was breached”) in legal writing for clarity and directness.
        </div>
      </section>

      <section className={styles.partSection}>
        <h2 className={styles.partTitle}>4. Adjective</h2>
        <p className={styles.sectionContent}>
          <strong>Description:</strong> An adjective describes or modifies a noun, specifying its quality, quantity, or extent.
        </p>
        <p className={styles.sectionContent}>
          <strong>Legal Example:</strong> The <strong>reasonable</strong> person standard applies in negligence cases.
        </p>
        <p className={styles.sectionContent}>
          <strong>Explanation:</strong> “Reasonable” modifies “person,” defining the legal standard used in the analysis.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Choose precise adjectives in legal writing (e.g., “reasonable” over “good”) to align with legal terminology and avoid subjective terms.
        </div>
      </section>

      <section className={styles.partSection}>
        <h2 className={styles.partTitle}>5. Adverb</h2>
        <p className={styles.sectionContent}>
          <strong>Description:</strong> An adverb modifies a verb, adjective, or another adverb, indicating manner, time, place, or degree.
        </p>
        <p className={styles.sectionContent}>
          <strong>Legal Example:</strong> The claimant <strong>negligently</strong> failed to act.
        </p>
        <p className={styles.sectionContent}>
          <strong>Explanation:</strong> “Negligently” describes how the claimant failed, qualifying the verb “failed.”
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Use adverbs judiciously in legal writing, as overuse (e.g., “clearly,” “obviously”) can weaken arguments. Ensure adverbs add precision, like “negligently.”
        </div>
      </section>

      <section className={styles.partSection}>
        <h2 className={styles.partTitle}>6. Preposition</h2>
        <p className={styles.sectionContent}>
          <strong>Description:</strong> A preposition shows the relationship between a noun or pronoun and another word, often indicating location, time, or direction.
        </p>
        <p className={styles.sectionContent}>
          <strong>Legal Example:</strong> The contract was signed <strong>on</strong> 1st May 2025.
        </p>
        <p className={styles.sectionContent}>
          <strong>Explanation:</strong> “On” specifies the time relationship between “signed” and “1st May 2025.”
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Use prepositions to clarify relationships in legal writing (e.g., “in breach of” a contract). Avoid complex prepositional phrases that obscure meaning.
        </div>
      </section>

      <section className={styles.partSection}>
        <h2 className={styles.partTitle}>7. Conjunction</h2>
        <p className={styles.sectionContent}>
          <strong>Description:</strong> A conjunction connects words, phrases, or clauses, ensuring sentence cohesion.
        </p>
        <p className={styles.sectionContent}>
          <strong>Legal Example:</strong> The court considered foreseeability <strong>and</strong> proximity.
        </p>
        <p className={styles.sectionContent}>
          <strong>Explanation:</strong> “And” connects the nouns “foreseeability” and “proximity,” linking related legal concepts.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Use coordinating conjunctions (e.g., “and,” “but”) to link related legal points. Avoid overusing conjunctions in long sentences to maintain clarity.
        </div>
      </section>

      <section className={styles.partSection}>
        <h2 className={styles.partTitle}>8. Interjection</h2>
        <p className={styles.sectionContent}>
          <strong>Description:</strong> An interjection is an abrupt remark or exclamation, often expressing emotion, rarely used in formal legal writing.
        </p>
        <p className={styles.sectionContent}>
          <strong>Legal Example:</strong> <strong>Alas!</strong> The claimant’s case was dismissed (informal context).
        </p>
        <p className={styles.sectionContent}>
          <strong>Explanation:</strong> “Alas” expresses regret but is inappropriate for formal legal documents due to its emotional tone.
        </p>
        <div className={styles.tip}>
          <strong>Tip:</strong> Avoid interjections in legal writing, as they undermine professionalism. Focus on neutral, objective language to maintain credibility.
        </div>
      </section>

      {/* Interactive Quiz Section */}
      <section className={styles.partSection}>
        <h2 className={styles.partTitle}>Test Your Knowledge</h2>
        <p className={styles.sectionContent}>
          Identify the part of speech in this legal sentence: “The <strong>defendant</strong> <strong>negligently</strong> <strong>breached</strong> the contract.”
        </p>
        <form className={styles.quizForm}>
          <label className={styles.quizLabel}>
            “Defendant” is a:
            <select className={styles.quizSelect} defaultValue="">
              <option value="" disabled>Select an answer</option>
              <option value="Noun">Noun</option>
              <option value="Verb">Verb</option>
              <option value="Adjective">Adjective</option>
              <option value="Adverb">Adverb</option>
            </select>
          </label>
          <label className={styles.quizLabel}>
            “Negligently” is a:
            <select className={styles.quizSelect} defaultValue="">
              <option value="" disabled>Select an answer</option>
              <option value="Noun">Noun</option>
              <option value="Verb">Verb</option>
              <option value="Adjective">Adjective</option>
              <option value="Adverb">Adverb</option>
            </select>
          </label>
          <label className={styles.quizLabel}>
            “Breached” is a:
            <select className={styles.quizSelect} defaultValue="">
              <option value="" disabled>Select an answer</option>
              <option value="Noun">Noun</option>
              <option value="Verb">Verb</option>
              <option value="Adjective">Adjective</option>
              <option value="Adverb">Adverb</option>
            </select>
          </label>
          <button type="button" className={styles.button} onClick={() => alert('Check answers: "Defendant" is a Noun, "Negligently" is an Adverb, "Breached" is a Verb.')}>
            Submit Answers
          </button>
        </form>
        <div className={styles.tip}>
          <strong>Tip:</strong> Practice identifying parts of speech in legal texts to improve sentence construction. Use sentences from cases like <em>R v Byrne</em> [1960] 2 QB 396 for practice.
        </div>
      </section>

      {/* Resources Section */}
      <section className={styles.resources}>
        <h2 className={styles.partTitle}>Additional Resources</h2>
        <ul className={styles.resourceList}>
          <li>Apply grammar to legal writing with our <Link href="/legal-writing" className={styles.internalLink}>Legal Writing Guide</Link>.</li>
          <li>Practice structured writing with IRAC examples: 
            <Link href="/irac-examples" className={styles.internalLink}>IRAC Guide</Link>, 
            <Link href="/irac-examples/trespass" className={styles.internalLink}>Trespass to Land</Link>, 
            <Link href="/irac-examples/duty-of-care" className={styles.internalLink}>Duty of Care</Link>, 
            <Link href="/irac-examples/dudley-stephens" className={styles.internalLink}>Dudley and Stephens</Link>.
          </li>
          <li>Use the <a href="https://www.law.ox.ac.uk/oscola" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>OSCOLA guide</a> for citing legal sources accurately.</li>
          <li>Refer to grammar resources like <em>English Grammar in Use</em> by Raymond Murphy for foundational skills.</li>
        </ul>
        <p className={styles.sectionContent}>
          {/* Note: Verify external links periodically, as URLs may change. */}
          To enhance your legal writing, practice constructing sentences with clear parts of speech, focusing on precision and professionalism.
        </p>
      </section>
    </main>
  );
}