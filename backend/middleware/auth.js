const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET')
        const employeeId = decodedToken.employeeId
        req.auth = { employeeId }
        if (req.body.employeeId && req.body.employeeId !== employeeId) {
            // eslint-disable-next-line no-throw-literal
            throw 'Wrong employee ID'
        } else {
            next()
        }
    } catch (error) {
        res.status(401).json({ error: error | 'Unauthentified request' })
    }
}
