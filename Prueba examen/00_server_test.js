const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use('views', express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));
app.use('/escuela', require('./router/escuela'));


/*
app.use((req,res) => {
    res.status(404).sendFile(__dirname + "/public/html/404.html")
})
*/
app.get('/', (req, res) => {
    console.log(__dirname)
    res.send('Pantalla de imagen')
})

app.get('/Nuestras_Escuelas', (req, res) => {
    console.log(__dirname)
    res.send('nuestras escuelas')
})

app.get('/inicio', (req, res) => {
    console.log(__dirname)
    res.send('Inicio de la pagina')
})

app.get('/Quienes_somos', (req, res) => {
    console.log(__dirname)
    res.send('Sobre nosotros')
})

app.get('/Contacto', (req, res) => {
    console.log(__dirname)
    res.send('nuestro contacto')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
