var jwt = require("jsonwebtoken");

const jwt_secret = "this is not a secret";
const fetchuser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "access denied" });
  }

  try {
    const data = jwt.verify(token, jwt_secret);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "access denied" });
  }
};

module.exports = fetchuser;
