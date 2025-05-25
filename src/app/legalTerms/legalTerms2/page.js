import { createClient } from '@supabase/supabase-js';
import LegalTermForm from '../../components/LegalTermForm'
import styles from "@/styles/legalTerms.module.css";
import SearchLegislation from '@/app/components/SearchLegislation';

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
      
      <SearchLegislation />
    </div>
  )
}
      
   