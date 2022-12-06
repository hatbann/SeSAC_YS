const mysql = require('mysql');

const cnn = mysql.createConnection({
  host: 'localhost',
  user: 'hyebin',
  password: '1234',
  database: 'sesac',
});

exports.get_visitor = (cb) => {
  var sql = 'SELECT * FROM user';

  cnn.query(sql, (err, rows) => {
    if (err) throw err;

    console.log('user:', rows);
    cb(rows);
  });
};

exports.register_visitor = (info, cb) => {
  // info = req.body; { name : "" , comment: "" }

  var sql = `insert into user(id, name, age) values('${info.id}', '${info.name}, ${info.int}');`;

  cnn.query(sql, (err, result) => {
    if (err) throw err;

    console.log('insert result:', result);
    cb(result.insertId);
  });
};
