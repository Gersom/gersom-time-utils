//  ---------------------
//  Función para obtener hora actual en formato numérico
//  ---------------------

function getHourAsNumber() {
  // Obtener la hora actual y los minutos actuales
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  
  // Calcular la hora en formato numérico (HHMM)
  const hourAsNumber = hours * 100 + minutes;

  return hourAsNumber;
}

// Ejemplos de uso:
// // Obtener hora numero actual (1500)
// const horaActual = getHourAsNumber();
// console.log(`La hora actual en formato numérico es: ${horaActual}`);

// // Establecer una hora específica (14:30)
// const otraHora = new Date('2023-09-17T14:30:00');
// const otraHoraNumerica = getHourAsNumber(otraHora);
// console.log(`Otra hora en formato numérico: ${otraHoraNumerica}`);

// // Establecer otra hora específica (09:15)
// const horaPersonalizada = new Date('2023-09-17T09:15:00');
// const horaPersonalizadaNumerica = getHourAsNumber(horaPersonalizada);
// console.log(`Hora personalizada en formato numérico: ${horaPersonalizadaNumerica}`);

module.exports = getHourAsNumber;