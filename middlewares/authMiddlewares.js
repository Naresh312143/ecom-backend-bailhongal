const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({
        message: "Invalid token. Login again",
      });
    }

    const data = jwt.verify(token, process.env.JWT_SECRET);

    req.user = data;

    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid token. Login again",
    });
  }
};

module.exports = {
  isAuth,
};
