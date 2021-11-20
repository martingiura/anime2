// Imports
const express = require('express')
const app = express()

require('dotenv').config()

const path = require('path')

const connectDB = require('./config/db')

const bodyParser = require('body-parser')

// Middlewares
// Es una funcion que se ejecuta despues de recibir una peticion y antes de dar una respuesta
// Trabajar con archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended:true}))

// Configuraciones
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

connectDB()

// Routes
// Home
app.get('/', (req, res) => {
    res.render('index')
})

//Animes

app.use("/animes", require("./routes/animes.router"))

// Server
app.listen(process.env.PORT, () => {
    console.log(`Server on port: http://localhost:${process.env.PORT}`)
})