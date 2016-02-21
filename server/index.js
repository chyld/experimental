import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../.pub'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8080, () => {
  console.log('Express.js: ***Listening***');
});

app.use('/users', require('./routes/users'));
