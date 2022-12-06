const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 8080;
const path = require('path');

const cnn = mysql.createConnection({
  host: 'localhost',
  user: 'hyebin',
  password: '1234',
  database: 'sesac',
});

app.use('/static', express.static('static'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  cnn.query('select * from user', (err, result) => {
    if (err) console.log(err);
    console.log(result);
    res.render('index', {
      rows: result,
    });
  });
});

app.listen(port, function () {
  console.log('Server Open : ', port);
});
