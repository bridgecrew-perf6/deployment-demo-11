const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, ''))
})
/*
when heroku hosts the app it proviedes its own port number, if we are hostin locally though, it wil be on port 4005
*/
const port = process.env.PORT || 4005;

app.listen(port, () => {

});