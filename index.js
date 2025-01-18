const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Transparent pixel (1x1 GIF)
const pixel = Buffer.from(
  "R0lGODlhAQABAPAAAP///wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==", 
  "base64"
);

app.get('/pixel', (req, res) => {
  const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const userAgent = req.headers['user-agent'];
  const referer = req.headers['referer'];

  console.log({
    timestamp: new Date().toISOString(),
    ip: clientIP,
    userAgent,
    referer,
  });

  res.setHeader('Content-Type', 'image/gif');
  res.send(pixel);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
