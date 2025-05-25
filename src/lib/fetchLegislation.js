import xml2js from 'xml2js';

export async function fetchLegislationSection({ year, chapter, section }) {
  const url = `http://www.legislation.gov.uk/ukpga/${year}/${chapter}/section/${section}/data.xml`;

  try {
    const res = await fetch(url);
    
    // Check if the request was successful
    if (!res.ok) {
      throw new Error(`Failed to fetch legislation section: ${res.statusText}`);
    }

    const text = await res.text();

    // Parse the XML to a JavaScript object
    const parser = new xml2js.Parser();
    const parsedData = await parser.parseStringPromise(text);

    // For debugging: Log the parsed XML structure
    console.log(parsedData);

    // Return the parsed data to the calling function
    return parsedData;

  } catch (err) {
    console.error("Error fetching or parsing legislation:", err);
    throw err;
  }
}
