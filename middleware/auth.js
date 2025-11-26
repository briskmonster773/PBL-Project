function ensureAuth(req, res, next) {
    if (req.session && req.session.userId) return next();
    res.redirect("/login");
}

function ensureGuest(req, res, next) {
    if (req.session && req.session.userId) return res.redirect("/dashboard");
    next();
}

module.exports = { ensureAuth, ensureGuest };
