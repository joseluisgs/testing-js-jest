/* eslint-disable no-undef */
import { callback, axiosGet } from '../src/asincronia';

// Trabajdno con Callbacks
describe('Asincrono - Callback', () => {
  test('Callback', (done) => {
    const callbackInterno = (datos) => {
      expect(datos).toBe('Hola mundo callback');
      done();
    };
    callback(callbackInterno);
  });
});

// Trabajando con Promesas
describe('Asincrono - Promise(resolve, reject)', () => {
  // Consumiendo una API
  test('Promise - Promise(resolve, reject)', (done) => {
    const url = 'https://my-json-server.typicode.com/typicode/demo/posts';
    axiosGet(url).then((datos) => {
      const data = {
        id: 1,
        title: 'Post 1',
      };
      expect(datos.length).toBeGreaterThanOrEqual(1);
      expect(datos[0].id).toBeGreaterThanOrEqual(1);
      expect(datos[0]).toEqual(data);
      done();
    });
  });

  // Analizando respuestas
  test('Promise - .resolves', () => {
    const url = 'https://my-json-server.typicode.com/typicode/demo/profile';
    return expect(axiosGet(url)).resolves.toEqual({ name: 'typicode' });
  });

  // Probando que falla
  test('Promise - .rejects', () => {
    const url = 'https://my-json-server.typicode.com/typicode/demo/fails';
    return expect(axiosGet(url)).rejects.toEqual('Request failed with status code 404');
  });

  test('Promise - Promise.resolve', () => {
    const data = { nombre: 'Test', estado: true };
    return expect(Promise.resolve(data)).resolves.toEqual(data);
  });

  test('Promise - Promise.reject', () => {
    const data = { error: 'Error', code: 200 };
    return expect(Promise.reject(data)).rejects.toEqual(data);
  });
});

describe('Asíncrono usando async / await', () => {
  // Consimienddo una API
  test('Probando async / await - OK', async () => {
    const postAPI = 'https://my-json-server.typicode.com/typicode/demo/posts';
    const commnetsAPI = 'https://my-json-server.typicode.com/typicode/demo/comments';

    const post = await axiosGet(postAPI);
    const comments = await axiosGet(commnetsAPI);

    // Aquí ya puedes comprar objetos, cadenas, valores, longitud, etc.
    expect(post.length).toBeGreaterThanOrEqual(1);
    expect(post[0].id).toBe(1);
    expect(comments.length).toBeGreaterThanOrEqual(1);
    expect(comments[0].body).toBe('some comment');
  });

  // Probando si falla
  test('Probando async / await - FAIL', async () => {
    const failAPI = 'https://my-json-server.typicode.com/typicode/demo/fails';
    await expect(axiosGet(failAPI)).rejects.toEqual('Request failed with status code 404');
  });

  // Mas test
  test('async / await - rejects & resolves', async () => {
    await expect(Promise.resolve({ response: 'Correcto' })).resolves.toEqual({ response: 'Correcto' });
    // eslint-disable-next-line prefer-promise-reject-errors
    await expect(Promise.reject({ errorCode: 500, errorText: 'Not ready' })).rejects.toEqual({ errorCode: 500, errorText: 'Not ready' });
  });
});
