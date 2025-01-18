const express = require('express');
const app = express();
const path = require('path');


const imagePath = path.join(__dirname, 'public', 'icon.png');


app.get('/pixel', (req, res) => {
    res.sendFile(imagePath); 
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
