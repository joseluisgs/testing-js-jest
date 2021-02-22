# Testing JS con JEST

Conjunto de ejemplos para realizar test unitarios en JavaScript usando la librería JEST.

[![Jest](https://img.shields.io/badge/JS%20Test-Jest-red)](https://jestjs.io/docs/es-ES/getting-started)
[![JS Code](https://img.shields.io/badge/JS%20Code-ES2019-yellow)](https://www.ecma-international.org/ecma-262)
[![JS Style](https://img.shields.io/badge/JS%20Style-AirBnB-ff69b4)](https://airbnb.io/javascript)
[![Licence](https://img.shields.io/github/license/joseluisgs/testing-js-jest)](https://github.com/joseluisgs/testing-js-jest/blob/main/LICENSE)
![GitHub](https://img.shields.io/github/last-commit/joseluisgs/testing-js-jest)


- [Testing JS con JEST](#testing-js-con-jest)
  - [Acerca de](#acerca-de)
- [Instalación](#instalación)
  - [Otras configuraciones](#otras-configuraciones)
  - [Ejecutando el test](#ejecutando-el-test)
- [Matchers](#matchers)
  - [Igualdad](#igualdad)
  - [Numéricos](#numéricos)
  - [Boolean, Nulos y Undefined](#boolean-nulos-y-undefined)
  - [Arrays y contenido](#arrays-y-contenido)
  - [Strings](#strings)
- [Cobertura](#cobertura)
  - [Informe de Cobertura consola](#informe-de-cobertura-consola)
  - [Informe de Cobertura Web](#informe-de-cobertura-web)
  - [Test detectando cambios](#test-detectando-cambios)
- [Precondiciones y postcondiciones de test](#precondiciones-y-postcondiciones-de-test)
- [Testing asíncrono](#testing-asíncrono)
- [Testing API REST](#testing-api-rest)
- [Testing DOM](#testing-dom)
- [Snapshot testing](#snapshot-testing)
- [Principios del TDD](#principios-del-tdd)
  - [Ejemplo Contactos](#ejemplo-contactos)
  - [Ejemplo Cuenta](#ejemplo-cuenta)
  - [Mocks en TDD](#mocks-en-tdd)
- [Testeando un Framework: Vue.js](#testeando-un-framework-vuejs)
  - [Testear en Vue.js](#testear-en-vuejs)
  - [Montando componentes](#montando-componentes)
  - [Test sobre las propiedades](#test-sobre-las-propiedades)
  - [Test sobre propiedades computadas](#test-sobre-propiedades-computadas)
  - [Testeando Métodos y Eventos](#testeando-métodos-y-eventos)
  - [Ejemplo](#ejemplo)
- [Autor](#autor)
  - [Licencia](#licencia)
    - [Agradecimientos](#agradecimientos)

## Acerca de
Conjunto de códigos con el objetivo de introducir la suite de test [Jest](https://jestjs.io/docs/es-ES/getting-started) y mostrar como realizar test unitarios.

# Instalación
Es importante seguir la [documentación oficial](https://jestjs.io/docs/es-ES/getting-started). 

```bash
npm install --save-dev jest
```

## Otras configuraciones
Otras configuraciones realizadas las tienes en [Package.json](./package.json)

## Ejecutando el test
Debes tener un directorio llamado tests, y en ellos ficheros .spec.test.
```bash
npm run test
```

# Matchers
 Los [Matchers](https://jestjs.io/docs/es-ES/using-matchers) nos permiten comparar de diferente manera valores esperados con los obtenidos. Podemos hacerlo de la siguiente manera, aunque hay [mas](https://jestjs.io/docs/es-ES/expect):

## Igualdad
  - .toBe: Usado para comparar valores primitivos
  - .toEqual: Usado para comparar recursívamente todas las propiedades de un objetos, también conocido como igualdad profunda.

## Numéricos
  - .toBeLessThan: El valor es menor que.
  - .toBeLessThanOrEqual: El valor es menor o igual que.
  - .toBeGreaterThanOrEqual: El valor es mayor o igual que.
  - .toBeGreaterThan: El valor es mayor que.

## Boolean, Nulos y Undefined
  - .toBeTruthy: El valor es verdadero.
  - .toBeFalsy: El valor es falso.
  - .toBeUndefined: El valor es ‘undefined’
  - .toBeNull: El valor es ‘null’

## Arrays y contenido
  - .toContain: Contiene el elemento dentro del array
  - .toHaveLength: El array tiene la longitud

## Strings
  - .toMatch: Comprueba que un texto coincide con una expresión regular
  - .toHaveLength: Comprueba la longitud.
  - Podemos usar otros anteriores

# Cobertura
Podemos saber cuanto hemos testeado nuestro código realizando un análisis de cobertura. Jest nos ofrece el flag –coverage en la linea de comandos para comprobar la cobertura de nuestros test.

## Informe de Cobertura consola
npm run test:coverage
```bash
jest --coverage
```

 PASS  tests/funciones.spec.js
--------------|---------|----------|---------|---------|-------------------
File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------|---------|----------|---------|---------|-------------------
All files     |     100 |      100 |     100 |     100 |                   
 arrays.js    |     100 |      100 |     100 |     100 |                   
 boolean.js   |     100 |      100 |     100 |     100 |                   
 funciones.js |     100 |      100 |     100 |     100 |                   
 persona.js   |     100 |      100 |     100 |     100 |                   
 strings.js   |       0 |        0 |       0 |       0 |                   
--------------|---------|----------|---------|---------|-------------------

Test Suites: 3 passed, 3 total
Tests:       23 passed, 23 total
Snapshots:   0 total
Time:        1.703 s
Ran all test suites.

## Informe de Cobertura Web
Está en la carpeta coverage creada, en coverage/lcov-report/index.html
## Test detectando cambios
Jest nos ofrece el flag –watchAll para que este escuchando constantemente los cambios y pueda hacer las pruebas sobre los cambios realizados y no estar ejecutando el script constantemente.
npm run test:watch

```bash
jest --watchAll
```

# Precondiciones y postcondiciones de test
Muchas veces queremos tener una serie de condiciones a ejecutar antes o después de cada test o de cada conjunto de test. Podemos ponerlo incluso en cada suite o conjunto de describe.
- afterEach(): Después de cada prueba.
- afterAll(): Después de todas las pruebas.
- beforeEach(): Antes de cada prueba.
- beforeAll(): Antes de todas las pruebas.

# Testing asíncrono
Cuando necesitamos realizar test con funciones asíncronas jest nos ofrece varias opciones, usando callbacks, promesas y async / await.
De esta manera podemos testar por ejemplo consumo de APIs REST y ya usar métodos anteriores para saber si lo que recibimos es correcto.

# Testing API REST
Otra de las cosas que podemos hacer es testar nuestra propia API Rest o Api REST Remotas o simularlas en base de mocks. Para ello vamos a hacer uso de la librería [Supertest](https://github.com/visionmedia/supertest). También podríamos usar [Axios](https://github.com/axios/axios) como hemos visto en los apartados anteriores.

Para testear más rápido podemos usar ficheros mocks locales.

# Testing DOM
Podemos testar nuestro DOM con [Jest](https://jestjs.io/docs/es-ES/tutorial-jquery) usando Vanilla JS o JQuery, incluso podemos hacer uso de la librería [Jest-DOM](https://github.com/testing-library/jest-dom). Es recomendable que sepamos pasar la parte de la web y la lógica que queramos testear. Jest viene con jsdom que simula un entorno DOM como si estuviera en el navegador. Esto significa que cada API DOM que llamamos se puede observar de la misma manera que se observaría en un navegador.

# Snapshot testing
Los snapshots nos garantizan que no vaya a ocurrir algún cambio inesperado en nuestra UI. Comprobamos lo datos que tenemos con lo que estamos trayendo y que no deben de cambiar, ya que esto lo usamos para casos en donde algún dato en particular muy rara vez cambiará. 

En caso de que queramos aceptar el cambio añadiremos el parámetro -u.

Una vez ejecutado el test con snapshot, este nos creara una carpeta con el nombre __snapshots__. Esta fichero es una captura de los datos que le pasamos en el fichero .La primera vez que ejecutamos el test crea esa captura que se usara para validar. El resto de las veces comparará y si hay cambios dará error.

Si queremos crear una excepción, añadiremos las excepciones dentro del método .toMatchSnapshot(). Es importante que cuando ejecutemos el test con las excepciones usemos el flag -u para que use los nuevo cambios si ya existiese una captura previa.

# Principios del TDD
Automatizar los test unitarios y poder trabajar con ellos nos ofrece iniciar las bases del [TDD (Test-Driven Development)](https://uniwebsidad.com/libros/tdd). Para ello: 
- Crea el test
- Comprueba que falla
- Escribe el código justo para pasarlo
- Comprueba que funciona
- Refactoriza
- Vuelve al primer paso
- Y disfruta 🙂 

El propósito del desarrollo guiado por pruebas es lograr un código limpio que funcione. La idea es que los requisitos sean traducidos a pruebas, de este modo, cuando las pruebas pasen se garantizará que el software cumple con los requisitos que se han establecido.

## Ejemplo Contactos
Puedes ver este ejemplo en contactos.js, donde primero se hizo los test y luego se hizo una implementación que además presenta distintas alternativas.

## Ejemplo Cuenta
Además puedes seguir el ejemplo en src/cuenta donde se ha desarrollado un ejemplo completo siguoendo TDD y ATDD donde puede seguirlo commit a commit.

## Mocks en TDD
También podemos hacer uso de Mocks para crear los test desde el comienzo y saber si están correctos y con estos mock posteriormente crear nuestro código que lo paso. Recuerda que un Mock es un objeto pre-programado con expectativas que conforman la especificación de cómo se espera que se reciban las llamadas. Puedes verlo en el fichero mocks.

# Testeando un Framework: Vue.js
En este caso vamos a ver como testear un Framework. Es importante remarcar que cada Framework tiene sus propias particularidades y debemos leer bien su docuemntación de como hacerlo. En nuestro caso usaremos [Vue.js](https://vuejs.org/) y su suite de herramientas de testeo que ussan Jest, concidas como [Vue Test Utils](https://vue-test-utils.vuejs.org/). Hemos usado como ejemplo el proyecto en src/vue-testing.

## Testear en Vue.js
Nos centraremos en ejecutar el comando test:unit para ejecutar nuestros test unitarios
```bash
npm run test:unit
```
E iremos apliacando TDD. Puedes seguir el proyecto commit a commit.

## Montando componentes
Para realizar el montaje del componente para nuestra prueba usando la siguiente linea: const wrapper = mount(XXXX), Siendo XXXX El componente a montar.

En este momento si pasamos el test se mostrará como correcto, pero es que realmente todavía no hemos realizado ninguna comprobación. Para que los test puedan comprobar el funcionamiento necesitamos realizar una afirmación (assertions, en jest es expect) y aplicarle un match.

Debemos tener en cuenta que podemos montar los componentes de distintas maneras:
- shallowMount: Monta el componente sin sus hijos.
- mount: Monta el componente con sus hijos.

De esta manera tenemos el Wrapper de nuestro componente y podemos trabajar con él siguiendo la [guía de testing](https://vue-test-utils.vuejs.org/api/wrapper/#properties). De hecho dentro del objeto vm podemos acceder a todos los datos y funcionalidad del componente.

Debemos destacar que wrapper es un mock de la instancia de Vue.

Si nos fijamos, podemos ver que el Padre que contiene un hijo cuando usamos shallowMount nos ha montado una especie de componente “falso” (<child-component-stub></child-component-stub>) que sustituye al real. Esto nos puede resultar muy útil cuando necesitamos aislar los test que tenemos que realizar sobre el padre y no necesitamos a sus hijos.

## Test sobre las propiedades
Para realizar los test sobre las propiedades de nuestro componentes, vue-test-utils ofrece tanto para mount como shallowMount un segundo parámetro llamado propsData.

Ademas de propsData, también podemos usar setProps para añadir propiedades (Pero este es asíncrono y devemos usar async/await).

## Test sobre propiedades computadas
Los test sobre las propiedades computadas son muy sencillos, ya que únicamente deberemos llamarlas como lo haríamos en nuestro código.

## Testeando Métodos y Eventos
Los eventos de un componente pueden llamar a métodos, para ello los llamamos igual que un método normal y comprobamos los resultados, o llamamos con el método trigger al evento disparado.

## Ejemplo
Un ejemplo de todo lo visto puedes verlo en Final.vue y su test.

# Autor

Codificado con :sparkling\_heart: por [José Luis González Sánchez](https://twitter.com/joseluisgonsan)

[![Twitter](https://img.shields.io/twitter/follow/joseluisgonsan?style=social)](https://twitter.com/joseluisgonsan)
[![GitHub](https://img.shields.io/github/followers/joseluisgs?style=social)](https://github.com/joseluisgs)

## Licencia

Este proyecto esta licenciado bajo licencia **MIT**, si desea saber más, visite el fichero
[LICENSE](./LICENSE) para su uso docente y educativo.

### Agradecimientos
Proyectos basados en este [excelente tutorial](https://tecnops.es/testing-en-javascript-con-jest-parte-1-de-2/). Muchas gracias