var http = require('http').createServer(webServer), // [5] Servidor HTTP
    fs = require('fs') // [6] Módulo archivos

function webServer(req, res) { // [6] Manejador peticiones
    function readFile(err, data) { // [6] Callback lectura archivo
        if(err) throw err // [6] Manejo error
        res.end(data) // [6] Envía contenido archivo
    }
    res.writeHead(200, {'Content-Type':'text/html'}) // [6] Header HTML
    fs.readFile('recursos/index.html', readFile) // [6] Lectura ASÍNCRONA
} // [7]

http.listen(3000) // [7] Inicia servidor
console.log('Servidor corriendo en http://localhost:3000/') // [7] Confirmación
