//  ---------------------
//  Función para normalizar una hora
//  ---------------------

function normalizeTime(time) {
  // Utilizamos una expresión regular para buscar un patrón de hora en la cadena.
  const match = time.match(/(\d{1,2}):?(\d{2})?\s?(AM|PM)?/i);

  if (match) {
    // Extraemos las partes de la hora encontradas en el patrón.
    let hours = parseInt(match[1], 10);
    const minutes = match[2] ? parseInt(match[2], 10) : 0;
    const period = match[3] ? match[3].toUpperCase() : '';

    // Ajustamos las horas según sea necesario para el formato de 24 horas.
    if (period === 'PM' && hours < 12) {
      hours += 12;
    } else if (period === 'AM' && hours === 12) {
      hours = 0;
    }
    
    // Construimos un número a partir de las horas y minutos en formato 'HHMM'.
    return hours * 100 + minutes;
  } else {
    // Devolvemos nulo si el formato de hora no es válido.
    return null;
  }
}

// Ejemplos de uso:

// console.log(normalizeTime('15:25 PM'));
// Debe mostrar: 1525

// console.log(normalizeTime('11am'));
// Debe mostrar: 1100

// console.log(normalizeTime('19:40'));
// Debe mostrar: 1940

module.exports = normalizeTime;