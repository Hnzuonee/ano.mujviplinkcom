// netlify/functions/of-redirect.js
exports.handler = async (event) => {
  /*
    Example call: /r/?u=kristynka.cengerova
    If ?u is missing, we fall back to default username below.
  */
  const params = event.queryStringParameters || {};
  const username = params.u || "kristynka.cengerova";
  const destination = `https://onlyfans.com/${username}`;

  return {
    statusCode: 302,
    headers: {
      Location: destination,
      "Cache-Control": "no-cache"
    }
  };
};
