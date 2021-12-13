const express = require('express');

const app = express();
const path = require("path");


app.use('/public', express.static(__dirname + '/public'));


app.get('/', function (req, res) {
    res.redirect('/public/index.html');
    return;
});
//cookie parser
// app.use(cookieParser())
//Body Parser
app.use(express.json())

app.use(express.urlencoded({ extended: true }))





const port = process.env.PORT || 7000;

app.listen(port, () => {
    console.log(`Server connected to port ${port}`)
})