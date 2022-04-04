const express = require('express')
const mongoose = require('mongoose')
const employeeRoutes = require('./routes/employee')

mongoose
    .connect(
        'mongodb+srv://primanoctem:22rf5aEQtmGxOr9p@cluster0.faczb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('Connexion à MongoDB réussie'))
    .catch(() => console.log('Connexion à MongoDB échouée'))

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
    )
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    )
    next()
})

app.use('/api/employee', employeeRoutes)

module.exports = app
