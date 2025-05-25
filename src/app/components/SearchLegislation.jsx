"use client";
import { useState, useEffect } from "react";

const SearchLegislation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLegislation, setSelectedLegislation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Debounce the input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Search API call
  useEffect(() => {
    if (!debouncedTerm) {
      setSearchResults([]);
      return;
    }

    setLoading(true);
    fetch(`/api/legislation/search?name=${encodeURIComponent(debouncedTerm)}`)
      .then(res => res.json())
      .then(data => {
        setSearchResults(data.sections || []);
        setError("");
      })
      .catch(err => setError("Search failed."))
      .finally(() => setLoading(false));
  }, [debouncedTerm]);

  const handleSelect = (year, chapter, section) => {
    setLoading(true);
    fetch(`/api/legislation/${year}/${chapter}/${section}`)
      .then(res => res.json())
      .then(data => {
        setSelectedLegislation(data.section || []);
        setError("");
      })
      .catch(err => setError("Failed to fetch section."))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for legislation titles"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {searchResults.map((result, i) => (
          <li
            key={`${result.title}-${i}`}
            onClick={() => handleSelect(result.year, result.chapter, result.section)}
            style={{ cursor: "pointer", margin: "5px 0" }}
          >
            {result.title} ({result.year}, c.{result.chapter}, s.{result.section})
          </li>
        ))}
      </ul>

      {selectedLegislation.length > 0 && (
        <div>
          {selectedLegislation.map((section, index) => (
            <div key={index}>
              <h3>
                Section {section.number} – {section.title}
              </h3>
              {section.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchLegislation;
