/* eslint-disable no-undef */
// supertest es un framework que nos permite testar api rest
import request from 'supertest';

const api = request('https://my-json-server.typicode.com/typicode/demo/');

// Testando una API Rest
describe('testing-api-rest', () => {
  test('GET /posts - success', async () => {
    const response = await api.get('/posts'); // usamos api para conectarnos al endpoint post
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual([
      {
        id: 1,
        title: 'Post 1',
      },
      {
        id: 2,
        title: 'Post 2',
      },
      {
        id: 3,
        title: 'Post 3',
      },
    ]);
  });

  test('POST /posts - success', async () => {
    const newPost = {
      id: 4,
      title: 'Post 4',
    };
    const response = await api.post('/posts').send(newPost);
    expect(response.statusCode).toEqual(201);
    expect(response.body).toEqual(newPost);
  });

  test('PUT /posts - success', async () => {
    const updatePost = {
      id: 1,
      title: 'Post 4',
    };
    const response = await api.put('/posts/1').send(updatePost);
    expect(response.statusCode).toEqual(200);
    // Tambiñen podemos pasarle el objeto que esperamos por si hay diferencias
    expect(response.body).toEqual({ id: 1, title: 'Post 4' });
  });

  it('DELETE /posts - success', async () => {
    const response = await api.delete('/posts/1');
    expect(response.statusCode).toEqual(200); // es importante ajustar bien lso códigos de respuesta (200, 201, 204, etc)
    // No comprobamos si devuelve algo, porque esta API No devuelve nada
  });

  // Ejercicio, hacerla con alguna api rest gratos como la de pokemon, la guerra de la galaxia o ricky Morty
});
