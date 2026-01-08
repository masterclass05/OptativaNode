var http = require('http').createServer(webServer), // [9] Servidor HTTP
    path = require('path'), // [9] Módulo rutas
    urls = [  // [9] Array rutas definidas
        { ruta: '', output: '<h2>Home</h2>' }, // [9] Ruta raíz
        { ruta: 'acerca', output: '<h2>Acerca</h2>' }, // [9] Ruta acerca
        { ruta: 'contacto', output: '<h2>Contacto</h2>' } // [8] Ruta contacto
    ]

function webServer(req, res) { // [8] Manejador peticiones
    var message = '<h1>Hola Node.js</h1>', // [8] Mensaje base
        pathURL = path.basename(req.url) // [8] Extrae nombre ruta (sin /)

    console.log("Ruta completa: " + req.url) // [8,10] Debug completo
    console.log("Ruta corta: " + pathURL) // [8,10] Debug basename

    // Busca ruta en array [10]
    urls.forEach(function(pos) { // [10] Recorre rutas
        if(pos.ruta == pathURL) { // [10] Coincidencia exacta
            res.writeHead(200, {'Content-Type':'text/html'}) // [10] OK
            res.end(message + pos.output) // [10] Respuesta personalizada
        }
    })
    
    // 404 si no encuentra ruta [10]
    if(!res.finished) { // [10] Verifica si ya respondió
        res.writeHead(404, {'Content-Type':'text/html'}) // [10] Error 404
        res.end('<h1>Error 404: Not Found</h1><br><h2>Eres un melon, la ruta no existe!!</h2>') // [10]
    }
} // [11]

http.listen(3000) // [8] Puerto
console.log('Servidor corriendo en http://localhost:3000/') // [8] Confirmación
