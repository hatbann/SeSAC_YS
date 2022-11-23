const express = require('express');
const app = express();
const port = 8080;

app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true })); // x-www-unlencoded 데이터 해성
app.use(express.json()); //json형태로

app.set('view engine', 'ejs'); //html 이 아닌 ejs를 view engine으로 쓰겠다

app.get('/', (req, res) => {
  res.send('기본 화면');
});

app.get('/formReview', (req, res) => {
  res.render('formReview');
});

app.get('/reviewGet', (req, res) => {
  console.log(req.query);
  res.render('getReview', {
    id: req.query.id,
    gender: req.query.gender,
    content: req.query.content,
  });
});

app.post('/reviewPost', (req, res) => {
  console.log(req.body);
  res.render('postReview', {
    id: req.body.id,
    gender: req.body.gender,
    hobby: req.body.hobby,
  });
});

app.listen(port, () => {
  console.log('server Open');
});
