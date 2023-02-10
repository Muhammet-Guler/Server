	
const express = require('express');
	
const app = express();

app.get('/', (req, res) => {
    res.send('Second Version !');
    res.end();
});

app.get('/kategoriler', (req, res) => {
    res.send('<h1>Kategoriler Sayfasına Hoşgeldiniz</h1>');
    res.end();
});

app.listen(3000, () => {
    console.log('Ilk NodeJS uygulaması 3000 portunda çalışıyor');
});