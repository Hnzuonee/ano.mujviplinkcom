exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }; // ✖ GET → 405
  }
  return {
    statusCode: 302,
    headers: {
      Location: 'https://onlyfans.com/kristynka.cengerova', // změň URL podle účtu
      'Cache-Control': 'no-cache'
    },
    body: ''
  };
};
