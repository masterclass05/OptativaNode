const express = require('express')
const app = express()
const port = 3000

// [1] CONFIGURACIÓN BÁSICA
app.set('view engine', 'ejs')                                    // Configura EJS (no usado aquí)
app.use(express.static(__dirname + '/views'));                   // Sirve archivos estáticos /views/
app.use(express.static(__dirname + '/public'));                  // Sirve archivos estáticos /public/
app.use('/escuela', require('./router/escuela'));                // Monta router modular /escuela/*

/* [2] RUTAS PRINCIPALES (GET) */
app.get('/', (req, res) => {                                     // Ruta raíz
    res.send('Pantalla de imagen')                               // Respuesta texto plano
})

app.get('/Nuestras_Escuelas', (req, res) => {                    // Ruta escuelas
    res.send('nuestras escuelas')
})

app.get('/inicio', (req, res) => {                               // Ruta inicio
    res.send('Inicio de la pagina')
})

app.get('/Quienes_somos', (req, res) => {                        // Ruta sobre nosotros
    res.send('Sobre nosotros')
})

app.get('/Contacto', (req, res) => {                             // Ruta contacto
    res.send('nuestro contacto')
})

// [3] MANEJO DE ERRORES 404 (SIEMPRE AL FINAL)
app.use((req,res) => {                                           // Catch-all para rutas no definidas
    res.status(404).send('Error 404 - Página no encontrada')      // Respuesta 404
})

// [4] INICIO DEL SERVIDOR
app.listen(port, () => {                                         // Escucha puerto 3000
  console.log(`Example app listening on port ${port}`)           // Mensaje confirmación
})
