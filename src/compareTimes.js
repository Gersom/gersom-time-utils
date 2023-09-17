//  ---------------------
//  Función para comparar si 2 horas son iguales
//  ---------------------

const normalizeTime = require('./normalizeTime');

function compareTimes(time1, time2) {
  // Normalizar ambas horas
  const normalizedTime1 = normalizeTime(time1);
  const normalizedTime2 = normalizeTime(time2);

  // Comparar las horas normalizadas
  if (normalizedTime1 === null || normalizedTime2 === null) {
    console.log(normalizedTime1, normalizedTime2)
    // "Formato de hora no válido";
    return null
  } else if (normalizedTime1 === normalizedTime2) {
    // return "Las horas son iguales";
    return true
  } else {
    // return "Las horas son diferentes";
    return false
  }
}

module.exports = compareTimes;