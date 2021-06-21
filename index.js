const express = require('express')
const mw = require('./src/middlewares/detail')

const APP_PORT = 8080
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))


app.get('/', (req, res) => {
    return res.json({
        success: true,
        message: "Indra's Backend is running well"
    })
})

app.use('/users', mw({}), require('./src/routes/users'))

app.listen(APP_PORT, () => {
    console.log(`App is running on port ${APP_PORT}`)
})