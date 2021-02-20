/* eslint-disable no-undef */
import contactos from '../src/contactos';

describe('TDD Contactos', () => {
  // Mi lista de contactos de prueba
  const variosContactos = [{
    nombre: 'John',
    email: 'john@gmail.com',
    id: 1,
  }, {
    nombre: 'Jane',
    email: 'jane@gmail.com',
    id: 2,
  }, {
    nombre: 'Yolo',
    email: 'yolo@gmail.com',
    id: 3,
  }];

  // Suite Test de Incluir
  describe(' TDD incluir', () => {
    // Antes de cada test, reuniciamos
    beforeEach(() => {
      contactos.reiniciar();
    });

    // Agregamos
    test('Debe agregar un contacto con props {nombre, email, id}', () => {
      // Cojo el contacto 0
      const contacto = variosContactos[0];
      // icluimos
      contactos.incluir(contacto);
      // Obtenemos lo que hay
      const actual = contactos.db();
      const esperado = [contacto];
      // Deben coincidir
      expect(actual).toEqual(esperado);
    });

    // Hay que probar tambien si falla y saber por qué falla
    test('Debe mostrar un error si no contiene los props {nombre, email}', () => {
      const contacto = {
        nombre: 'Steven',
        email: 's@gmail.com',
      };

      // El error
      expect(() => { contactos.incluir(contacto); }).toThrow('Formato inválido');
    });
  });

  // Debe borrar el ocntacto
  describe('TDD borrar', () => {
    // Antes de nada, reiniciamos e insertamos (ya sabemos que funciona 😉)
    beforeEach(() => {
      contactos.reiniciar();
      variosContactos.forEach((contacto) => contactos.incluir(contacto));
    });

    // Borramos
    test('Debe borrar solo el primer contacto', () => {
      // Llamamos a la función
      contactos.borrar(1);
      // Ontenemos la lista actual
      const actual = contactos.db();
      // Lo esperado son todos menos el primero
      const esperado = [
        variosContactos[1],
        variosContactos[2],
      ];
      // ¿Verdad?
      expect(actual).toEqual(esperado);
    });

    // ¿Y si no existe?
    test('No debe borrar ningún contacto si el id no se encontró', () => {
      contactos.borrar(100);
      const actual = contactos.db();
      const esperado = variosContactos;

      expect(actual).toEqual(esperado);
    });
  });

  // Vamos a testear una petición a la API que hacemos
  describe('starwars', () => {
    // Existe ese endpoint o personaje
    test('Debe contener personajes de starwars', async () => {
      const url = 'https://swapi.dev/api/people/';
      const data = await contactos.starwars(url);
      expect(data).toBeGreaterThanOrEqual(0);
    });
    // El caso que falle
    test('Debe fallar si la url es incorrecta', async () => {
      const url = 'https://swapi.dev/api/people/joseluisgs/';
      const data = await contactos.starwars(url);
      expect(data).not.toBeNull();
      expect(data.response.status).toBe(404);
      expect(data.response.statusText).toBe('NOT FOUND');
      expect(data.message).toBe('Request failed with status code 404');
    });
  });
});
