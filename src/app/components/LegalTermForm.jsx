'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js';
import styles from "./../styles/legalTerms.module.css";


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function LegalTermForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    word: '',
    everyday_meaning: '',
    legal_meaning: '',
    example: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    const { error } = await supabase.from('legal_terms').insert([formData])

    setLoading(false)

    if (error) {
      setError(error.message)
    } else {
      setSuccess('Term added successfully!')
      setFormData({
        word: '',
        everyday_meaning: '',
        legal_meaning: '',
        example: '',
      })
      if (onSuccess) onSuccess()
    }
  }

 return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Add a New Legal Term</h2>

      <div className={styles.formGroup}>
        <label className={styles.label}>Word:</label>
        <input
          type="text"
          name="word"
          value={formData.word}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Everyday Meaning:</label>
        <textarea
          name="everyday_meaning"
          value={formData.everyday_meaning}
          onChange={handleChange}
          required
          className={styles.textarea}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Legal Meaning (UK Law):</label>
        <textarea
          name="legal_meaning"
          value={formData.legal_meaning}
          onChange={handleChange}
          required
          className={styles.textarea}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Example (Legal Context):</label>
        <textarea
          name="example"
          value={formData.example}
          onChange={handleChange}
          required
          className={styles.textarea}
        />
      </div>

      <button type="submit" disabled={loading} className={styles.submitButton}>
        {loading ? 'Adding...' : 'Add Term'}
      </button>

      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}
    </form>
  )
}