//  ---------------------
//  Imports components
//  ---------------------

// comparar si 2 horas son iguales
// compareTimes(time1, time2)
const compareTimes = require('./src/compareTimes');

// normalizar una hora
// normalizeTime(time) = 1200
const normalizeTime = require('./src/normalizeTime');

// obtener hora actual en formato numérico
// getHourAsNumber()
const getHourAsNumber = require('./src/getHourAsNumber');

// determinar si la hora actual está dentro de un rango especifico
// isCurrentTimeInRange(startTime, endTime)
const isCurrentTimeInRange = require('./src/isCurrentTimeInRange');

//  ---------------------
//  Formatos aceptados
//  ---------------------
// 'HH:mm',
// 'hham/pm'
// 'hh am/pm'
// 'hh:mmam/pm'
// 'hh:mm am/pm'

module.exports = {
  compareTimes,
  normalizeTime,
  getHourAsNumber,
  isCurrentTimeInRange
}