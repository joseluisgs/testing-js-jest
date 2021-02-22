/* eslint-disable no-undef */

// Suite de test de cuenta
// Mejoras: Lanzar excepciones y capturarlas en los test
import Cuenta from '../cuenta';

describe('TDD Cuenta', () => {
  let cuenta;
  beforeAll(() => {
    // console.log('Antes de cada prueba Creamos el Arrange Global');
    // console.log(' No tenemos nunguno por ahora');
  });

  beforeEach(() => {
    // console.log('Antes de cada prueba');
    cuenta = new Cuenta();
  });

  describe('TDD Cuenta: Ingresar', () => {
  // Vamos a usar algunas cosas
    test('Cuenta: Al crear una cuenta el saldo debería ser cero', () => {
      expect(cuenta.getSaldo()).toBe(0);
    });

    test('Cuenta: Al ingresar 100 en cuenta vacía el saldo debería ser 0', () => {
      cuenta.ingresar(100);
      expect(cuenta.getSaldo()).toBe(100);
    });

    test('Cuenta: Al ingresar 3000 en cuenta vacía el saldo es 3000', () => {
      cuenta.ingresar(3000);
      expect(cuenta.getSaldo()).toBe(3000);
    });

    test('Cuenta: Al ingresar 3000 en cuenta con 100 el saldo es 3100', () => {
    // Arrange (set up)
      cuenta.ingresar(100);
      // Act
      cuenta.ingresar(3000);
      // Assert
      expect(cuenta.getSaldo()).toBe(3100);
    });

    test('Cuenta: Al ingresar -100 en cuenta vacía, el saldo sigue siendo 0', () => {
      cuenta.ingresar(-100);
      expect(cuenta.getSaldo()).toBe(0);
    });

    test('Cuenta: Si ingreso 100.45 en una cuenta vacía, el saldo es de 100.45', () => {
      cuenta.ingresar(100.45);
      expect(cuenta.getSaldo()).toBe(100.45);
    });

    test('Cuenta: Si ingreso 100.457 en una cuenta vacía, el saldo es de 0', () => {
      cuenta.ingresar(100.457);
      expect(cuenta.getSaldo()).toBe(0);
    });

    test('Cuenta: Si ingreso 6000.00 en una cuenta vacía, el saldo es de 6000.00', () => {
      cuenta.ingresar(6000.00);
      expect(cuenta.getSaldo()).toBe(6000.00);
    });

    test('Cuenta: Si ingreso 6000.01 en una cuenta vacía, el saldo es de 0', () => {
      cuenta.ingresar(6000.01);
      expect(cuenta.getSaldo()).toBe(0);
    });

    // Te tocaría hacer los test de retiradas e ingresos 😊 💪

    /**
   * "Test Driven Bug Fixing"
   * Hace tiempo que acabamos el desarrollo de nuestra aplicación y está funcionando en producción sin problemas.
   * Pero un día llega nuestro cliente super preocupado. La aplicación no va. Dice que a algunos usuarios les deja sin saldo.
   * Como bien sabemos por experiencia, para poder corregir un bug, necesitamos reproducirlo.
   * Así, que le pedimos al cliente que nos diga cómo ha sido alguno de los casos en los que ha ocurrido el fallo.
   * Nos cuenta que un usuario se ha quejado de que tenía 2350€ en su cuenta, ha ido a ingresar 7000 y se ha quedado sin saldo.
   * Nuestro primer impulso es ir al código, a la función ingreso, y mirarla para ver si descubrimos el fallo. ¡¡¡Error!!!
   * Para corregir el bug siguiendo TDD hay que seguir la técnica denominada Test Driven Bug Fixing
   * (Corrección de Bugs Guíado por Tests). Esto no es más que hacer lo que hemos estado haciendo durante todo el proyecto
   */

    test('Cuenta: Si ingreso más de 6000 no ess Valido. Al ingresar 7000 en Cuenta Con 2350 el saldo se queda 2350', () => {
    // Arrange (set up)
      cuenta.ingresar(2350);

      // Act
      cuenta.ingresar(7000);

      // Asert
      expect(cuenta.getSaldo()).toBe(2350);
    });
  });

  describe('TDD Cuenta: Retirar', () => {
    // Faltan muchos, pero te m uestro algunos importantes. Deben estar todos
    test('Cuenta: Al retirar 100 en una cuenta con 500 el sado es 400', () => {
      cuenta.ingresar(500);
      expect(cuenta.getSaldo()).toBe(500);
      cuenta.retirar(100);
      expect(cuenta.getSaldo()).toBe(400);
    });

    test('Cuenta: No se puede retirar más del saldo disponible', () => {
      cuenta.ingresar(200);
      expect(cuenta.getSaldo()).toBe(200);
      cuenta.retirar(500);
      expect(cuenta.getSaldo()).toBe(200);
    });

    test('Cuenta: Retirada con dos decimales', () => {
      cuenta.ingresar(1000);
      expect(cuenta.getSaldo()).toBe(1000);
      cuenta.retirar(100.45);
      expect(cuenta.getSaldo()).toBe(899.55);
    });

    test('Cuenta: Retirada con más de dos decimales', () => {
      cuenta.ingresar(1000);
      expect(cuenta.getSaldo()).toBe(1000);
      cuenta.retirar(100.451);
      expect(cuenta.getSaldo()).toBe(1000);
    });

    test('Cuenta: No se puede retirar una cantidad negativa', () => {
      cuenta.ingresar(500);
      expect(cuenta.getSaldo()).toBe(500);
      cuenta.retirar(-100);
      expect(cuenta.getSaldo()).toBe(500);
    });

    test('Cuenta: No se puede retirar mas de 6000', () => {
      cuenta.ingresar(3000);
      cuenta.ingresar(4000);
      expect(cuenta.getSaldo()).toBe(7000);
      // Valores límite
      cuenta.retirar(6000.01);
      expect(cuenta.getSaldo()).toBe(7000);
    });
  });

  describe('TDD Cuenta: Transferencia', () => {
    test('Cuenta: Tranferencia de una cantidad', () => {
      const cuenta1 = new Cuenta();
      cuenta1.ingresar(500);

      const cuenta2 = new Cuenta();
      cuenta2.ingresar(50);

      cuenta1.transferencia(cuenta2, 100);

      expect(cuenta1.getSaldo()).toBe(400);
      expect(cuenta2.getSaldo()).toBe(150);
    });

    test('Cuenta: Tranferencia de una cantidad negativa no es válida', () => {
      const cuenta1 = new Cuenta();
      cuenta1.ingresar(500);

      const cuenta2 = new Cuenta();
      cuenta2.ingresar(50);

      cuenta1.transferencia(cuenta2, -100);

      expect(cuenta1.getSaldo()).toBe(500);
      expect(cuenta2.getSaldo()).toBe(50);
    });

    test('Cuenta: Tranferencia de  con limite de 3000', () => {
      const cuenta1 = new Cuenta();
      cuenta1.ingresar(3500);

      const cuenta2 = new Cuenta();
      cuenta2.ingresar(50);

      cuenta1.transferencia(cuenta2, 3000.01);

      expect(cuenta1.getSaldo()).toBe(3500);
      expect(cuenta2.getSaldo()).toBe(50);
    });

    test('Cuenta: Tranferencia No se puede trasmitir más saldo del disponible', () => {
      const cuenta1 = new Cuenta();
      cuenta1.ingresar(2350);

      const cuenta2 = new Cuenta();
      cuenta2.ingresar(300);

      cuenta1.transferencia(cuenta2, 2500);

      expect(cuenta1.getSaldo()).toBe(2350);
      expect(cuenta2.getSaldo()).toBe(300);
    });
  });
});
