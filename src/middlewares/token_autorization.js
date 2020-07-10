const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET, (err) => {
            if (err) {
                return res.status(400).send("Invalid token.");
            }
            return next();
        });
    } else {
        return res.status(401).send("No token provided.");
    }
};