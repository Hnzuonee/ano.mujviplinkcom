// netlify/functions/of-redirect.js
exports.handler = async (event) => {
  const p = event.queryStringParameters || {};

  /* 1️⃣ pokud předáš celé URL v ?dest=… použij ji rovnou */
  if (p.dest) {
    return {
      statusCode: 302,
      headers: { Location: p.dest, "Cache-Control": "no-cache" }
    };
  }

  /* 2️⃣ jinak očekáváme jen nick v ?u= */
  const username = p.u || "kristynka.cengerova";

  /* 3️⃣ vyskládej cílovou adresu bez duplicitních parametrů */
  const dest = `https://onlyfans.com/${username}`;

  return {
    statusCode: 302,
    headers: { Location: dest, "Cache-Control": "no-cache" }
  };
};
