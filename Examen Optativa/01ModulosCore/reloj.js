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
            hrsAmPm = (date.getHours() > 12) ? (date.getHours() - 12) : date.getHours(),
            hrs = addZero(hrsAmPm),
            min = addZero(date.getMinutes()),
            sec = addZero(date.getSeconds()),
            ampm = (date.getHours() < 12) ? 'am' : 'pm',
            msg = hrs + ':' + min + ':' + sec + ' ' + ampm

        function addZero(num){
            return (num<10) ? ('0' + num) : num  
            //Esto quiere decir que primero evalúe si num es menor que 10 y,en caso afirmativo, 
            // queremos que a la variable num se le concatene un 0. En caso contrario, devolverá num sin más.
        }
        console.log(msg)
    }
    return Clock
})()
module.exports = Reloj