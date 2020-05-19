const express = require('express')

const app = express()

const users = require('./src/routes/users')

app.use(users)

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Listen on ${port}`)
})