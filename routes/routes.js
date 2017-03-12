var router = require('express').Router();
var pg = require('pg');

var config = {
  database: 'phi',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};

var pool = new pg.Pool(config);

router.get('/', function(req, res) {
  console.log('hit my get employees route');
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      // SELECT * FROM task;
      client.query('SELECT * FROM employees', function(err, result) {
        done(); // close the connection db
        if(err){
          console.log(err);
          res.sendStatus(500); // the world exploded
        }else{
          console.log(result.rows);
          res.status(200).send(result.rows);
        }
      });
    }
  });
});

router.post('/new', function(req, res) {
  console.log('hit post route');
  console.log('here is the body ->', req.body);

  var employeeObject = req.body;

  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      client.query('INSERT INTO employees (name, last_name, employee_id, job_title, salary) VALUES ($1, $2, $3, $4, $5);',
        [employeeObject.name, employeeObject.last_name, employeeObject.employee_id, employeeObject.job_title, employeeObject.salary], function(err, result) {
          done();
          if(err){
            console.log(err);
            res.sendStatus(500); // the world exploded
          }else{
            res.sendStatus(201);
          }
      });
    }
  });
});

module.exports = router;
