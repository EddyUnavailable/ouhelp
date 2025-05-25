"use client";

import { useState, useEffect } from "react";
import sanitizeHtml from "sanitize-html";
import styles from "@/styles/legislation.module.css";

export default function LegislationPage() {
  const [result, setResult] = useState(null); // You’ll need to pass actual data into `setResult`
  const [sectionContent, setSectionContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const renderHTML = () => {
    if (!result) {
      console.log("renderHTML: No result available");
      return null;
    }

    const legislation = result.Legislation;
    if (!legislation) {
      console.log("renderHTML: No Legislation found in result", result);
      return <p>No content found.</p>;
    }

    const metadata = legislation["ukm:Metadata"]?.[0];
    if (!metadata) {
      console.log("renderHTML: Metadata not found in legislation", legislation);
      return <p>No metadata found.</p>;
    }

    const title = metadata["dc:title"]?.[0] || "No Title Found";
    const description = metadata["dc:description"]?.[0] || "No Description Found";

    return (
      <div className={styles.resultContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div
          className={styles.sectionContent}
          aria-live="polite"
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(sectionContent || "No content loaded yet."),
          }}
        />
        {isLoading && <p className={styles.loading}>Loading content...</p>}
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  };

  useEffect(() => {
    if (!result) {
      console.log("useEffect: result is null, skipping fetch");
      return;
    }

    console.log("useEffect: result loaded", result);

    const legislation = result.Legislation;
    if (!legislation) {
      console.warn("useEffect: result.Legislation is undefined");
      return;
    }

    const metadata = legislation?.["ukm:Metadata"]?.[0];
    if (!metadata) {
      console.warn("useEffect: metadata is undefined in legislation", legislation);
      return;
    }

    const sectionLink = metadata?.["atom:link"]?.find(
      (link) => link.$.type === "application/xhtml+xml"
    );

    if (!sectionLink) {
      console.warn("useEffect: No xhtml link found in metadata", metadata);
      return;
    }

    console.log("useEffect: Fetching XHTML from", sectionLink.$.href);

    const controller = new AbortController();
    setIsLoading(true);
    setError("");
    setSectionContent("");

    fetch(sectionLink.$.href, { signal: controller.signal })
      .then((response) => {
        console.log("Fetch response:", response);
        return response.text();
      })
      .then((xhtmlContent) => {
        console.log("Fetched XHTML content:", xhtmlContent.slice(0, 500)); // Just show part of it
        const parser = new DOMParser();
        const doc = parser.parseFromString(xhtmlContent, "application/xhtml+xml");
        const body = doc.querySelector("body");
        const content = body ? body.innerHTML : "No content found in the section.";
        console.log("Parsed body content:", content.slice(0, 500));
        setSectionContent(content);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        console.error("Error fetching section:", err);
        setError("Failed to fetch section content.");
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort(); // Cleanup on unmount
  }, [result]);

  return <div className={styles.page}>{renderHTML()}</div>;
}
