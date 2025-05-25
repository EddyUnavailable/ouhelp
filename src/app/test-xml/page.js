'use client';
import { useState } from 'react';

export default function TestXMLPage() {
  const [year, setYear] = useState('');
  const [chapter, setChapter] = useState('');
  const [xmlData, setXmlData] = useState('');
  const [error, setError] = useState('');

  const fetchXml = async () => {
    try {
      setError('');
      const res = await fetch(`/api/legislation/xml?year=${year}&chapter=${chapter}`);
      if (!res.ok) throw new Error('Failed to fetch XML');
      const text = await res.text();
      setXmlData(text);
    } catch (err) {
      setError(err.message);
      setXmlData('');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🔍 Test UK Legislation XML Fetch</h1>
      <div>
        <input
          type="text"
          placeholder="Year (e.g. 2003)"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Chapter (e.g. 44)"
          value={chapter}
          onChange={(e) => setChapter(e.target.value)}
          style={{ marginLeft: '1rem' }}
        />
        <button onClick={fetchXml} style={{ marginLeft: '1rem' }}>
          Fetch XML
        </button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {xmlData && (
        <pre
          style={{
            whiteSpace: 'pre-wrap',
            marginTop: '2rem',
            background: '#f0f0f0',
            padding: '1rem',
            maxHeight: '600px',
            overflowY: 'scroll',
          }}
        >
          {xmlData}
        </pre>
      )}
    </div>
  );
}
