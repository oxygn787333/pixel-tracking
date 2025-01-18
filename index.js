const express = require('express');
const app = express();
const path = require('path');


const imagePath = path.join(__dirname, 'public', 'icon.png');


app.get('/pixel', (req, res) => {
    res.sendFile(imagePath); 

const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
const userAgent = req.headers['user-agent'];
const referer = req.headers['referer'];


  console.log({
    timestamp: new Date().toISOString(),
    ip: clientIP,
    userAgent,
    referer,
  });

    
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
