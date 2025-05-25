import { NextResponse } from "next/server";
import { XMLParser } from "fast-xml-parser";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const path = searchParams.get("path");

  if (!path) {
    return NextResponse.json(
      { error: "Missing path (e.g. ukpga/2003/44)" },
      { status: 400 }
    );
  }

  const url = `https://www.legislation.gov.uk/${path}/data.xml`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch act contents: ${response.status}` },
        { status: response.status }
      );
    }

    const xml = await response.text();

    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
      isArray: (tagName, jPath) =>
        [
          "Legislation.Primary.Body.Section",
          "Legislation.Primary.Body.Part.Section",
          "Legislation.Primary.Body.Part",
          "Legislation.Primary.Body.Section.Subsection",
          "Legislation.Primary.Body.Part.Section.Subsection"
        ].includes(jPath),
    });

    const json = parser.parse(xml);
    const body = json?.Legislation?.Primary?.Body;

    if (!body) {
      return NextResponse.json({ error: "No body found in act" }, { status: 404 });
    }

    const sections = [];

    function extractSections(obj) {
      if (!obj || typeof obj !== 'object') return;

      const sectionArray = Array.isArray(obj.Section)
        ? obj.Section
        : obj.Section
        ? [obj.Section]
        : [];

      for (const sec of sectionArray) {
        const id = sec?.["@_id"] || null;
        const title = typeof sec.Title === "string" ? sec.Title : null;
        const subsections = [];

        const subArray = Array.isArray(sec.Subsection)
          ? sec.Subsection
          : sec.Subsection
          ? [sec.Subsection]
          : [];

        for (const sub of subArray) {
          if (typeof sub === "object" && sub?.["@_id"]) {
            subsections.push({
              id: sub["@_id"],
              title: typeof sub.Title === "string" ? sub.Title : null,
            });
          }
        }

        if (id && title) {
          sections.push({ id, title, subsections });
        }
      }

      for (const key of Object.keys(obj)) {
        if (typeof obj[key] === 'object') {
          extractSections(obj[key]);
        }
      }
    }

    extractSections(body);

    return NextResponse.json({ sections });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
