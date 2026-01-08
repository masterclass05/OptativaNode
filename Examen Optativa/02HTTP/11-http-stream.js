var http = require('http').createServer(webServer), // [4] Servidor HTTP
    fs = require('fs'), // [4] Módulo sistema archivos
    index = fs.createReadStream('recursos/index.html') // [4] Stream lectura archivo HTML

function webServer(req, res) { // [4] Manejador peticiones
    res.writeHead(200, {'Content-Type':'text/html'}) // [4] Header respuesta
    index.pipe(res) // [4,5] Stream → Respuesta (eficiente, NO carga completa en memoria)
}

http.listen(3000) // [4] Puerto servidor
console.log('Servidor corriendo en http://localhost:3000/') // [4] Confirmación
