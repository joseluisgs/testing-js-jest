/* eslint-disable no-undef */
import pizzas from '../src/pizzas.json';

describe('Jugando con Mocks desde cero para TDD', () => {
// Un test sencillo para saber si los datos de la puzza han cambiado
  test('Los datos de la pizza son correctos', () => {
    // Hacemos el snapshot y vemos que todo es correcto
    expect(pizzas).toMatchSnapshot();
    expect(pizzas).toHaveLength(4);
    expect(pizzas.map((pizza) => pizza.name)).toEqual([
      'Chicago Pizza',
      'Neapolitan Pizza',
      'New York Pizza',
      'Sicilian Pizza',
    ]);
  });

  // Comprobamos que cada pizza tiene los datos correctos
  for (let i = 0; i < pizzas.length; i += 1) {
    // eslint-disable-next-line no-loop-func
    test(`Pizza[${i}] debería tener las propiedades (id, name, image, desc, price)`, () => {
      expect(Object.prototype.hasOwnProperty.call(pizzas[i], 'id'));
      expect(Object.prototype.hasOwnProperty.call(pizzas[i], 'name'));
      expect(Object.prototype.hasOwnProperty.call(pizzas[i], 'image'));
      expect(Object.prototype.hasOwnProperty.call(pizzas[i], 'desc'));
      expect(Object.prototype.hasOwnProperty.call(pizzas[i], 'price'));
      // Así tambien
      // expect(pizzas[i]).toHaveProperty('name');
      // expect(pizzas[i]).toHaveProperty('image');
      // expect(pizzas[i]).toHaveProperty('desc');
      // expect(pizzas[i]).toHaveProperty('price');
    });
  }

  // Así se define en Jest una función Mock
  test('Función Mock Básica', () => {
    const mock = jest.fn(() => 'I am a mock function');
    // Cuando la llamemos debe devolver-> dos formas de hcerlo
    // Pasandole un texto
    expect(mock('Calling my mock function!')).toBe('I am a mock function');
    expect(mock).toHaveBeenCalledWith('Calling my mock function!');
  });

  // También podemos devolver un valor con l función Mock
  test('Mock devuleve un valor una vez', () => {
    const mock = jest.fn();

    // Podemos encadenarlas
    mock.mockReturnValueOnce('Hello').mockReturnValueOnce('there!');

    mock(); // 'Hello'
    mock(); // 'there!'

    expect(mock).toHaveBeenCalledTimes(2); // la llama dos vecez
    mock('Hello', 'there', 'Jose'); // con tres argumentos
    expect(mock).toHaveBeenCalledWith('Hello', 'there', 'Jose');

    mock('Jose'); // con un argumento
    expect(mock).toHaveBeenLastCalledWith('Jose');
  });

  // Vamos a mockear el valor de vuelta
  // diferencias entre mockReturnValue y mockImplementation
  test('Mockeando la implementación de una función', () => {
    // Cuando la llamamos devuelve España
    const mock = jest.fn().mockImplementation(() => 'España');
    expect(mock('Pais')).toBe('España');
    expect(mock).toHaveBeenCalledWith('Pais');
  });

  // Podemos usar y "spiar" un función importada para mockear su funcionamiento
  // Podemos modificarla
  test('Espeiando el usu de una función', () => {
    // Objeto con la función a mockear
    const pizza = {
      name: (n) => `Pizza name: ${n}`,
    };
    // Camos a espiar esta función con este parámetro
    const spy = jest.spyOn(pizza, 'name');
    // Si la llamo con queso nos devuelve lo indicado
    expect(pizza.name('Cheese')).toBe('Pizza name: Cheese');
    expect(spy).toHaveBeenCalledWith('Cheese');
  });

  // Podemos mockear la implementación de una función de un módulo
  test('Spiar usando mockImplemntation', () => {
    // Objeto con la función a mockear
    const pizza = {
      name: (n) => `Pizza name: ${n}`,
    };
    // La espiamos
    const spy = jest.spyOn(pizza, 'name');
    // eslint-disable-next-line no-unused-vars
    spy.mockImplementation((n) => 'Crazy pizza!');
    // Ejecutamos la función mockeada
    expect(pizza.name('Cheese')).toBe('Crazy pizza!');
    spy.mockRestore(); // vvolvemos a la original
    expect(pizza.name('Cheese')).toBe('Pizza name: Cheese');
  });

  // Vamos a testear las pizzas
  test('Testeamos la pizzas', () => {
    const pizza1 = pizzas[0];
    const pizza2 = pizzas[1];
    const pizza3 = pizzas[2];

    // Funciñon a moquear, devuleve el valor de las pizzas, nombre
    const pizza = jest.fn((currentPizza) => currentPizza.name);

    pizza(pizza1); // chicago pizza
    pizza(pizza2); // neapolitan pizza
    pizza(pizza3); // new york pizza
    // ¿Quien es la última?
    expect(pizza).toHaveLastReturnedWith('New York Pizza');
  });

  // Vamos a comprobar si realmente coiciden los datos en una pizza
  test('Los datos de la pizza de New York deben coicidir', () => {
    const newYorkPizza = {
      id: 3,
      name: 'New York Pizza',
      image: '/images/ny-pizza.jpg',
      desc:
      // eslint-disable-next-line max-len
      'New York-style pizza has slices that are large and wide with a thin crust that is foldable yet crispy. It is traditionally topped with tomato sauce and mozzarella cheese.',
      price: 8,
    };
    expect(pizzas[2]).toMatchObject(newYorkPizza);
  });

  // Vamos a testear de nuevo promesas y async/await
  test('Esperamos que se resuleva la promesa', async () => {
    // Objeto con la función mockeada que resuleve la promesa
    const user = {
      getFullName: jest.fn(() => Promise.resolve('Jose Luis')),
    };
    await expect(user.getFullName('Jose Luis')).resolves.toBe('Jose Luis');
  });

  test('Esperamos que se rechace la promesa', async () => {
    // Objeto con la función
    const user = {
      getFullName: jest.fn(() => Promise.reject(new Error('Algo fue mal...'))),
    };
    await expect(user.getFullName('Karl Hadwen')).rejects.toThrow(
      'Algo fue mal...',
    );
  });
});
