	
const express = require('express');
	
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World !');
    res.end();
});

app.listen(3000, () => {
    console.log('Ilk NodeJS uygulaması 3000 portunda çalışıyor');
});