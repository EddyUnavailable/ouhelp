'use client';

import { useEffect, useState } from 'react';

export default function TestLegislationViewer() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/test');
        if (!res.ok) throw new Error('Failed to fetch');
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p className="text-gray-600">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-4 max-w-xl mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Test Legislation Data</h1>
      <ul className="space-y-2">
        <li><strong>Name:</strong> {data.name}</li>
        <li><strong>Year:</strong> {data.year}</li>
        <li><strong>Chapter:</strong> {data.chapter}</li>
        <li><strong>Section:</strong> {data.section}</li>
      </ul>
    </div>
  );
}
