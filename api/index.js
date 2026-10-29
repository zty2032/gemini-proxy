export default async function handler(req, res) {
  const url = `https://generativelanguage.googleapis.com${req.url.replace(/^\/api/, '')}`;

  const options = {
    method: req.method,
    headers: {
      'content-type': 'application/json',
    },
  };

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    options.body = JSON.stringify(req.body);
  }

  const response = await fetch(url, options);
  const data = await response.text();

  res.status(response.status).send(data);
}
