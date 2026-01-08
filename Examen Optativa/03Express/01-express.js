const express = require('express')
const app = express()
const port = 3000

// Configuración del motor de plantillas EJS y la ruta de las vistas
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

// Middleware para servir archivos estáticos (CSS, JS, imágenes)
app.use(express.static(__dirname + '/public'));

// Ruta principal (/)
app.get('/', (req, res) => {
    res.render("index", {titulo: "mi titulo dinámico"})
})

// Ruta /contacto
app.get('/contacto', (req, res) => {
    res.render("contacto", {tituloContacto: "Estamos en contacto de manera dinámica!!"})
})

// Middleware de Error 404
app.use((req, res) => {
    res.status(404).render("404", {
        titulo: "Error 404",
        descripcion: "Page Not Found"
    })
})

// Inicia el servidor
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
