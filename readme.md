# Ger Time Utilities

Author: Gersom
Version: 1.1.0

This set of functions provides useful tools for manipulating and comparing times in different formats. These functions are especially helpful when working with schedules and tasks such as normalizing times, comparing if two times are equal, or checking if the current time falls within a specified range.

Este conjunto de funciones proporciona herramientas útiles para manipular y comparar horas en diferentes formatos. Estas funciones son especialmente útiles cuando se trabaja con horarios y se necesita realizar tareas como normalizar horas, comparar si dos horas son iguales o verificar si la hora actual se encuentra dentro de un rango especificado.

## Contents

- [Available Functions](#available-functions)
- [Accepted Formats](#accepted-formats)
- [Installation](#installation)
- [How to Use the Functions](#how-to-use-the-functions)
- [Keywords](#keywords)

## Available Functions

### `compareTimes(time1, time2)`

This function allows you to compare if two times are equal. It accepts two parameters, `time1` and `time2`, which represent the times to compare. The times can be in different formats, as the function internally normalizes them before comparison.

### `normalizeTime(time)`

The `normalizeTime` function is used to normalize a time in various formats to a numeric format. It accepts a `time` parameter that represents the time in different formats and returns the normalized time as a number.

### `getHourAsNumber([TimeZone])`

The `getHourAsNumber` function returns the current time in numeric format. This is useful for obtaining the current time in a numeric format such as 'HHMM', where 'HH' represents the hours and 'MM' represents the minutes. You can optionally provide a `TimeZone` parameter to get the time in a specific time zone. Example time zones: ['America/Lima', 'Europe/Madrid', 'America/Mexico_City', 'America/New_York'].

### `isCurrentTimeInRange(startTime, endTime)`

The `isCurrentTimeInRange` function is used to determine if the current time falls within a specified range of hours. It accepts two parameters, `startTime` and `endTime`, which represent the range of hours in the format of 'HH:mm AM/PM'. The function uses the `normalizeTime` and `getHourAsNumber` functions to perform this check.

## Accepted Formats

The functions in this set accept a variety of time formats, including:

- 'HH:mm'
- 'hham/pm'
- 'hh am/pm'
- 'hh:mmam/pm'
- 'hh:mm am/pm'

## Installation

You can install this package using npm, pnpm, or yarn:

```terminal
npm install gersom-time-utils
pnpm install gersom-time-utils
bun install gersom-time-utils
yarn add gersom-time-utils
```

## How to Use the Functions

```javascript
const { compareTimes, normalizeTime, getHourAsNumber, isCurrentTimeInRange } = require('gersom-time-utils');

// Example of comparing times
const result = compareTimes('15:30 PM', '03:30pm');
console.log(result); // True or False

// Example of time normalization
const normalizedHour = normalizeTime('9:15 AM');
console.log(normalizedHour); // Should display 0915

// Example of obtaining the current time in numeric format
const currentHour = getHourAsNumber(); // getHourAsNumber('America/New_York')
console.log(currentHour); // Should display the current time in numeric format, e.g., 1430

// Example of checking if the current time is within a range
const inRange = isCurrentTimeInRange('09:00 AM', '17:00 PM');
if (inRange) {
  console.log('The current time is within the specified range.');
} else {
  console.log('The current time is not within the specified range.');
}
```

==================================

# Ger Time Utilities - Español

Autor: Gersom
Versión: 1.1.0

Este conjunto de funciones proporciona herramientas útiles para manipular y comparar horas en diferentes formatos. Estas funciones son especialmente útiles cuando se trabaja con horarios y se necesita realizar tareas como normalizar horas, comparar si dos horas son iguales o verificar si la hora actual se encuentra dentro de un rango especificado.

## Contenido

- [Funciones Disponibles](#funciones-disponibles)
- [Formatos Aceptados](#formatos-aceptados)
- [Instalación](#instalación)
- [Uso de las Funciones](#uso-de-las-funciones)
- [Keywords](#keywords)

## Funciones Disponibles

### `compareTimes(hora1, hora2)`

Esta función permite comparar si dos horas son iguales. Acepta dos parámetros, `hora1` y `hora2`, que representan las horas a comparar. Las horas pueden estar en diferentes formatos, ya que la función las normaliza internamente antes de la comparación.

### `normalizeTime(hora)`

La función `normalizeTime` se utiliza para normalizar una hora en diferentes formatos a un formato numérico. Acepta un parámetro `hora` que representa la hora en diferentes formatos y devuelve la hora normalizada como un número.

### `getHourAsNumber([ZonaHoraria])`

La función `getHourAsNumber` devuelve la hora actual en formato numérico. Esto es útil para obtener la hora actual en un formato numérico como 'HHMM', donde 'HH' representa las horas y 'MM' representa los minutos. Opcionalmente, puedes proporcionar un parámetro `ZonaHoraria` para obtener la hora en una zona horaria específica. Ejemplos de zonas horarias: ['America/Lima', 'Europe/Madrid', 'America/Mexico_City', 'America/New_York'].

### `isCurrentTimeInRange(startTime, endTime)`

La función `isCurrentTimeInRange` se utiliza para determinar si la hora actual está dentro de un rango de horas especificado. Acepta dos parámetros, `startTime` y `endTime`, que representan el rango de horas en formato de cadena ('HH:mm AM/PM'). La función utiliza las funciones `normalizeTime` y `getHourAsNumber` para realizar esta verificación.

## Formatos Aceptados

Las funciones de este conjunto aceptan una variedad de formatos de hora, incluyendo:

- 'HH:mm'
- 'hham/pm'
- 'hh am/pm'
- 'hh:mmam/pm'
- 'hh:mm am/pm'

## Instalación

Puedes instalar este paquete utilizando npm, pnpm o yarn:

```terminal
npm install gersom-time-utils
pnpm install gersom-time-utils
bun install gersom-time-utils
yarn add gersom-time-utils
```

## Uso de las Funciones

```javascript
const { compareTimes, normalizeTime, getHourAsNumber, isCurrentTimeInRange } = require('gersom-time-utils');

// Ejemplo de comparación de horas
const result = compareTimes('15:30', '03:30pm');
console.log(result); // Debe devolver true

// Ejemplo de normalización de hora
const normalizedHour = normalizeTime('9:15 AM');
console.log(normalizedHour); // Debe mostrar 0915

// Ejemplo de obtención de la hora actual en formato numérico
const currentHour = getHourAsNumber(); // getHourAsNumber('America/New_York')
console.log(currentHour); // Debería mostrar la hora actual en formato numérico, por ejemplo, 1430

// Ejemplo de verificación si la hora actual está en un rango
const inRange = isCurrentTimeInRange('09:00 AM', '17:00 PM');
if (inRange) {
  console.log('La hora actual está dentro del rango especificado.');
} else {
  console.log('La hora actual no está dentro del rango especificado.');
}
```

## Keywords

- time
- date
- tiempo
- fecha
- timestamp
- ms
- dateTime
- dateDate
- diffDate
- formatDate
- formatMs
- get
- getCompareDate
- getDate
- getTime
- getNextTime
- getMs
- getFormatDate

palabras clave relacionadas con las funciones disponibles en este paquete.
