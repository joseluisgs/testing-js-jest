/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
// Imporramos nuestros módulos
import {
  sumar, restar, multiplicar, dividir,
} from './funciones';

import { persona1, persona2 } from './persona';

import {
  isFalse, isNull, isTrue, isUndefined,
} from './boolean';

import { provincias, dias } from './arrays';

import strings from './strings';

import { callback, axiosGet } from './asincronia';

console.log('Hola');
console.log('Esto es una prueba de test');

console.log('Ejecutando las funciones');
console.log(`Sumar (1,1) = 2 -> ${sumar(1, 1)}`);
console.log(`Restar (1,1) = 0 -> ${restar(1, 1)}`);
console.log(`Multiplicar (2,2) = 4 -> ${multiplicar(2, 2)}`);
console.log(`Dividir (4,2) = 2 -> ${dividir(4, 2)}`);

console.log('Mostrando Objetos Persona');
console.log(`Persona1 ->${persona1.nombre} - ${persona1.edad}`);
console.log(`Persona2 ->${persona2.nombre} - ${persona2.edad}`);

console.log('Trabajando con boolean, nulos y undefined');
console.log(`isFalse -> ${isFalse()}`);
console.log(`isNull -> ${isNull()}`);
console.log(`isTrue -> ${isTrue()}`);
console.log(`isUndefined -> ${isUndefined()}`);

console.log('Trabajando con Arrays');
dias.forEach((dia) => { console.log(`Día -> ${dia}`); });
console.log(`Provincias -> ${provincias}`);

console.log('Trabajando con Strings');
for (const property in strings) {
  console.log(`${property}: ${strings[property]}`);
}
console.log(JSON.stringify(strings));

console.log('Trabajando con Callbacks');
console.log(callback);

console.log('Trabajando con Promesas');
const url = 'https://my-json-server.typicode.com/typicode/demo/posts';
axiosGet(url)
  .then((res) => { console.log(res); })
  .catch((error) => { console.log(error); });
console.log(url);

console.log('Trabajando con Supertest en API REST');

console.log('Trabajando con en DOM');

console.log('Trabajando con SnapShot');
