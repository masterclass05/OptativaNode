var name = 'javier',
   email = 'javier.prada@fpjunta.es',
   phone = '635338353'

var Reloj = (function () {
   var EventEmitter = require('events').EventEmitter,
       hereda = require('util').inherits
   var Clock = function () {
       var self = this
       setInterval(function () {
           self.emit('tictac')
       }, 1000)
   }
   hereda(Clock, EventEmitter)
   Clock.prototype.theTime = function () {
       var date = new Date(),
           hrs = date.getHours(),
           min = date.getMinutes(),
           sec = date.getSeconds(),
           msg = hrs + ':' + min + ':' + sec
       console.log(msg)
   }
   return Clock
})()


module.exports = Reloj



module.exports.bar = function bar() {
  console.log('bar')
}



module.exports.nombre = name //Exportamos el name
module.exports.correo = email //Exportamos el email
module.exports.telefono = phone //Exportamos el telefono


