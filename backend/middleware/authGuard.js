function authGuard(req, res, next) {

    const token = req.headers.authorization;

    if (token === "Bearer mytoken") {
        next();
    } else {
        res.status(401).json({
            message: "Unauthorized"
        });
    }

}

module.exports = authGuard;