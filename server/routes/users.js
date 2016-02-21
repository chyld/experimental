import express from 'express';
import User from '../models/user';
const router = express.Router();

router.post('/', (req, res) => {
  User.isUser(req.body.email, (err, count) => {
    if(count) return res.status(400).end();

    User.register(req.body, (err, token) => {
      res.send({token: token});
    });
  });
});

module.exports = router;
