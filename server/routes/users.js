import express from 'express';
const router = express.Router();
var pg = require('pg');

router.post('/', (req, res) => {
  const conString = "postgres://ubuntu:joy@localhost/astro";
  pg.connect(conString, function(err, client, done) {
    client.query('INSERT INTO users (email, password) VALUES ($1, $2)', [req.body.email, req.body.password], function(err, result) {
      res.send('Birds home page');
      done();
    });
  });
});

module.exports = router;
