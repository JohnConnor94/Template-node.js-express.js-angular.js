const port = 3000;
var path = require('path');
var express = require('express');
var app = express();
console.log(__dirname)
app.use(express.static(path.join(__dirname, '../client')));

app.get('*', function (req, res) {
    
    res.sendFile('index.html');
});

app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
})