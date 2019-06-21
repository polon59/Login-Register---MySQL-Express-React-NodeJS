const jwt = require('jsonwebtoken');
const secret = 'secret';

const withAuth = function(req, res, next) {
  console.log(req.cookies)
  const token =
    req.headers['x-access-token'] || req.cookies['token'];

  if (!token) {
    console.log("Unauthorized: No token provided" + token)
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        console.log("Unauthorized: Invalid token" + token)
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        req.id = decoded.id;
        next();
      }
    });
  }
}
module.exports = withAuth;