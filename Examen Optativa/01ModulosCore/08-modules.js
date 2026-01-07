var myData = require('./my-data')//No es necesaria la extensión .js/.json

console.log(
    myData.nombre,
    myData.correo,
    myData.telefono
)

var Reloj = require('./reloj')
var tula = new Reloj()
tula.on('tictac', function () {
    tula.theTime()
})
