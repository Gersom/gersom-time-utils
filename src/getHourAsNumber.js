//  ---------------------
//  Función para obtener hora actual en formato numérico
//  ---------------------

function getHourAsNumber(targetTimeZone = null) {
  if (targetTimeZone === null) {
    // Si targetTimeZone es null, obtener la hora actual en la zona horaria local
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    
    // Calcular la hora en formato numérico (HHMM)
    const hourAsNumber = hours * 100 + minutes;
    
    return hourAsNumber;
  } else {
    // Si se proporciona targetTimeZone, obtener la hora en esa zona horaria
    const options = {
      timeZone: targetTimeZone,
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    };
  
    const currentTime = new Date().toLocaleString('en-US', options);
  
    // Parsear la hora en formato HH:MM a un número
    const [hours, minutes] = currentTime.split(':').map(Number);
    const hourAsNumber = hours * 100 + minutes;
  
    return hourAsNumber;
  }
}



// ['America/Lima','Europe/Madrid' ,'America/Mexico_City','America/New_York']

// Ejemplos de uso:
// // Ejemplo de uso sin especificar targetTimeZone (usando la zona horaria local)
// const hourAsNumberLocal = getHourAsNumber();
// console.log(`La hora actual en la zona horaria local en formato numérico es: ${hourAsNumberLocal}`);

// // Ejemplo de uso con targetTimeZone especificado
// const targetTimeZone = 'America/New_York'; // Cambia a la zona horaria deseada
// const hourAsNumberNewYork = getHourAsNumber(targetTimeZone);
// console.log(`La hora actual en ${targetTimeZone} en formato numérico es: ${hourAsNumberNewYork}`);

module.exports = getHourAsNumber;