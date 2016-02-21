import pg from 'pg';
const conString = "postgres://ubuntu:joy@localhost/astro";

module.exports = function(cb){
  pg.connect(conString, cb);
};
