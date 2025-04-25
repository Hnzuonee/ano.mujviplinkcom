// netlify/functions/of-redirect.js
exports.handler = async (event) => {
  const params = event.queryStringParameters || {};
  const user = params.u || "kristynka.cengerova";
  return {
    statusCode: 302,
    headers: {
      Location: `https://onlyfans.com/${user}`,
      "Cache-Control": "no-cache"
    }
  };
};
