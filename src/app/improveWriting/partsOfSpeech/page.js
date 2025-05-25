// app/grammar/parts-of-speech/page.js
import styles from '@/styles/legalWriting.module.css';

export default function PartsOfSpeech() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>The 8 Parts of Speech</h1>
      <p>
        In English grammar, words are classified into eight categories known as the parts of speech.
        These categories describe how words function in a sentence.
      </p>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Example Sentence</th>
            <th>Word in Use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Noun</td>
            <td>A person, place, thing, or idea.</td>
            <td>The <strong>dog</strong> barked loudly.</td>
            <td>"dog" = noun</td>
          </tr>
          <tr>
            <td>Pronoun</td>
            <td>A word that replaces a noun to avoid repetition.</td>
            <td><strong>She</strong> went to the store.</td>
            <td>"she" = pronoun replacing a noun</td>
          </tr>
          <tr>
            <td>Verb</td>
            <td>An action word or a state of being.</td>
            <td>He <strong>runs</strong> every morning.</td>
            <td>"runs" = verb</td>
          </tr>
          <tr>
            <td>Adjective</td>
            <td>Describes or modifies a noun (e.g., what kind, how many, which one).</td>
            <td>It was a <strong>cold</strong> day.</td>
            <td>"cold" = modifies "day"</td>
          </tr>
          <tr>
            <td>Adverb</td>
            <td>Modifies a verb, adjective, or another adverb (e.g., how, when, where).</td>
            <td>She sang <strong>beautifully</strong>.</td>
            <td>"beautifully" = modifies "sang"</td>
          </tr>
          <tr>
            <td>Preposition</td>
            <td>Shows the relationship between a noun (or pronoun) and another word.</td>
            <td>The book is <strong>on</strong> the table.</td>
            <td>"on" = shows location</td>
          </tr>
          <tr>
            <td>Conjunction</td>
            <td>Connects words, phrases, or clauses.</td>
            <td>I want tea <strong>and</strong> biscuits.</td>
            <td>"and" = joins words</td>
          </tr>
          <tr>
            <td>Interjection</td>
            <td>An abrupt remark or exclamation.</td>
            <td><strong>Wow!</strong> That’s amazing.</td>
            <td>"Wow" = interjection</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
