function Satpam(req, res, next) {
    const token = req.cookies?.token

    if(!token) res.redirect('/')
    else return next()
}

module.exports = Satpam