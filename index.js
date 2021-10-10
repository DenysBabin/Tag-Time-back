const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const http = require('http')
const cors = require('cors')
const { routes } = require('./src/routes')



// Настроим подключение к бд

mongoose.connect(
    'mongodb://localhost:27017/tag-time',
    {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    }
)

// Инициализирукм приложение
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

routes.forEach((item) => {
    app.use(`/api/${item}`, require(`./src/routes/${item}`))
})

// Обьявим наши роуты
const PORT = 3000
http.createServer({}, app).listen(PORT)
console.log(`Server running at ${PORT}`)
