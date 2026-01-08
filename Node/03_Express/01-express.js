const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

require('dotenv').config()

const port = process.env.PORT || 3000
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use('/', require('./router/rutas'));
app.use('/pokemon', require('./router/pokemon'));

//Conexión a base de datos
const mongoose = require('mongoose');
//Variables que tendremos siempre:
//Lo correcto será declararlas EN VARIABLES DE ENTORNO
//para que nadie vea directamente nuestras credenciales
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.orht9ch.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri)
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log(e))

/*
app.use((req,res) => {
    res.status(404).sendFile(__dirname + "/public/html/404.html")
})
*/
app.get('/pruebas', (req, res) => {
  res.render("pruebas",{titulo:"Viva españa", descripcion:"descripcion js funcionando"})
})

app.get('/pruebas2', (req, res) => {
  res.render("pruebas2",{titulo:"Viva españa 2", descripcion:"descripcion js funcionando 2"})
})

app.get('/contacto', (req, res) => {
    console.log(__dirname)
    res.send('Vamos con el contacto')
})

app.get('/about_us', (req, res) => {
    console.log(__dirname)
    res.send('Sobre mi')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
