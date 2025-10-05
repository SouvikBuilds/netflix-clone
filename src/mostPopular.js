import fetch from "node-fetch";
import * as cheerio from "cheerio";

const url = "https://www.imdb.com/search/title/?companies=co0944055";

const getNetflixIndiaIDs = async () => {
  const res = await fetch(url);
  const html = await res.text();
  const $ = cheerio.load(html);

  // Find the hidden JSON data inside __NEXT_DATA__
  const jsonText = $("#__NEXT_DATA__").html();
  const data = JSON.parse(jsonText);

  // IDs are nested deep; this depends on IMDb's structure
  // For this page, you can find them under props.pageProps.mainColumnSections
  const sections = data.props.pageProps.mainColumnSections;

  let ids = [];
  for (const section of sections) {
    for (const item of section.items || []) {
      if (item.const) ids.push(item.const); // 'const' = IMDb ID like tt1234567
    }
  }

  console.log(ids);
};

getNetflixIndiaIDs();
