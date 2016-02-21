import jwt from 'jsonwebtoken';

exports.createToken = function(obj){
  const token = jwt.sign(obj, 'super-secret-password');
  return token;
};
