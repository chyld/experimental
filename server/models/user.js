import connect from '../lib/connect-db';
import security from '../lib/security';
import bcrypt from 'bcrypt';

class User {
  constructor(id, email){
    this.id = id;
    this.email = email;
  }

  createToken(){
    return security.createToken(this);
  }

  static isUser(email, cb){
    connect((err, client, done) => {
      client.query('select id from users where email=$1 limit 1', [email], (err, result) => {
        done();
        cb(err, result.rowCount);
      });
    });
  }

  static register({email, password}, cb){
    const hash = bcrypt.hashSync(password, 8);

    connect((err, client, done) => {
      client.query('insert into users (email, password) values ($1, $2) returning id', [email, hash], (err, result) => {
        done();
        const user = new User(result.rows[0].id, email);
        const token = user.createToken();
        cb(err, token);
      });
    });
  }
}

module.exports = User;
