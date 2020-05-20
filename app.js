const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const users = require('./src/routes/users')

app.use(users)

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Listen on ${port}`)
})