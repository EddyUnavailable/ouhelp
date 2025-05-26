// // app/api/random-word/route.js

// export async function GET() {
//   const WORDNIK_API_KEY = 'YOUR_API_KEY';

//   try {
//     // Step 1: Get a random word
//     const wordRes = await fetch(
//       `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=100&api_key=${WORDNIK_API_KEY}`
//     );
//     const { word } = await wordRes.json();

//     // Step 2: Get definition
//     const defRes = await fetch(
//       `https://api.wordnik.com/v4/word.json/${word}/definitions?limit=1&api_key=${WORDNIK_API_KEY}`
//     );
//     const definitions = await defRes.json();

//     return Response.json({
//       word,
//       definition: definitions[0]?.text || 'No definition found.',
//       partOfSpeech: definitions[0]?.partOfSpeech || 'Unknown',
//     });
//   } catch (error) {
//     return Response.json(
//       { error: 'Failed to fetch word data' },
//       { status: 500 }
//     );
//   }
// }
