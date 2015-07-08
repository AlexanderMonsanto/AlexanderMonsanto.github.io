var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + '/_include'));
app.use(express.static(__dirname + '/public'));

app.set('view-engine', 'ejs');



app.get('/', function(req, res){
  res.render('index.ejs')
});

app.listen(3000);
