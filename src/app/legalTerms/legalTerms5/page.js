import { createClient } from '@supabase/supabase-js';
import LegalTermForm from '../../components/LegalTermForm'
import styles from "../../styles/legalTerms.module.css";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function LegalTermsPage() {


  const { data, error } = await supabase.from('legal_terms').select('*')

  if (error) {
    return <div className={styles.errorMessage}>Error: {error.message}</div>
  }

  return (
    <div className={styles.legalTermsPage}>
      <h1 className={styles.pageTitle}>Legal Terms</h1>
      <ul className={styles.termList}>
        {data.map(term => (
          <li key={term.word} className={styles.termItem}>
            <span className={styles.termName}>{term.word}</span><br />
            <span className={styles.meaningLabel}>Everyday Meaning:</span> {term.everyday_meaning}<br />
            <span className={styles.meaningLabel}>Legal Meaning:</span> {term.legal_meaning}<br />
            <span className={styles.meaningLabel}>Example:</span> {term.example}<br /><br />
          </li>
        ))}
      </ul>
      <LegalTermForm />
    </div>
  )
}
      
   